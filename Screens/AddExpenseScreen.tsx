import React, { useState } from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../navigation/AppNavigation';
import InputAndImageReusableScreen from '../Components/InputAndImageReusableScreen'
import Snackbar from 'react-native-snackbar';
import { addDoc } from 'firebase/firestore';
import { expensesRef } from '../Config/firebase';

type AddExpensesScreenProps = NativeStackScreenProps<RootStackParamsList,"AddExpense">;

const AddExpensesScreen: React.FC<AddExpensesScreenProps> = ({navigation,route}): React.JSX.Element => {
  const { id } = route.params;
  const [title,settitle] = useState<string>("");
  const [amount,setamount] = useState<string>("");
  const [category,setcategory] = useState<string>("");
  const [loading,setloading] = useState<boolean>(false);

  async function handleAddExpense()  {
    if(title && amount && category){
      setloading(true);

      let doc = await addDoc(expensesRef,{
        title,
        amount,
        category,
        tripId:id
      });

      setloading(false);

      if(doc && doc.id) navigation.goBack()
    }else {
      Snackbar.show({
        text:"Please fill all the fields",
        backgroundColor:"red"
      })
    }
  }

  return (
    <InputAndImageReusableScreen
    finputvalue={title}
    setfinputvalue={settitle}
    sinputvalue={amount}
    setsinputvalue={setamount}
    screenName="AddExpense"
    toptext='Add Expense'
    imagesrc={require("../assets/images/expenseBanner.png")}
    btntext='Add Expense'
    finputtext='For What?'
    sinputtext='How Much?'
    onPress={handleAddExpense}
    category={category}
    setcategory={setcategory}
    userLoading={loading}
    />
  )
}

export default AddExpensesScreen