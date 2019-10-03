import React, { Component } from 'react';
import { Text } from 'react-native';
import { Footer, FooterTab, Button, Icon } from 'native-base';

export default class AppFooter extends Component {
    render() {
        return (
            <Footer >
                <FooterTab>
                    <Button active>
                        <Icon name="person" />
                        <Text style={{ color: 'white' }}>Home</Text>
                    </Button>
                    <Button>
                        <Icon name="paper" />
                        <Text style={{ color: 'white' }}>Feeds</Text >
                    </Button>
                    <Button >
                        <Icon active name="settings" />
                        <Text style={{ color: 'white' }}>Settings</Text >
                    </Button>
                </FooterTab>
            </Footer>
        )
    }
}