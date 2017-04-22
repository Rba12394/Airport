import React from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,ScrollView,TouchableHighlight, Modal,
    Button
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



import { Form,
    Separator,InputField, LinkField,
    SwitchField, PickerField,DatePickerField,TimePickerField
} from 'react-native-form-generator';


const onButtonPress = () => {
    // this.props.navigator.push({
    //    title: "profile1",
    //   component: profile1

    fetch('https://https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyB-Y3bEZVeCmDQ0FmuLoICx5bW3H5rtKW0', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: requestJSON
    });

    let passengerJSON = JSON.stringify({
        adultCount: 1,
        infantInLapCount: 0,
        infantInSeatCount: 0,
        childCount: 0,
        seniorCount: 0
    });

    let toFlightJSON = JSON.stringify({
        origin: "DCA", // use from value
        destination: "BNA", // use to value
        date: "2017-05-04" // use leave date
    });

    let returnFlightJSON = JSON.stringify({
        origin: "BNA", // use to value
        destination: "DCA", // use from value
        date: "2017-05-04" // use return date
    });

    let arrayJSON = [toFlightJSON, returnFlightJSON]

    let requestJSON = JSON.stringify({
        "slice": arrayJSON,
        "passengers": passengerJSON,
        "solutions": 20, // number of values you want returned
        "refundable": false
    });

}



// Note: your API KEY is what you get when you create a project in the console


export class TRVLR extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            formData:{}
        }
    }
    handleFormChange(formData){
        /*
         formData will contain all the values of the form,
         in this example.
         formData = {
         first_name:"",
         last_name:"",
         gender: '',
         birthday: Date,
         has_accepted_conditions: bool
         }
         */

        this.setState({formData:formData})
        this.props.onFormChange && this.props.onFormChange(formData);
    }
    handleFormFocus(e, component){
        //console.log(e, component);
    }
    openTermsAndConditionsURL(){

    }
    resetForm(){

        this.refs.registrationForm.refs.first_name.setValue("");
        this.refs.registrationForm.refs.last_name.setValue("");
        this.refs.registrationForm.refs.other_input.setValue("");
        this.refs.registrationForm.refs.meeting.setDate(new Date());
        this.refs.registrationForm.refs.has_accepted_conditions.setValue(false);
    }
    render(){

        return (
            <ScrollView style={{height:200}}>
            <Form
                ref='registrationForm'
                onFocus={this.handleFormFocus.bind(this)}
                onChange={this.handleFormChange.bind(this)}
                label="Search flights">


                <InputField
                    ref='departure'
                    placeholder='fly from (airport code)'/>

                <InputField
                    ref='destination'
                    placeholder = 'fly to (airport code)'/>


                <DatePickerField ref='leave_date'
                                 iconLeft={[<Icon style={{alignSelf:'center', marginLeft:10}} name='ios-flame' size={30} />,
                                     <Icon style={{alignSelf:'center', marginLeft:10, color:'red'}} name='ios-flame' size={30} />
                                 ]}
                                 minimumDate={new Date('1/1/1900')}
                                 maximumDate={new Date()} mode="datetime" placeholder='leave date'/>

                <DatePickerField ref='return_date'
                                 iconLeft={[<Icon style={{alignSelf:'center', marginLeft:10}} name='ios-flame' size={30} />,
                                     <Icon style={{alignSelf:'center', marginLeft:10, color:'red'}} name='ios-flame' size={30} />
                                 ]}
                                 minimumDate={new Date('1/1/1900')}
                                 maximumDate={new Date()} mode="datetime" placeholder='return date'/>



                <Button
                    onPress={onButtonPress}
                    title="search flight"
                    color="#42f44e"
                    alignSelf="fill" />

            </Form>
            <Text>{JSON.stringify(this.state.formData)}</Text>

        </ScrollView>);
    }
}

AppRegistry.registerComponent('TRVLR', () => TRVLR);
