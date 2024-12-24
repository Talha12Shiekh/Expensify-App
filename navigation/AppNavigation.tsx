import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import AddTripsScreen from '../Screens/AddTripsScreen';
import AddExpenseScreen from '../Screens/AddExpenseScreen';
import TripExpensesScreen from '../Screens/TripExpensesScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import SignInScreen from '../Screens/SignInScreen';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Config/firebase';
import { setusers } from '../redux/userslice';
import SignUpScreen from '../Screens/SignUpScreen';
import "../global.css"


export type RootStackParamsList = {
    SignIn:undefined,
    Home:undefined,
    AddTrip:undefined,
    SignUp:undefined,
    AddExpense:{id:string, place:string, country:string},
    TripsExpense:{
        place:string,
        country:string,
        id:string
    },
    Welcome:undefined
}

const Stack = createNativeStackNavigator<RootStackParamsList>();

export default function AppNavigation() : React.JSX.Element {
        const {user} = useSelector((state: RootState) => state.user);
        const dispatch = useDispatch();

        onAuthStateChanged(auth,(usr) => {
                dispatch(setusers(usr))
        })

        if(user){
            return (
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Home">
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="AddTrip" component={AddTripsScreen} />
                        <Stack.Screen name="AddExpense" component={AddExpenseScreen} />
                        <Stack.Screen name="TripsExpense" component={TripExpensesScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            )
        }else {
            return (
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Welcome">
                        
                    <Stack.Screen name="SignIn" component={SignInScreen} />
                        <Stack.Screen name="SignUp" component={SignUpScreen} />
                        <Stack.Screen name="Welcome" component={WelcomeScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            )
        }
        
       
}