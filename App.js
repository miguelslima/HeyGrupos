import React from 'react';

import Routes from './src/routes';
import {NavigationContainer} from '@react-navigation/native';

export default function SignIn() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
