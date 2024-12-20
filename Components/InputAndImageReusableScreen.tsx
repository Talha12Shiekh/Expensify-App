import { View, Text, Image, TextInput, TouchableOpacity, ImageSourcePropType, TextInputProps, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../Components/ScreenWrapper'
import { colors } from '../Theme'
import BackButton from '../Components/BackButton'
import { RootStackParamsList } from '../navigation/AppNavigation'
import { CustomButton } from '../Screens/WelcomeScreen';
import { CATEGORIES } from '../Constants'


interface InputAndImageReusableScreenProps {
    finputvalue: string,
    setfinputvalue: (value: string) => void,
    sinputvalue: string,
    setsinputvalue: (value: string) => void,
    screenName: keyof RootStackParamsList,
    toptext: string,
    imagesrc: ImageSourcePropType,
    btntext: string,
    onPress: () => void;
    finputtext: string,
    sinputtext: string,
    finputprops?: TextInputProps,
    sinputprops?: TextInputProps,
    category?: string,
    setcategory?: (value: string) => void,
    userLoading?: boolean | null,
}

const InputAndImageReusableScreen = ({ finputvalue, setfinputvalue, sinputvalue, setsinputvalue, screenName, toptext, imagesrc, btntext, onPress, finputtext, sinputtext, finputprops, sinputprops, category, setcategory,userLoading }: InputAndImageReusableScreenProps): React.JSX.Element => {


    

    return (
        <ScreenWrapper>
            <View className='flex justify-between h-full'>
                <View >
                    <View className='relative mx-4'>
                        <View className='absolute top-0 left-0'>
                            <BackButton />
                        </View>
                        <Text className={`${colors.heading} text-3xl font-bold text-center`}>{toptext}</Text>
                    </View>
                    <View className='flex-row justify-center my-3 mt-9'>
                        <Image
                            source={imagesrc}
                            className='h-72 w-72'
                        />
                    </View>
                    <KeyboardAvoidingView behavior="padding">

                    <View className='gap-5 mx-4'>
                        <View>

                            <Text className={`${colors.heading} text-xl mb-2 ml-2 font-bold`}>{finputtext}</Text>
                            <TextInput
                                className='p-4 bg-white text-black rounded-full mb-3'
                                value={finputvalue}
                                onChangeText={v => setfinputvalue(v)}
                                {...finputprops}
                            />
                        </View>
                        <View>

                            <Text className={`${colors.heading} text-xl mb-2 ml-2 font-bold`}>{sinputtext}</Text>
                            <TextInput
                                value={sinputvalue}
                                onChangeText={c => setsinputvalue(c)}
                                className='p-4 bg-white text-black rounded-full mb-3'
                                {...sinputprops}
                            />
                            {
                                screenName === "SignIn" && <TouchableOpacity className='flex-row justify-end'>
                                    <Text>Forget Password ?</Text>
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                    </KeyboardAvoidingView>

                    {screenName == "AddExpense" && <View className='mx-4'>
                        <Text className={`${colors.heading} text-xl mb-2 ml-2 font-bold`}>Category</Text>
                        <View className='flex-row flex-wrap items-center gap-1 gap-y-3'>
                            {
                                CATEGORIES.map(({ title, value }: { title: string; value: string; }) => {
                                    const bgcolor = value === category ? "bg-green-200" : "bg-white";
                                    return <TouchableOpacity onPress={() => setcategory && setcategory(value)} key={value} className={`rounded-full bg-white p-2 px-6 mr-2 ${bgcolor}`}>

                                        <Text className='text-lg'>{title}</Text>
                                    </TouchableOpacity>
                                })
                            }
                        </View>
                    </View>}
                </View>
                <View className='mx-4'>
                    {userLoading ? <Text>Loading... </Text> : <CustomButton
                        text={btntext}
                        onPress={onPress}
                    />}
                </View>

            </View>
        </ScreenWrapper>
    )
}

export default InputAndImageReusableScreen