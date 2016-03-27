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

        return (
            <Navigator
                initialRoute={{component: Firstpage}}
                configureScene={(route)=> {
                return route.scene || Navigator.SceneConfigs.FadeAndroid;
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
