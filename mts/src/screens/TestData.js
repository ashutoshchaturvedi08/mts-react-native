import { View, Text,TextInput,TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';



const TestData = ()=>{
    const [name,setName] =useState('');
    const [surname,setSurname] =useState('');
    const [age,setAge] =useState('');
    const [value,setvalue] =useState('');

    const storeData =   () => {

        const object = {
            name: name,
            surname: surname ,
            age: age,
            
          };

       
           // let nameString = name.stringify() ;
           if(object){
            // console.log(typeof (name))
            // const nameS = JSON.stringify(name)
            AsyncStorage.setItem('users', JSON.stringify(object));
        
           AsyncStorage.getItem('users', (err, result) => {
            console.log(result);
            alert('data saved' +result )
          })
        //    let b =  AsyncStorage.setItem('surname', surname); setSurname('');
        //    let c = AsyncStorage.setItem('age', age); setAge('');
         
           
           }else{
            alert('Please Fill the data')
           }
           
       };
      const getData  = () => {



        AsyncStorage.getItem('users', (err, result) => {
          console.log(result);
          alert(result);
        })
        //    let abc =[]
        //   abc =  
        // const nameValue =  AsyncStorage.getItem('name')
        // const surnameValue =  AsyncStorage.getItem('surname')
        // const ageValue =  AsyncStorage.getItem('age')
        //   alert(abc);
        // const valuea = JSON.parse(value)
          // .then((nameValue,surnameValue,ageValue)=>{
          //   console.log(nameValue,surnameValue,ageValue)
          //  return value}
          //    alert( nameValue,surnameValue,ageValue);}
          //    )
          // }

        //   const value = await AsyncStorage.getItem('name')
        //   if(value !== null) {
        //     alert(`Data:${val     ue}`)
        //     }
            // value previously stored
          
       } 
      
      return (
        <SafeAreaView style = {{flex:1}}> 
       
          <Text>Form</Text>
          <TextInput placeholder='Name' value={name} onChangeText={data =>{setName(data )}} className='border-2 border-gray-200 p-2' />
          <TextInput placeholder='Surname' value={surname} onChangeText={data =>{setSurname(data )}} className='border-2 border-gray-200 p-2' />
          <TextInput placeholder='Age' value={age} onChangeText={data =>{setAge(data )}} className='border-2 border-gray-200 p-2' />
          <TouchableOpacity className='bg-black p-3' onPress={storeData}> 
            <Text className='text-white text-center font-bold'>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity className='bg-black p-3' onPress={getData}>
            <Text className='text-white text-center font-bold'>Fetch saved Name</Text>
          </TouchableOpacity>
     
        </SafeAreaView>
      )

}
export default TestData