import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../Components/ScreenWrapper'
import { colors } from '../Theme'
import BackButton from '../Components/BackButton'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../navigation/AppNavigation'

const AddTripsScreen = (): React.JSX.Element => {
  const [place,setplace] = useState<string>("");
  const [country,setcountry] = useState<string>("");

  type NavigationProps = NativeStackNavigationProp<RootStackParamsList,"AddTrip">;

  const navigation = useNavigation<NavigationProps>();

  function handleAddTrip() : void {
    if(place && country){
      navigation.navigate("Home")
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
            <Text className={`${colors.heading} text-3xl font-bold text-center`}>Add Trip</Text>
          </View>
          <View className='flex-row justify-center my-3 mt-9'>
            <Image
              source={require("../assets/images/4.png")}
              className='h-72 w-72'
            />
          </View>
          <View className='gap-5 mx-4'>
            <View>

            <Text className={`${colors.heading} text-xl mb-2 ml-2 font-bold`}>Where on Earth ?</Text>
            <TextInput
            className='p-4 bg-white text-black rounded-full mb-3'
            value={place}
            onChangeText={v => setplace(v)}
            />
            </View>
            <View>

            <Text className={`${colors.heading} text-xl mb-2 ml-2 font-bold`}>Which country</Text>
            <TextInput
            value={country}
            onChangeText={c => setcountry(c)}
            className='p-4 bg-white text-black rounded-full mb-3'
            />
            </View>
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

export default AddTripsScreen