import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import AddTripsScreen from '../Components/AddTripsScreen';
import AddExpenseScreen from '../Components/AddExpenseScreen';

const Stack = createNativeStackNavigator();

export type RootStackParamsList = {
    Home:undefined,
    AddTrip:undefined,
    Login:undefined,
    AddExpense:undefined
}


export default function AppNavigation() : React.JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Home'>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="AddTrip" component={AddTripsScreen} />
                <Stack.Screen name="AddExpense" component={AddExpenseScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}