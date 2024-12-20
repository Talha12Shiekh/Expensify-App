import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ScreenWrapper from '../Components/ScreenWrapper'
import { colors } from '../Theme';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../navigation/AppNavigation';


type WelcomeScreenProps = NativeStackScreenProps<RootStackParamsList, "Welcome">;

interface CustomButtonProps {
  text: string;
  onPress: () => void;
}

export const CustomButton = ({ text, onPress }: CustomButtonProps): React.JSX.Element => {
  return <TouchableOpacity onPress={onPress} className='bg-green-500 p-3 rounded-full mb-5'>
    <Text className='text-center text-white font-bold text-lg'>{text}</Text>
  </TouchableOpacity>
}


const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }): React.JSX.Element => {
  return (
    <ScreenWrapper>
      <View className='h-full flex justify-around'>
        <View className='flex-row justify-center mt-10'>
          <Image
            source={require("../assets/images/welcome.gif")}
            resizeMode='contain'
            style={{ width: 400, aspectRatio: 1 }}
          />
        </View>
        <View className='mx-5 mb-20'>
          <Text className={`text-center font-bold text-5xl my-10 ${colors.heading}`}>Expensify</Text>
          <CustomButton
            text='Sign in'
            onPress={() => navigation.navigate("SignIn")}
          />
          <CustomButton
            text='Sign Up'
            onPress={() => navigation.navigate("SignUp")}
          />
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default WelcomeScreen