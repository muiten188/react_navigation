import React from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { RootRouterContainer } from '../config/root_navigation_config';
// export const AppWithNavigationState = ({ navigationAction, navigationReducer }) => (
//     <RootRouterContainer navigation={addNavigationHelpers({ navigationAction, state: navigationReducer })} />
// );
export default class AppWithNavigationState extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { navigationAction,homeAction, navigationReducer, homeReducer } = this.props;
        return (
            <RootRouterContainer navigation={addNavigationHelpers({ actions: { navigationAction,homeAction }, state: navigationReducer, reducers: { homeReducer, navigationReducer } })} />
        );
    }
}