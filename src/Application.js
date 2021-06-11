import React from 'react';
import { Text } from "react-native"
import { Provider } from 'react-redux';

import Navigations from './screens/Navigations';
import Store from './store/index';
import StreamingProvider from "./ContextApi/StreamingProvider"

const Application = () => {
  return (
    <Provider store={Store}>
      <StreamingProvider>
        <Navigations />
      </StreamingProvider>
    </Provider>
  );
};

export default Application;



