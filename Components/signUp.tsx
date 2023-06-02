/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput, FlatList, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import Checkbox from 'expo-checkbox';
import Icon from 'react-native-vector-icons/Ionicons';

const SignUp = ({navigation}) => {
  const [isSelected, setSeleted] = useState();
  //   const data = ['Name', 'Email Address', 'Password', 'Confirm Password'];
  return (
    <View style={{padding: 10}}>
      {/* <Icon name="arrowleft" size={30} color="#2242D8"
      style={{backgroundColor:'#E2EAF9'}}
      /> */}

      <Text style={{color: '#8899EA'}}>SignUp</Text>
      <View
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{color: '#2242D8', fontSize: 30}}>Welcome to App</Text>
        <Image
          source={require('../Images/hand.png')}
          style={{height: 40, width: 40, marginTop: 20, marginLeft: 20}}
        />
      </View>
      <Text style={{color: '#8899EA'}}>
        Create your account to make your first business card
      </Text>
      <View style={{paddingTop: 40, gap: 10}}>
        {/* <FlatList
          data={data}
          renderItem={({item}) => ( */}
        <View
          style={{
            borderWidth: 1,
            borderColor: '#2242D8',
            borderRadius: 10,
            justifyContent: 'center',
            padding: 10,
            paddingBottom: -1,
          }}>
          <Text style={{color: '#6B9CFB', paddingHorizontal: 3}}>Name</Text>
          <TextInput style={{color: '#1766FE'}} placeholder="Name" />
        </View>

        <View
          style={{
            borderWidth: 1,
            borderColor: '#2242D8',
            borderRadius: 10,
            justifyContent: 'center',
            padding: 10,
            paddingBottom: -1,
          }}>
          <Text style={{color: '#6B9CFB', paddingHorizontal: 3}}>
            Email address
          </Text>
          <TextInput style={{color: '#1766FE'}} placeholder="Email address" />
        </View>

        <View
          style={{
            borderWidth: 1,
            borderColor: '#2242D8',
            borderRadius: 10,
            padding: 10,
            paddingBottom: -1,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text style={{color: '#6B9CFB', paddingHorizontal: 3}}>
              Password
            </Text>
            <TextInput style={{color: '#1766FE'}} placeholder="Password" />
          </View>
          <View>
            <Icon name="ios-eye-off-outline" size={30} color={'color'} />
          </View>
        </View>

        <View
          style={{
            borderWidth: 1,
            borderColor: '#2242D8',
            borderRadius: 10,
            padding: 10,
            paddingBottom: -1,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text style={{color: '#6B9CFB', paddingHorizontal: 3}}>
              Confirm Password
            </Text>
            <TextInput
              style={{color: '#1766FE'}}
              placeholder="Confirm Password"
            />
          </View>
          <View>
            <Icon name="ios-eye-off-outline" size={30} color={'color'} />
          </View>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 25,
          marginLeft: 15,
        }}>
        <Checkbox
          style={{borderWidth: 1, borderRadius: 4, height: 23, width: 23}}
          value={isSelected}
          onValueChange={setSeleted}
        />
        <Text style={{paddingLeft: 10}}>I accepts the terms & conditions</Text>
      </View>

      <View
        style={{
          justifyContent: 'center',
          marginTop: 50,
          display: 'flex',
          flexDirection: 'row',
        }}>
        <Text style={{color: '#000000'}}>Already have an account? </Text>
        <Pressable onPress={() => navigation.navigate('LogInPage')}>
          <Text style={{color: '#3176F6'}}>Login</Text>
        </Pressable>
      </View>

      <View style={{alignItems: 'center', marginTop: 10}}>
        <Pressable
          style={{
            backgroundColor: '#2242D8',
            width: '80%',
            borderRadius: 17,
            padding: 15,
          }}>
          <Text style={{color: '#FFFFFF', textAlign: 'center'}}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUp;
