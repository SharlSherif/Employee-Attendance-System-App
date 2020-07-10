import { connect } from 'react-redux';
import { MODIFY_COUNTER, MODIFY_SITEDETAILS, SIGN_IN_OFFICE, SET_USER } from '../reducers/actions';

const mapStateToProps = state => ({ ...state.app })
const mapDispatchToProps = (dispatch) => {
    return {
        modifyCounter: counter =>
            dispatch({
                type: MODIFY_COUNTER,
                payload: counter
            }),
        modifySiteDetails: siteDetails =>
            dispatch({
                type: MODIFY_SITEDETAILS,
                payload: typeof siteDetails == 'object' ? siteDetails : JSON.parse(siteDetails)
            }),
        modifyIsSignedInOffice: isSigned =>
            dispatch({
                type: SIGN_IN_OFFICE,
                payload: isSigned
            }),
        setUser: ({ user, auth }) => {
            dispatch({
                type: SET_USER,
                payload: {
                    user,
                    // indicates if the user is authed or not
                    auth
                }
            })
        }
    }
}

export default (component) => connect(mapStateToProps, mapDispatchToProps)(component)