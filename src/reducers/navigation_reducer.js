import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import * as action_types from '../actions/action_types';
import { RootRouterContainer } from '../config/root_navigation_config';

const mainAction = RootRouterContainer.router.getActionForPathAndParams('Home');
const tempNavState = RootRouterContainer.router.getStateForAction(mainAction);
const initialNavState = RootRouterContainer.router.getStateForAction(
    mainAction,
    0
);
function navigationReducer(state = initialNavState || {}, action = {}) {
    let nextState;
    switch (action.type) {
        case action_types.PUSHACTION:
            nextState = RootRouterContainer.router.getStateForAction(
                NavigationActions.navigate({ routeName: action.route.type }),
                state
            );
            break;
        case action_types.POPACTION:
            nextState = RootRouterContainer.router.getStateForAction(
                NavigationActions.back(),
                state
            );
            break;
        default:
            nextState = RootRouterContainer.router.getStateForAction(action, state);
            break;
    }
    return nextState || state;
}
export default navigationReducer;