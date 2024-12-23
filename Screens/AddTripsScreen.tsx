import React, { useState } from 'react'
import InputAndImageReusableScreen from '../Components/InputAndImageReusableScreen';
import { RootStackParamsList } from '../navigation/AppNavigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Snackbar from 'react-native-snackbar';
import { addDoc } from 'firebase/firestore';
import { tripsRef } from '../Config/firebase';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';


type AddTripsScreenProps = NativeStackScreenProps<RootStackParamsList, "AddTrip">;

const AddTripsScreen: React.FC<AddTripsScreenProps> = ({ navigation }): React.JSX.Element => {
  const [place, setplace] = useState<string>("");
  const [country, setcountry] = useState<string>("");
  const [loading, setloading] = useState<boolean>(false);
  const { user } = useSelector((state: RootState) => state.user);


  async function handleAddTrip() {
    if (place && country) {
      setloading(true);

      let doc = await addDoc(tripsRef, {
        place, country, userId: user.uid
      });

      setloading(false);

      if(doc && doc.id){
        navigation.goBack()
      }
    } else {
      Snackbar.show({
        text: 'Place and country are required',
        backgroundColor: "red"
      });
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
      userLoading={loading}
    />
  )
}

export default AddTripsScreen