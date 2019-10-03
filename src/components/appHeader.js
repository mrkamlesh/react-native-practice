import React, { Component } from "react";
import { Header, Left, Button, Icon, Title, Body, Right } from 'native-base';

export default class AppHeader extends Component {
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>Header</Title>
                </Body>
                <Right />
            </Header>
        );
    }
}