import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Body, Content, Card, Thumbnail, CardItem, DatePicker, Text, Icon, Right, Button, Left, ListItem, CheckBox } from 'native-base';
export default class AppBody extends Component {
    constructor(props) {
        super(props);
        data: []
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
    }
    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }

    getData() {
        return fetch('https://www.thewallscript.com/blogfeed/javascript/10')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ data: responseJson.feed.entry });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <Content padder>
                <Card>
                    <CardItem>
                        <Body>
                            <Text>
                                My Project Text
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Icon name="logo-google" size={30} color="#4F8EF7" />
                        <Text>Google</Text>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Icon name="logo-facebook" color="#3b5998" />
                        <Text>Facebook</Text>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Icon name="logo-twitter" />
                        <Text>Twitter</Text>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Icon name="logo-github" />
                        <Text>Github</Text>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail source={require('../accets/img/react.js-logo.png')} />
                            <Body>
                                <Text>NativeBase</Text>
                                <Text note>GeekyAnts</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image source={require('../accets/img/react.js-logo.png')} style={{ height: 200, width: null, flex: 1 }} />
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent>
                                <Icon active name="thumbs-up" />
                                <Text>12 Likes</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Button transparent>
                                <Icon active name="chatbubbles" />
                                <Text>4 Comments</Text>
                            </Button>
                        </Body>
                        <Right>
                            <Text>11h ago</Text>
                        </Right>
                    </CardItem>
                </Card>
                <ListItem>
                    <CheckBox checked={true} />
                    <Body>
                        <Text>Daily Stand Up</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <CheckBox />
                    <Body>
                        <Text>Discussion with Client</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <CheckBox checked={false} color="green" />
                    <Body>
                        <Text>Finish list Screen</Text>
                    </Body>
                </ListItem>
                <DatePicker
                    defaultDate={new Date(2018, 4, 4)}
                    minimumDate={new Date(2018, 1, 1)}
                    maximumDate={new Date(2018, 12, 31)}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText="Select date"
                    textStyle={{ color: "green", padding: 25 }}
                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                    onDateChange={this.setDate}
                    disabled={false}
                />
                <Text>
                    Date: {this.state.chosenDate.toString().substr(4, 12)}
                </Text>
            </Content>
        )
    }
}