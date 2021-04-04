import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Toast from './components/Toast';
import File from './components/File';
import Sound from './components/Sound';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Toast" component={Toast}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="message-text-outline"
              color={color}
              size={size}
            />
          ),
        }}/>
        <Tab.Screen name="Sound" component={Sound} options={{
          tabBarIcon: ({ color, size }) => (
            <AntIcon
              name="sound"
              color={color}
              size={size}
            />
          ),
        }} />
        <Tab.Screen name="File" component={File} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="file-search"
              color={color}
              size={size}
            />
          ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
