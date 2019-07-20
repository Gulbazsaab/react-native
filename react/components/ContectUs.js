import React, { Component } from 'react';
import { Text } from 'react-native'
import { Card } from 'react-native-elements'

class ContectUs extends Component {

    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        }
    };

    render() {
        return(
            <Card title="Our Address">
                <Text>121, Clear Water Bay Road</Text>
                <Text>Clear Water Bay, Kowloon</Text>
                <Text>HONG KONG</Text>
                <Text>Tel: +852 1234 5678</Text>
                <Text>Fax: +852 8765 4321</Text>
                <Text>Email:confusion@food.net</Text>
            </Card>
        );
    }
}

export default ContectUs;