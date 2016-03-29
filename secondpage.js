/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
    StyleSheet,
    Component,
    Text,
    View,
    Navigator,
    TouchableOpacity,
} from 'react-native';


import Thirdpage from './thirdpage';
import Firstpage from './firstpage';


class Childone extends Component {

    back(){
        let nav = this.props.navigator;
        nav.push({
            component: Thirdpage,
        })
    }


    render(){
        return (
            <TouchableOpacity style={[styles.buttonstyle,{borderColor:'red'}]} onPress={()=>this.back()}>
                <Text>child push</Text>
            </TouchableOpacity>

        )
    }
}

export default class Secondpage extends Component {

    constructor(props){
        super(props);
    }

    back(){
        const { navigator } = this.props;
        if(navigator){
            navigator.pop();
        }
    }

    gotoThird() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                component: Thirdpage,
                params:{
                    id:2,
                    info:'from second page'
                },
                scene:Navigator.SceneConfigs.VerticalDownSwipeJump,
            })
        }


    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>second page</Text>
                <TouchableOpacity style={[styles.buttonstyle,{borderColor:'red'}]} onPress={()=>this.back()}>
                    <Text>back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonstyle,{borderColor:'red'}]} onPress={()=>this.gotoThird()}>
                    <Text>go to third</Text>
                </TouchableOpacity>
                <Text style={styles.welcome}>the pass value id= {this.props.id}</Text>
                <Text style={styles.welcome}>the pass value info is " {this.props.info} "</Text>
                <Childone navigator={this.props.navigator} />
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
    welcome: {
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