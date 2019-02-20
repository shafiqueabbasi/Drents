import { userConstants } from '../_constants';
// import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';
import { HttpUtils } from '../Service/HttpUtils';

export const userActions = {
    login,
    logout,
    register,
    // getAll,
    // delete: _delete
};

function login(user, to, callback) {
    return dispatch => {
        dispatch(request({ user }));

        HttpUtils.post(to, user)
            .then(
                user => { 
                    if(user !== undefined){
                        document.getElementById("SignIn").click();
                        dispatch(success(user));
                        callback(user);
                    }else {
                        callback("User email or passwaord not matched");
                    }
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    localStorage.removeItem('user');
    return { type: userConstants.LOGOUT };
}

function register(user, callback) {
    return dispatch => {
        dispatch(request(user));

        HttpUtils.post('signup', user)
            .then(
                user => { 
                    document.getElementById("SignUp").click();
                    dispatch(success());
                    callback(user);
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

// function getAll() {
//     return dispatch => {
//         dispatch(request());

//         userService.getAll()
//             .then(
//                 users => dispatch(success(users)),
//                 error => dispatch(failure(error.toString()))
//             );
//     };

//     function request() { return { type: userConstants.GETALL_REQUEST } }
//     function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
//     function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
// }

// // prefixed function name with underscore because delete is a reserved word in javascript
// function _delete(id) {
//     return dispatch => {
//         dispatch(request(id));

//         userService.delete(id)
//             .then(
//                 user => dispatch(success(id)),
//                 error => dispatch(failure(id, error.toString()))
//             );
//     };

//     function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
//     function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
//     function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
// }