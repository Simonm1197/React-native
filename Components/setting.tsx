/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput, Pressable, Alert, Modal} from 'react-native';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

const Setting = ({navigation}) => {
  const [Show, setShow] = useState(false);

  return (
    <View
      style={{
        padding: 20,
      }}>
      <Text
        style={{
          color: '#2242D8',
          fontSize: 35,
          fontWeight: 'bold',
        }}>
        Settings
      </Text>
      <View
        style={{
          marginTop: 15,
          height: 120,
          backgroundColor: '#DBF1F1',
          borderRadius: 20,
        }}
      />

      <View style={{marginTop: 30, gap: 10}}>
        <Pressable style={styles.list}>
          <Text style={styles.listText}>Profile</Text>
        </Pressable>

        <Pressable style={styles.list}>
          <Text style={styles.listText}>Share app</Text>
        </Pressable>

        <Pressable style={styles.list}>
          <Text style={styles.listText}>Rate us</Text>
        </Pressable>

        <Pressable style={styles.list}>
          <Text style={styles.listText}>About app</Text>
        </Pressable>

        <Pressable style={styles.list}>
          <Text style={styles.listText}>Contact us</Text>
        </Pressable>

        <Pressable style={styles.list}>
          <Text style={styles.listText}>Privacy policy</Text>
        </Pressable>
      </View>

      <Pressable onPress={() => setShow(true)}>
        <Text
          style={{
            color: '#EF5656',
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          Logout?
        </Text>
      </Pressable>
      <View style={{flex: 1}}>
        <Modal transparent visible={Show}>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              height: '50%',
              backgroundColor: '#FFFF',
              display: 'flex',
              gap: 20,
              paddingHorizontal: 50,
              paddingTop: 30,
              alignItems: 'center',
              borderRadius: 30,
            }}>
            <View
              style={{
                width: 70,
                height: 7,
                backgroundColor: '#ACC0EE',
                borderRadius: 5,
              }}
            />
            <Text style={{color: 'blue', fontSize: 20}}>
              Are you sure want to logout
            </Text>
            <Text style={{color: 'blue', width: '70%', textAlign: 'center'}}>
              You will need to again enter your details to login
            </Text>
            <Pressable
              style={{
                borderWidth: 1,
                borderColor: '#A8DFEC',
                backgroundColor: 'blue',
                borderRadius: 20,
                width: '80%',
                padding: 15,
              }}
              onPress={() => navigation.navigate('WelcomePage')}>
              <Text
                style={{fontSize: 17, textAlign: 'center', color: '#FFFFFF'}}>
                Yes I want to
              </Text>
            </Pressable>
            <Pressable
              style={{
                borderWidth: 1,
                borderColor: '#A8BDEC',
                borderRadius: 20,
                width: '80%',
                padding: 15,
              }}>
              <Text
                style={{color: 'blue', fontSize: 17, textAlign: 'center'}}
                onPress={() => setShow(false)}>
                No I don't want to
              </Text>
            </Pressable>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  list: {
    height: 60,
    justifyContent: 'center',
    borderRadius: 20,
    shadowColor: '#E2DCDC',
    shadowOpacity: 0.5,
    backgroundColor: '#DBF1F1',
  },

  listText: {
    color: '#2242D8',
    fontWeight: 'bold',
    paddingLeft: 10,
    fontSize: 20,
  },
});
