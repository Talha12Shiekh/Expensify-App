import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../Components/ScreenWrapper'
import { colors } from '../Theme'
import BackButton from '../Components/BackButton'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../navigation/AppNavigation';

type NavigationProps = NativeStackScreenProps<RootStackParamsList,"SignIn">;


const SignInScreen : React.FC<NavigationProps> = ({navigation}): React.JSX.Element => {
  const [email,setemail] = useState<string>("");
  const [password,setpassword] = useState<string>("");

  function handleSubmit() : void {
    if(email && password){
      navigation.goBack()
    }else {

    }
  }

  return (
    <ScreenWrapper>
      <View className='flex justify-between h-full'>
        <View >
          <View className='relative mx-4'>
            <View className='absolute top-0 left-0'>
              <BackButton />
            </View>
            <Text className={`${colors.heading} text-3xl font-bold text-center`}>Sign In</Text>
          </View>
          <View className='flex-row justify-center my-3 mt-9'>
            <Image
              source={require("../assets/images/login.png")}
              className='h-72 w-72'
            />
          </View>
          <View className='gap-5 mx-4'>
            <View>

            <Text className={`${colors.heading} text-xl mb-2 ml-2 font-bold`}>Email </Text>
            <TextInput
            className='p-4 bg-white text-black rounded-full mb-3'
            value={email}
            onChangeText={v => setemail(v)}
            />
            </View>
            <View>

            <Text className={`${colors.heading} text-xl mb-2 ml-2 font-bold`}>Password</Text>
            <TextInput
            value={password}
            secureTextEntry
            onChangeText={c => setpassword(c)}
            className='p-4 bg-white text-black rounded-full mb-3'
            />
            <TouchableOpacity className='flex-row justify-end'>
              <Text>Forget Password ?</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
            <TouchableOpacity onPress={handleSubmit} style={{backgroundColor:colors.button}} className='my-6 rounded-full p-4 mx-4'>
              <Text className='text-center text-white text-xl font-bold'>Sign In</Text>
            </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default SignInScreen;