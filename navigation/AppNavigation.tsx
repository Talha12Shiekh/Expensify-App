import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import AddTripsScreen from '../Screens/AddTripsScreen';
import AddExpenseScreen from '../Screens/AddExpenseScreen';
import TripExpensesScreen from '../Screens/TripExpensesScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';


export type RootStackParamsList = {
    Home:undefined,
    AddTrip:undefined,
    Login:undefined,
    AddExpense:undefined,
    TripsExpense:{
        place:string,
        country:string
    },
    Welcome:undefined
}

const Stack = createNativeStackNavigator<RootStackParamsList>();

export default function AppNavigation() : React.JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Welcome'>
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="AddTrip" component={AddTripsScreen} />
                <Stack.Screen name="AddExpense" component={AddExpenseScreen} />
                <Stack.Screen name="TripsExpense" component={TripExpensesScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}