import React, { useState } from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../navigation/AppNavigation';
import InputAndImageReusableScreen from '../Components/InputAndImageReusableScreen'



type NavigationProps = NativeStackScreenProps<RootStackParamsList, "SignIn">;

const SignInScreen: React.FC<NavigationProps> = ({ navigation }): React.JSX.Element => {
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");

  function handleSubmit(): void {
    if (email && password) {
      navigation.navigate("Home")
    } else {

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