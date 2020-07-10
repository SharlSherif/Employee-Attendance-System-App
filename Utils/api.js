import { getKey } from '../helpers/storage'
import reduxStore from './reduxStore';
import { NETWORK_STATUS } from '../reducers/actions';
// ! for testing
const API = 'http://192.168.1.10:4000/api'

const Request = async ({ method = 'GET', route = '', params = '', isToken = true, body = undefined }, i = 0) => {
    if (i == 2) {
        console.log('no internet connection')
        reduxStore.dispatch({
            type: NETWORK_STATUS,
            payload: false
        })
        return
    }
    let headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }

    if (body !== undefined) {
        body = JSON.stringify(body)
    }
    if (isToken) {
        headers.Authorization = await getKey('token', true)
    }

    console.log('--Sending a Request | Has Token : ', isToken)

    return new Promise(async (r, j) => {
        await fetch(API + '/' + route + '/' + params, {
            method,
            headers,
            body
        })
            .then(async response => {
                r({ success: response.ok, status: response.status, headers: response.headers, ...await response.json() })
            })
            .catch(async error => {
                console.log(i)
                console.log('request error: ' + error)
                i++
                let response = await Request({
                    method,
                    route,
                    params,
                    isToken,
                    body
                }, i)

                if (response) {
                    console.log(response)
                    r(response)
                }
                j(error)
            })
    })
}

export { Request }