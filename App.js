/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Home from './src/Pages/Home';
import Catalogue from './src/Pages/catalogue/Catalogue';
import PendingList from './src/Pages/PendingList';
import ContextAppProvider from './src/context/ContextApp';
import AddAnime from './src/Pages/AddAnime';


const Stack = createNativeStackNavigator();

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache(),
});


const App = () => {
  return (
    <ContextAppProvider>
      <ApolloProvider client={client} >
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Catalogue" component={Catalogue} />
            <Stack.Screen name="PendingList" component={PendingList} />
            <Stack.Screen name="AddAnime" component={AddAnime} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </ContextAppProvider>

  );
};

export default App;
