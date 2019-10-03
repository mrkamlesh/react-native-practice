import React, { Component } from 'react';
import { Container, StyleProvider } from 'native-base';
import AppHeader from './src/components/appHeader';
import AppBody from './src/components/appBody';
import AppFooter from './src/components/appFooter';
import material from './src/themes/variables/material';
import getTheme from './src/themes/components';


const App: () => React$Node = () => {
  return (
    <StyleProvider style={getTheme(material)}>
      <Container>
        <AppHeader />
        <AppBody />
        <AppFooter />
      </Container>
    </StyleProvider>
  );
};
export default App;
