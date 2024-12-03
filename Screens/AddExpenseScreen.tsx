import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../Components/ScreenWrapper'
import { colors } from '../Theme'
import BackButton from '../Components/BackButton'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../navigation/AppNavigation';

type AddExpensesScreenProps = NativeStackNavigationProp<RootStackParamsList,"AddExpense">;

const AddExpensesScreen: React.FC<AddExpensesScreenProps> = ({navigation}): React.JSX.Element => {
  const [title,settitle] = useState<string>("");
  const [amount,setamount] = useState<string>("");
  const [category,setcategory] = useState<string>("");

  function handleAddTrip() : void {
    if(title && amount && category){
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
            <Text className={`${colors.heading} text-3xl font-bold text-center`}>Add Expense</Text>
          </View>
          <View className='flex-row justify-center my-3 mt-9'>
            <Image
              source={require("../assets/images/4.png")}
              className='h-72 w-72'
            />
          </View>
          <View className='gap-5 mx-4'>
            <View>

            <Text className={`${colors.heading} text-xl mb-2 ml-2 font-bold`}>For What?</Text>
            <TextInput
            className='p-4 bg-white text-black rounded-full mb-3'
            value={title}
            onChangeText={v => settitle(v)}
            />
            </View>
            <View>

            <Text className={`${colors.heading} text-xl mb-2 ml-2 font-bold`}>How Much?</Text>
            <TextInput
            value={amount}
            onChangeText={c => setamount(c)}
            className='p-4 bg-white text-black rounded-full mb-3'
            />
            </View>
          </View>
          <View className='mx-4'>
            |<Text className={`${colors.heading} text-xl mb-2 ml-2 font-bold`}>Category</Text>
          </View>
        </View>
        <View>
            <TouchableOpacity onPress={handleAddTrip} style={{backgroundColor:colors.button}} className='my-6 rounded-full p-4 mx-4'>
              <Text className='text-center text-white text-xl font-bold'>Add Trip</Text>
            </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default AddExpensesScreen