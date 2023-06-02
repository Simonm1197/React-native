/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  SectionList,
  FlatList,
} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Ionicons';

const Scanned = ({navigation}) => {
  const DATA = [
    {
      title: 'A',
      data: [
        {
          img: require('../Images/scanned/abd.png'),
          name: 'Abd',
          role: 'wicket-keeper',
        },
        {
          img: require('../Images/scanned/abd.png'),
          name: 'Adam-smith',
          role: 'Batter',
        },
      ],
    },
    {
      title: 'B',
      data: [
        {
          img: require('../Images/scanned/abd.png'),
          name: 'Ben-stokes',
          role: 'Seam-Bowler',
        },
        {
          img: require('../Images/scanned/abd.png'),
          name: 'Badrinath',
          role: 'Batter',
        },
      ],
    },
    {
      title: 'C',
      data: [
        {
          img: require('../Images/scanned/abd.png'),
          name: 'Chahal',
          role: 'Spin-Bowler',
        },
        {
          img: require('../Images/scanned/abd.png'),
          name: 'Chahar',
          role: 'Seam-Bowler',
        },
      ],
    },
  ];
  const browse = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <Pressable
          style={{
            backgroundColor: '#EAEDFB',
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
          }}
          onPress={() => navigation.navigate('Contacts')}>
          <FontAwesome5 name="arrow-left" size={20} color={'#2242D8'} />
        </Pressable>
        <Text style={{color: '#2242D8', fontWeight: 'bold', fontSize: 30}}>
          Scanned
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Pressable
            style={{
              backgroundColor: '#EAEDFB',
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
            }}>
            <FontAwesome5 name="plus" size={20} color={'#2242D8'} />
          </Pressable>
          <Pressable
            style={{
              backgroundColor: '#EAEDFB',
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
            }}>
            <FontAwesome5 name="pen" size={20} color={'#2242D8'} />
          </Pressable>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginTop: 15,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#DCE5F8',
            borderRadius: 30,
            paddingLeft: 20,
            width: '80%',
            height: 50,
            marginBottom: 5,
          }}>
          <Icon name="search" size={40} color={'#2242D8'} />
          <TextInput placeholder="Search by job, name..." />
        </View>
        <View
          style={{
            backgroundColor: '#DCE5F8',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            width: 50,
            borderRadius: 20,
          }}>
          <Icon name="ios-swap-vertical-outline" size={30} color={'#2242D8'} />
        </View>
      </View>

      <View style={{flex: 1, flexDirection: 'row'}}>
        <SectionList
          sections={DATA}
          renderSectionHeader={({section}) => (
            <View
              style={{
                backgroundColor: '#E0E8F7',
                height: 30,
                width: 30,
                borderRadius: 20,
                alignItems: 'center',
                marginTop: 5,
                justifyContent: 'center',
                marginLeft: 5,
              }}>
              <Text style={{color: '#2242D8', fontWeight: 'bold'}}>
                {section.title}
              </Text>
            </View>
          )}
          renderItem={({item}) => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#E0E8F7',
                justifyContent: 'space-between',
                marginBottom: 10,
                height: 70,
                borderRadius: 20,
                paddingHorizontal: 35,
                margin: 10,
              }}>
              <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
                <Image source={item.img} style={{height: 35, width: 35}} />

                <View>
                  <Text style={{color: '#2242D8'}}>{item.name}</Text>
                  <Text style={{color: '#7085E6'}}>{item.role}</Text>
                </View>
              </View>

              <Pressable
                style={{
                  borderWidth: 1,
                  borderColor: '#2242D8',
                  borderRadius: 10,
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                }}>
                <Text style={{color: '#2242D8'}}>View</Text>
              </Pressable>
            </View>
          )}
        />
        <View
          style={{
            position: 'absolute',
            left: 365,
            top: 170,
            backgroundColor: '#F4F6FD',
            height: 228,
            width: 21,
            paddingTop: 10,
            borderRadius: 20,
          }}>
          <FlatList
            data={browse}
            renderItem={({item}) => (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 12,
                  // position:'absolute',
                }}>
                <Text
                  style={{color: '#2242D8', fontWeight: '500', fontSize: 9}}>
                  {item}
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Scanned;
