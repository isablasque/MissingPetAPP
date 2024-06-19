import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

import Home from '../Pages/Home';
import Encontrados from '../Pages/Encontrados';
import Login from '../Pages/Login';
import Cadastro from '../Pages/Cadastro'


const Tab = createBottomTabNavigator();

export default function Rotas() {

    const { logado, cadastro, setCadastro} = useContext(AuthContext);

    if (!logado && !cadastro) {
        return (<Login />)
    }
    if(!logado && cadastro) {
        return (<Cadastro/>)
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: 'white',
                    },
                    tabBarActiveTintColor: "black",
                    tabBarInactiveTintColor: "#5D5D5D"
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="dog-side" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Encontrados"
                    component={Encontrados}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="check-all" color={color} size={size} />
                        ),
                    }}
                />               
            </Tab.Navigator>
        </NavigationContainer>
    )
}