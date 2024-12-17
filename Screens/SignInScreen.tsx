import React, { useState } from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../navigation/AppNavigation';
import InputAndImageReusableScreen from '../Components/InputAndImageReusableScreen'
import Snackbar from 'react-native-snackbar';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Config/firebase';

// import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });


type NavigationProps = NativeStackScreenProps<RootStackParamsList, "SignIn">;

const SignInScreen: React.FC<NavigationProps> = ({ navigation }): React.JSX.Element => {
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");

  async function handleSubmit() {
    if (email && password) {
      await signInWithEmailAndPassword(auth,email,password);
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
      screenName="SignIn"
      toptext='Sign in'
      imagesrc={require("../assets/images/login.png")}
      btntext='Sign in'
      onPress={handleSubmit}
      finputtext='Email'
      sinputtext='Password'
      sinputprops={{secureTextEntry:true}}
    />
  )
}

export default SignInScreen;