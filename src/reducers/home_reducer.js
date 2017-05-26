import * as action_types from '../actions/action_types';
const initState = {

};
function navigationReducer(state = initState || {} || {}, action = {}) {
    switch (action.type) {
        case action_types.GETLUCKYDRAWER:
            return {
                ...state,
                action
            };
        default:
            return state;
    }
}