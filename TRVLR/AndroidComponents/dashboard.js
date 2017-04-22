
/**
 * Created by Blake on 2/28/2017.
 */

import * as firebase from 'firebase';

import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    ListView,
    Button,
    Alert
} from 'react-native';

import ActionButton from 'react-native-action-button';



import { Form,
    Separator,InputField, LinkField,
    SwitchField, PickerField,DatePickerField,TimePickerField
} from 'react-native-form-generator';

const onButtonPress = () => {
    Alert.alert("")
}


class dashboard extends Component{


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Dashboard
                </Text>


                <View style={styles.formContainer}>
                    <ActionButton buttonColor = "rgb(72,244,66)" title = "Add Flight" onPress = {()=>onButtonPress()} >

                    </ActionButton>

                    <Text style={styles.welcome2}>
                        Upcoming Trips
                    </Text>


                    <Text style={styles.welcome3}>
                        DCA->BNA (details)
                    </Text>

                    <Text style={styles.welcome3}>
                        ATX->LAX (details)
                    </Text>

                    <Text style={styles.welcome3}>
                        DFW->BNA, BNA->DNV (details)
                    </Text>

                </View>

                <View style={styles.formContainer2}>
                    <Text style={styles.welcome2}>
                        Airport information
                    </Text>
                </View>


            </View>


        );
    }

}


const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
    welcome: {
        fontSize: 24,
        textAlign: 'center',
        margin: 10,
        color: 'white',
        fontWeight: 'bold'
    },
    welcome2: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        color: 'black',
        fontWeight: 'bold'
    },
    welcome3: {
        fontSize: 14,
        textAlign: 'left',
        margin: 10,
        color: 'black'
    },

    container: {
        flex: .5,
        flexDirection: 'column',
        justifyContent: 'space-between', //replace with flex-end or center
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        backgroundColor: '#333333'
    },
    container2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between', //replace with flex-end or center
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        backgroundColor: '#333333'
    },
    formContainer:{
        flex:1,
        flexDirection: 'column',
        backgroundColor: 'white',
        borderBottomColor: '#333333',
        borderBottomWidth: 10,
        borderLeftWidth: 20,
        borderLeftColor:'#333333',
        borderRightColor:'#333333',
        borderRightWidth: 20,
        borderTopColor: '#333333',
        paddingTop: 0
    },

    formContainer2:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingBottom: 0,
        borderTopWidth: 50,
        borderBottomWidth: 20,
        borderLeftWidth: 20,
        borderLeftColor:'#333333',
        borderRightColor:'#333333',
        borderRightWidth: 20,
        borderBottomColor: '#333333',
        borderTopColor: '#333333',
        paddingTop: 0
    }

});

modules.import = dashboard;