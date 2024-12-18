import React, { useState } from 'react'
import InputAndImageReusableScreen from '../Components/InputAndImageReusableScreen';
import { RootStackParamsList } from '../navigation/AppNavigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


type AddTripsScreenProps = NativeStackScreenProps<RootStackParamsList, "AddTrip">;

const AddTripsScreen: React.FC<AddTripsScreenProps> = ({ navigation }): React.JSX.Element => {
  const [place, setplace] = useState<string>("");
  const [country, setcountry] = useState<string>("");

  function handleAddTrip(): void {
    if (place && country) {
      navigation.goBack()
    } else {

    }
  }


  return (
    <InputAndImageReusableScreen
      finputvalue={place}
      setfinputvalue={setplace}
      sinputvalue={country}
      setsinputvalue={setcountry}
      screenName="AddTrip"
      toptext='Add Trip'
      imagesrc={require("../assets/images/4.png")}
      btntext='Add Trip'
      onPress={handleAddTrip}
      finputtext='Where on Earth ?'
      sinputtext='Which country'
    />
  )
}

export default AddTripsScreen