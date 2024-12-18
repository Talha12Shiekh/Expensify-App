import { TouchableOpacity } from 'react-native'
import React from 'react'
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { colors } from '../Theme';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../navigation/AppNavigation';

const BackButton = () : React.JSX.Element => {
  type NavigationProps = NativeStackNavigationProp<RootStackParamsList,"Home">;
  const navigation = useNavigation<NavigationProps>();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} className='w-10 h-10 bg-white rounded-full justify-center items-center z-50'>
      <ChevronLeftIcon 
      size="25"
      color={colors.button}
      />
    </TouchableOpacity>
  )
}

export default BackButton
