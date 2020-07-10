
import moment from 'moment'
import momentDurationFormatSetup from "moment-duration-format";

import { store, getKey } from './storage'
import { Request } from '../Utils/api'

momentDurationFormatSetup(moment);

let resumeCounter = async props => {
    console.log('---------------RESUME COUNTER--------------')
    return new Promise(async (r, j) => {
        const siteID = await getKey('siteID', true)

        if (siteID == null) {
            console.log('no siteid found')
            // ? reject the promise
            j(0)
        }else {
            console.log('Site ID : ', siteID)
        }

        const signedIn = await getKey('signedIn')
        const siteDetails = await getKey('siteDetails')

        // check if we already have the attendance data in local cache before attempting to ask the server for it.
        if (!!signedIn && !!siteDetails) {
            console.log('--Found signedin in cache')
            const startTime = moment(signedIn, "DD-MM-YYYY HH:mm:ss A");
            const duration = getDuration(startTime, props)

            // just making sure its not changing the state when it doesnt need to
            if(props.siteDetails==null) {
                props.modifySiteDetails(siteDetails)
            }
            if(props.isSignedIntoOffice == false) {
                props.modifyIsSignedInOffice(true)        
            }
            // ? resolve the promise
            r(duration);
        } else {
            /* 
                this case occurs when the attendance is not stored in local cache. 
                So we make a request to the server to get data about the site the user signed into and when.
                if there are no attendance recorded. then we just abandon the idea of starting the timer.
            */
            const responseJson = await Request({ route: 'attendance', params: siteID })

            if (responseJson.data !== null) {
                const { signedIn, siteFK } = responseJson.data;
                await store('signedIn', signedIn)// store the signedIn date for future usage
                await store('siteDetails', siteFK)// store the site details for future usage
                console.log('user signed in at :: ', signedIn)
                const startTime = moment(signedIn, "DD-MM-YYYY HH:mm:ss A");
                const duration = getDuration(startTime, props)

                // ? siteFK is actually the data not the _id
                props.modifySiteDetails(siteFK)
                props.modifyIsSignedInOffice(true)
                // ? resolve the promise
                r(duration)
            } else {
                // TODO : handle this properly
                console.log('no open sessions found!')
            }
        }
    })
}

// helper for resumeCounter
let getDuration = (startTime, props) => { // get difference between dates and set the counter value
    const currentTime = moment(Date.now()).format('DD-MM-YYYY hh:mm:ss A');
    const endTime = moment(currentTime, "DD-MM-YYYY HH:mm:ss A");
    const duration = moment.duration(endTime.diff(startTime));
    const milliseconds = duration.asMilliseconds();
    console.log(moment.duration(milliseconds, "milliseconds").format("hh: mm: ss"))
    props.modifyCounter(milliseconds)
    return milliseconds
}

export { resumeCounter }