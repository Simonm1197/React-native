/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';

export default function Welcome({navigation}) {
  return (
    <View
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: '#2242DA',
        position: 'absolute',
      }}>
      <View style={{position: 'relative', left: 30, top: 45, width: '80%'}}>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            paddingHorizontal: 20,
            color: '#FFFFFF',
          }}>
          Let's make your first digital business card
        </Text>
      </View>
      <Image
        source={{
          uri: 'https://images.hindustantimes.com/img/2022/04/05/1600x900/dhoni-csk-screengrab_1649142649306_1649142655615.jpg',
        }}
        style={{
          position: 'relative',
          width: 80,
          height: 80,
          top: 50,
          left: 30,
          borderRadius: 40,
          zIndex: 2,
        }}
      />
      <View
        style={{
          width: '70%',
          height: '50%',
          position: 'relative',
          top: -5,
          left: '15%',
          backgroundColor: '#FFFFFF',
          zIndex: 1,
          borderWidth: 2,
          borderColor: '#54A4EE',
          borderTopRightRadius: 80,
          display: 'flex',
          gap: 10,
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingTop: 20,
        }}>
        <Text
          style={{
            backgroundColor: '#54A4EE',
            paddingVertical: 10,
            width: '45%',
            borderRadius: 20,
            textAlign: 'center',
            fontSize: 15,
            margin: 10,
            position: 'relative',
            left: -15,
            fontWeight: 'bold',
            color: '#FFFFFF',
          }}>
          M S D
        </Text>
        <View
          style={{
            backgroundColor: '#c6e3f3',
            width: '55%',
            borderRadius: 40,
            padding: 4,
            gap: 5,
            position: 'relative',
            left: 30,
          }}>
          <Text style={{color: '#000000', fontSize: 13, textAlign: 'center'}}>
            Indian Cricketer
          </Text>
          <Text
            style={{
              color: 'blue',
              textAlign: 'right',
              paddingEnd: 15,
              fontSize: 13,
              fontWeight: 'bold',
            }}>
            At BCCI
          </Text>
        </View>
        <Text
          style={{
            fontSize: 12,
            width: '90%',
            paddingHorizontal: 30,
            paddingVertical: 5,
            backgroundColor: '#DADCE3',
            borderTopLeftRadius: 40,
            borderBottomLeftRadius: 40,
            position: 'relative',
            left: 13,
            margin: 25,
            color: '#000000',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          Mahendra Singh Dhoni commonly known as MS Dhoni, is a former Indian
          cricketer. Widely considered one of the greatest captain.
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: 'blue',
            backgroundColor: '#c6e3f3',
            padding: 8,
            borderRadius: 15,
            paddingHorizontal: 15,
            position: 'relative',
            left: -30,
          }}>
          Twitter.com/ryan
        </Text>
        <Text
          style={{
            fontSize: 8,
            color: 'blue',
            backgroundColor: '#c6e3f3',
            paddingHorizontal: 10,
            borderRadius: 10,
            padding: 5,
            position: 'relative',
            left: 80,
            top: -15,
          }}>
          instagram.com/ryn
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: 'blue',
            backgroundColor: '#c6e3f3',
            paddingHorizontal: 10,
            borderRadius: 15,
            padding: 5,
            position: 'relative',
            left: 10,
          }}>
          facebook.com
        </Text>
      </View>

      <View
        style={{
          backgroundColor: '#FFFFFF',
          width: '100%',
          height: '45%',
          position: 'absolute',
          bottom: 0,
          zIndex: 1,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          borderWidth: 2,
          borderColor: '#54A4EE',
          alignItems: 'center',
          gap: 5,
        }}>
        <View
          style={{
            width: 60,
            height: 10,
            borderRadius: 5,
            backgroundColor: '#E8EFFD',
            alignItems: 'center',
            marginTop: 5,
          }}
        />
        <Pressable
          style={{
            backgroundColor: '#2242D8',
            width: '80%',
            borderRadius: 17,
            padding: 15,
          }}
          onPress={() => navigation.navigate('SignUpPage')}>
          <Text style={{color: '#FFFFFF', textAlign: 'center'}}>Sign up</Text>
        </Pressable>
        <Pressable
          style={{
            borderWidth: 1,
            borderColor: '#2242D8',
            width: '80%',
            borderRadius: 17,
            padding: 15,
          }}>
          <Text style={{textAlign: 'center', color: '#000000'}}>
            Login to app
          </Text>
        </Pressable>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 15,
          }}>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#EBEEFC',
              flex: 1,
            }}
          />
          <Text style={{color: '#71A1FF'}}>or</Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#EBEEFC',
              flex: 1,
            }}
          />
        </View>

        <View style={{gap: 5, width: '80%'}}>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 20,
              borderColor: '#2242D857',
              padding: 10,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: 'https://img.freepik.com/free-icon/search_318-265146.jpg',
              }}
              style={{
                position: 'relative',
                width: 30,
                height: 30,
                borderRadius: 40,
                zIndex: 2,
              }}
            />
            <Text
              style={{
                color: '#2242D8',
                paddingHorizontal: 55,
                fontWeight: 'bold',
              }}>
              Continue with google
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 20,
              borderColor: '#2242D857',
              padding: 10,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png',
              }}
              style={{
                position: 'relative',
                width: 30,
                height: 30,
                borderRadius: 40,
                zIndex: 2,
              }}
            />
            <Text
              style={{
                color: '#2242D8',
                paddingHorizontal: 55,
                fontWeight: 'bold',
              }}>
              Continue with google
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 20,
              borderColor: '#2242D857',
              padding: 10,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: 'https://img.freepik.com/free-icon/apple_318-565853.jpg',
              }}
              style={{
                position: 'relative',
                width: 30,
                height: 30,
                borderRadius: 40,
                zIndex: 2,
              }}
            />
            <Text
              style={{
                color: '#2242D8',
                paddingHorizontal: 55,
                fontWeight: 'bold',
              }}>
              Continue with google
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
