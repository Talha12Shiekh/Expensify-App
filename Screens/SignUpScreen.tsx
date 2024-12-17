import React, { useState } from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../navigation/AppNavigation';
import InputAndImageReusableScreen from '../Components/InputAndImageReusableScreen'
import Snackbar from 'react-native-snackbar';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Config/firebase';

type NavigationProps = NativeStackScreenProps<RootStackParamsList, "SignUp">;

const SignUpScreen: React.FC<NavigationProps> = ({ navigation }): React.JSX.Element => {
    const [email, setemail] = useState<string>("");
    const [password, setpassword] = useState<string>("");

    async function handleSubmit() {
        if (email && password) {
            await createUserWithEmailAndPassword(auth, email, password);
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
        />
    )
}

export default SignUpScreen;