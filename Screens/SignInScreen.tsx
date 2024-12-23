import React, { useState } from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../navigation/AppNavigation';
import InputAndImageReusableScreen from '../Components/InputAndImageReusableScreen'
import Snackbar from 'react-native-snackbar';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Config/firebase';
import { setUserLoading } from '../redux/userslice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';


type NavigationProps = NativeStackScreenProps<RootStackParamsList, "SignIn">;

const SignInScreen: React.FC<NavigationProps> = ({ navigation }): React.JSX.Element => {
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");

  const {userLoading} = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();

  async function handleSubmit() {
    if (email && password) {
      try {
        dispatch(setUserLoading(true))
        await signInWithEmailAndPassword(auth,email,password);
        dispatch(setUserLoading(false))
      } catch (error) {
        console.log(error);
        dispatch(setUserLoading(false))
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
      screenName="SignIn"
      toptext='Sign in'
      imagesrc={require("../assets/images/login.png")}
      btntext='Sign in'
      onPress={handleSubmit}
      finputtext='Email'
      sinputtext='Password'
      sinputprops={{secureTextEntry:true}}
      userLoading={userLoading}
    />
  )
}

export default SignInScreen;