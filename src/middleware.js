import {
    APP_LOAD,
    LOGIN,
    LOGOUT
} from './actions/actionTypes';

const localStorageMiddleware = store => next => action => {
    if (action.type === APP_LOAD || action.type === LOGIN) {
        if (!action.error) {
            window.localStorage.setItem('jwt', '');
        }
    } else if (action.type === LOGOUT) {
        window.localStorage.setItem('jwt', '');
    }
    next(action);
};

export { localStorageMiddleware }