/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  Modal,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Ant from 'react-native-vector-icons/AntDesign';

const Card = ({navigation}) => {
  const cardType = [
    {
      name: 'Personal card',
      bg: '#E3F0F9',
      bbc: '#59ACF3',
    },
    {
      name: 'Work Card',
      bg: '#F1FCF3',
      bbc: '#4FEE78',
    },
    {
      name: 'Portfoli Card',
      bg: '#E3F0F9',
      bbc: '#59ACF3',
    },
  ];

  const [cardOption, setCardOption] = useState(false);
  return (
    <View style={{padding: 20}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Image source={require('../Images/Card/card.png')} />
        <View
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              color: '#2242D8',
              fontWeight: 'bold',
              fontSize: 20,
              paddingHorizontal: 20,
            }}>
            Hey, John
          </Text>
          <Image
            source={require('../Images/Card/img.png')}
            style={{backgroundColor: '#C8D2D8', borderRadius: 25}}
          />
        </View>
      </View>

      <FlatList
        data={cardType}
        renderItem={({item}) => (
          <View
            style={{
              borderWidth: 2,
              borderColor: item.bbc,
              borderRadius: 15,
              padding: 20,
              marginTop: 20,
              height: 200,
              backgroundColor: item.bg,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image source={require('../Images/Card/john.png')} />
                <View style={{paddingHorizontal: 20}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: '#2242D8',
                      fontSize: 30,
                    }}>
                    John ryan
                  </Text>
                  <Text style={{color: '#5870E1'}}>{item.name}</Text>
                </View>
              </View>

              <Pressable
                style={{
                  borderWidth: 1,
                  borderColor: '#2242D8',
                  borderRadius: 20,
                  width: 60,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#FFFFFF',
                }}
                onPress={() => setCardOption(true)}>
                <Icon name="ellipsis-horizontal" size={25} color="#2242D8" />
              </Pressable>
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                borderWidth: 1,
                borderRadius: 20,
                margin: 10,
                height: 50,
                borderColor: '#C1E4FA',
                backgroundColor: '#FFFFFF',
                marginTop: 25,
              }}>
              <Pressable
                onPress={() => navigation.navigate('EditContactPage')}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Ant name="edit" size={25} color="#2242D8" />
                <Text style={{color: '#2242D8', paddingLeft: 5}}>Edit</Text>
              </Pressable>

              <View
                style={{
                  height: 40,
                  width: 1,
                  borderWidth: 1,
                  borderColor: '#B6C1F2',
                }}
              />

              <Pressable
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Icon name="card-outline" size={25} color="#2242D8" />
                <Text style={{color: '#2242D8', paddingLeft: 5}}>
                  Preview card
                </Text>
              </Pressable>

              <View
                style={{
                  height: 40,
                  width: 1,
                  borderWidth: 1,
                  borderColor: '#B6C1F2',
                }}
              />

              <Pressable
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Icon name="paper-plane-outline" size={25} color="#2242D8" />
                <Text style={{color: '#2242D8', paddingLeft: 5}}>Share</Text>
              </Pressable>
            </View>
          </View>
        )}
      />

      <Modal animationType="slide" transparent visible={cardOption}>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '30%',
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
          }}>
          <Pressable onPress={() => setCardOption(false)}>
            <View
              style={{
                width: 70,
                backgroundColor: '#E9ECFB',
                height: 5,
                borderRadius: 5,
                marginTop: 20,
              }}
            />
          </Pressable>

          <View />
          <View
            style={{display: 'flex', flexDirection: 'row', gap: 20, top: 40}}>
            <View style={styles.pop}>
              <Icon name="ios-logo-rss" color="#2242D8" size={20} />
              <Text style={{fontWeight: 'bold'}}>Write to NFC</Text>
            </View>
            <View style={styles.pop}>
              <Icon name="copy-outline" size={20} color="#2242D8" />
              <Text style={{fontWeight: 'bold'}}>Duplicate card</Text>
            </View>
            <View
              style={{
                backgroundColor: '#FDEBC3',
                height: 100,
                width: 100,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
              }}>
              <Icon name="trash-outline" size={20} color="#EF4B4B" />
              <Text style={{fontWeight: 'bold'}}>Delete card</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  pop: {
    backgroundColor: '#E9ECFB',
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});
