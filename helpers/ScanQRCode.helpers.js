import { Request } from '../Utils/api'
import { Vibration } from 'react-native'
import { store } from '../helpers/storage'
//? helpers
import { resumeCounter } from '../helpers/Timer.helpers'

const SignInOffice = async ({ type, data }, props) => {
    console.log('scanned! ', data)

    const isJWT = /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/

    if (!isJWT.test(data)) { // check if not a valid JWT token syntax
        Vibration.vibrate() // vibrate for scanning the wrong QR code
        console.log("THAT'S NOT A JWT TOKEN")
        return false
    }

    await store('siteID', data) // store siteID
    Vibration.vibrate() // vibrate for scanning it successfully

    const responseJson = await Request({
        method: 'POST',
        body: {
            time: Date.now()
        },
        route: 'employee/signIn',
        params: data
    })

    console.log(responseJson)
    if (!!responseJson.employee) {
        console.log('success request')
        // const { dailyRequired, from, to } = responseJson.employee.contract.hours
        // this.setState({ /* dailyRequired, from, to,*/ isSignedIn: true, scanningError: false })
        Promise.all([
            // await store('dailyRequired', dailyRequired),
            // await store('from', from),
            // await store('to', to),
            await store('isSignedIn', 1),
            await store('siteDetails', responseJson.siteDetails),
        ])
        resumeCounter(props)
        return true
    }
};

export { SignInOffice }