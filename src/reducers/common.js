import { APP_LOAD, HOME_PAGE_LOADED } from '../actions/actionTypes';

const defaultState = {
    appName: 'React_Redux_Demo',
    token: null
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case APP_LOAD:
            return {
                ...state,
                token: action.token || null,
                appLoaded: true
            };
        case HOME_PAGE_LOADED:
            return state;
        default:
            return state;
    }
};