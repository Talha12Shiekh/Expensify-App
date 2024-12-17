import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/SignUpScreen';
import AddTripsScreen from '../Screens/AddTripsScreen';
import AddExpenseScreen from '../Screens/AddExpenseScreen';
import TripExpensesScreen from '../Screens/TripExpensesScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import SignInScreen from '../Screens/SignInScreen';
import SignOutScreen from '../Screens/SignOutScreen';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Text } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Config/firebase';
import { setusers } from '../redux/userslice';


export type RootStackParamsList = {
    SignIn:undefined,
    SignOut:undefined,
    Home:undefined,
    AddTrip:undefined,
    SignUp:undefined,
    AddExpense:undefined,
    TripsExpense:{
        place:string,
        country:string
    },
    Welcome:undefined
}

const Stack = createNativeStackNavigator<RootStackParamsList>();

export default function AppNavigation() : React.JSX.Element {
    const {user} = useSelector((state: RootState) => state.user);

    const dispatch = useDispatch()

    onAuthStateChanged(auth,usr => {
        dispatch(setusers(usr));
    })

    if(user){

        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Welcome'>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="AddTrip" component={AddTripsScreen} />
                    <Stack.Screen name="AddExpense" component={AddExpenseScreen} />
                    <Stack.Screen name="TripsExpense" component={TripExpensesScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }else {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Welcome'>
                    <Stack.Screen options={{presentation:"modal"}} name="SignIn" component={SignInScreen} />
                    <Stack.Screen options={{presentation:"modal"}} name="SignOut" component={SignOutScreen} />
                    <Stack.Screen name="Welcome" component={WelcomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}