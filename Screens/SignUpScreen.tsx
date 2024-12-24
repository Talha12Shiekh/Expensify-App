import React, { useState } from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../navigation/AppNavigation';
import InputAndImageReusableScreen from '../Components/InputAndImageReusableScreen'
import Snackbar from 'react-native-snackbar';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Config/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLoading } from '../redux/userslice';
import { RootState } from '../redux/store';

type NavigationProps = NativeStackScreenProps<RootStackParamsList, "SignUp">;

// tk123@gmail.com
// Tk123456

// tks123@gmail.com
// Tks123456
const SignUpScreen: React.FC<NavigationProps> = ({ navigation }): React.JSX.Element => {
    const [email, setemail] = useState<string>("");
    const [password, setpassword] = useState<string>("");

    const {userLoading} = useSelector((state: RootState) => state.user);

    const dispatch = useDispatch();

    async function handleSubmit() {
        if (email && password) {
            try {
                dispatch(setUserLoading(true))
                await createUserWithEmailAndPassword(auth, email, password);
                dispatch(setUserLoading(false))
                
            } catch (error) {
                console.log(error);
                dispatch(setUserLoading(false));
            }
        } else {
            Snackbar.show({

                text: 'Email and password are required',
                backgroundColor: "red"
            });
        }
    }

    return (
        <InputAndImageReusableScreen
            finputvalue={email}
            setfinputvalue={setemail}
            sinputvalue={password}
            setsinputvalue={setpassword}
            screenName="SignUp"
            toptext='Sign Up'
            imagesrc={require("../assets/images/signup.png")}
            btntext='Sign up'
            onPress={handleSubmit}
            finputtext='Email'
            sinputtext='Password'
            sinputprops={{ secureTextEntry: true }}
            userLoading={userLoading}
        />
    )
}

export default SignUpScreen;