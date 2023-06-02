/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
// import Icon from 'react-native-ionicons';
import Icon from 'react-native-vector-icons/Ionicons';

const ScanCard = ({navigation}) => {
  return (
    <View style={{width: '100%', padding: 30, height: '100%'}}>
      <Text
        style={{
          color: '#2242D8',
          fontSize: 35,
          fontWeight: 'bold',
        }}>
        ScanCard
      </Text>

      <View
        style={{
          backgroundColor: '#F5F7FD',
          borderWidth: 1,
          height: '100%',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          padding: 20,
          display: 'flex',
          gap: 20,
          // justifyContent:'center',
          alignItems: 'center',
          marginTop: 30,
        }}>
        <Image
          source={require('../Images/scan-3.png')}
          style={{height: 60, width: 70, marginTop: 20}}
        />
        <Text style={{fontWeight: 'bold', color: '#2242D8'}}>
          {' '}
          Scan a new card
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: '#2242D8',
            textAlign: 'center',
            width: '75%',
          }}>
          Just tap on scan card to add contact from physical card
        </Text>
        <Pressable
          style={{
            borderWidth: 1,
            borderColor: '#2242D8',
            borderRadius: 15,
            paddingHorizontal: 20,
            paddingVertical: 5,
          }}
          onPress={() => navigation.navigate('CameraPage')}>
          <Text style={{fontWeight: 'bold', color: '#2242D8'}}>Scan card</Text>
        </Pressable>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            display: 'flex',
            flexDirection: 'row',
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            paddingHorizontal: 10,
            gap: 10,
            marginTop: 50,
          }}>
          <View
            style={{
              backgroundColor: '#F5F7FF',
              width: 45,
              height: 45,
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="person-circle" size={30} color="#2242D8" />
          </View>
          <Text style={{color: '#2242D8'}}>See scanned contacts</Text>
          <Icon name="chevron-forward-outline" size={20} color="#2242D8" />
        </View>
      </View>
    </View>
  );
};

export default ScanCard;
