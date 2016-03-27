/**
 * lifeCycles demo
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
    StyleSheet,
    Component,
    Text,
    View,
    TouchableOpacity,
    Navigator,
} from 'react-native';

import Secondpage from './secondpage';
import Thirdpage from './thirdpage';

class GotoNextPageComponent extends Component {
    render(){
        return(
            <TouchableOpacity style={[styles.buttonstyle,{borderColor:'red'}]} onPress={()=>this.props.that.gotoSecond(this.props.scenename)}>
                <Text>{this.props.scenename} >> secondpage </Text>
            </TouchableOpacity>
        )
    }

}


function createGotoNextPage(scenename,key){
    return <GotoNextPageComponent key={key} scenename={scenename} that={this} />
}

export default class Firstpage extends Component {

    constructor(props){
        super(props);
    }

    gotoSecond(scenename){
        console.log('gotosecond ')

        let scenekey = Object.keys(Navigator.SceneConfigs)[3];
        const { navigator } = this.props;
        if(navigator){
            navigator.push({
                component:Secondpage,
                scene:Navigator.SceneConfigs[scenename],
            })
        }
    }

    gotothird(){
        const { navigator } = this.props;
        if(navigator){
            navigator.push({
                component:Secondpage,
                params:{
                    id:1,
                    info:'from firstpage'
                }
            })
        }
    }


    render(){
        const scenekeys = Object.keys(Navigator.SceneConfigs);
        return (
            <View style={styles.container}>
                <Text style={styles.center}>first page</Text>
                {scenekeys.map(createGotoNextPage.bind(this))}
            </View>
        );
    }
}
;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    center: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    buttonstyle:{
        justifyContent: 'center',
        alignItems: 'center',
        width:150,
        height:40,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor:'#06c1ae',
        marginBottom: 5,
    },
})