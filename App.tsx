import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import Home from './src/Home';
import Halaman2 from './src/Halaman2';
import Layout from './src/Layout';
import FlexBasic from './src/FlexBasic';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App1 = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text style={{fontSize: 50}}>Hello ARS</Text>
      {/* <Halaman1 nama_depan="Erfian" nama_belakang="Junianto"/> */}
      <Text style={{fontSize: 30}}>You clicked {count} times</Text>
      <Button onPress={() => setCount(count + 1)} title="Click me!" />
    </View>
  );
};

const App2 = () => {
  return (
    <>
      {/* <Text style={{fontSize:10}}>Hello Teknik Informatika</Text> */}
      {/* <Halaman2 /> */}
      {/* <Layout /> */}
      <FlexBasic />
    </>
  );
};

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={{fontSize: 50}}>Ini halaman home</Text>
      <Button
        title="Profile"
        onPress={() =>
          navigation.navigate('Profile', {name: 'Erfian', id: '123'})
        }
      />
    </View>
  );
};

const ProfileScreen = ({navigation, route}) => {
  return (
    <Text style={{fontSize: 50}}>
      This is {route.params.name}'s profile ID: {route.params.id}
    </Text>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'BreakingNews'}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{title: 'Halaman Profile'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
