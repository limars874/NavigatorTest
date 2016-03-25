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
} from 'react-native';

import Secondpage from './secondpage';
import Thirdpage from './thirdpage';

export default class Firstpage extends Component {

    constructor(props){
        super(props);
    }

    gotoSecond(){
        const { navigator } = this.props;
        if(navigator){
            navigator.push({
                component:Secondpage,
            })
        }
    }


    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.center}>first page</Text>
                <TouchableOpacity style={[styles.buttonstyle,{borderColor:'red'}]} onPress={()=>this.gotoSecond()}>
                    <Text>go to second</Text>
                </TouchableOpacity>
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