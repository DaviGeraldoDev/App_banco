import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Login from '../pages/Login/Login';
import Principal from '../pages/Principal/Principal';
import Cadastro_pt1 from '../pages/Cadastro_pt1/Cadastro_pt1';
import Cadastro_pt2 from '../pages/Cadastro_pt2/Cadastro_pt2';
import Tela_inicio_animada from '../pages/Tela_inicio_animada/Tela_inicio_animada';
import Tela_login_biometria from '../pages/Tela_login_biometria/Tela_login_biometria';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Tela_inicio_animada' component={Tela_inicio_animada} 
      options={{
        title: "",
        headerTransparent: true,
        headerShown: false
      }}/>

      <Stack.Screen name='Tela_login_biometria' component={Tela_login_biometria} 
      options={{
        title: "",
        headerTransparent: true,
        headerShown: false
      }}/>
      
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