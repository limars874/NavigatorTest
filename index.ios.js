/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
    AppRegistry,
    Component,
    View,
    Navigator,
} from 'react-native';

import Firstpage from './firstpage';


class NavigatorTest extends Component {

    constructor(props){
        super(props);
    }


    render() {
        const initName = 'firstpage';
        const initComponent = Firstpage;
        return (
            <Navigator
                initialRoute={{name: initName, component: initComponent}}
                configureScene={(route)=> {
                return Navigator.SceneConfigs.VerticalDownSwipeJump;
            }}
                renderScene={(route, navigator)=> {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator}/>

            }} />
        );
    }
}
;


AppRegistry.registerComponent('NavigatorTest', () => NavigatorTest);
