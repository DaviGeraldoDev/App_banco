import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Login from './screens/Login';
import Principal from './screens/Principal';
import Cadastro_pt1 from './screens/Cadastro_pt1';
import Cadastro_pt2 from './screens/Cadastro_pt2';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} 
      options={{
        title: "",
        headerTransparent: true,
        headerShown: false
      }}/>
      
      <Stack.Screen name='Principal' component={Principal} 
      options={{
        title: "",
        headerTransparent: true,
        headerShown: false
      }}/>
      
      <Stack.Screen name='Cadastro_pt1' component={Cadastro_pt1} 
      options={{
        title: "",
        headerTransparent: true,
        headerShown: false
      }}/>
      
      <Stack.Screen name='Cadastro_pt2' component={Cadastro_pt2} 
      options={{
        title: "",
        headerTransparent: true,
        headerShown: false
      }}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}