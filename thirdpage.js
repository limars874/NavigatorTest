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

import Firstpage from './firstpage';
import Secondpage from './secondpage';

export default class Thirdpage extends Component {

    constructor(props){
        super(props);
    }



    back(){
        const { navigator } = this.props;
        if(navigator){
            navigator.pop();
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>third page</Text>
                <TouchableOpacity style={[styles.buttonstyle,{borderColor:'red'}]} onPress={()=>this.back()}>
                    <Text>back</Text>
                </TouchableOpacity>
                <Text style={styles.welcome}>the pass value id= {this.props.id}</Text>
                <Text style={styles.welcome}>the pass value info is " {this.props.info} "</Text>
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