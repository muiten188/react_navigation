import * as action_types from '../actions/action_types';
export function pushAction(route) {
    return {
        type: action_types.PUSHACTION,
        route
    }
}
export function popAction() {
    return {
        type: action_types.POPACTION
    }
}