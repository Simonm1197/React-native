/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  FlatList,
  SectionList,
  StyleSheet,
  TextInput,
} from 'react-native';
import React from 'react';

const General = () => {
  const DATA = [
    {
      title: 'Card Name',
      data: ['Work'],
    },
    {
      title: 'Personal Details',
      data: ['John-ryan'],
    },
    {
      title: 'Company Details',
      data: ['CompanyName', 'Designation', 'Department'],
    },
  ];
  return (
    <View style={{padding: 10}}>
      {/* <FlatList
        data={Fields}
        renderItem={({item}) => (
          <View>
            <View>
              <Text>{item.title}</Text>
            </View>

            <View>
              <Text>{item.paho}</Text>
            </View>
          </View>
        )}
      /> */}

      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View>
            <TextInput style={styles.title} placeholder={item} />
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.head}>{title}</Text>
        )}
      />
      <TextInput
        placeholder="Bio"
        style={{
          color: '#2242D8',
          borderWidth: 1,
          borderColor: '#2242D8',
          margin: 10,
          borderRadius: 10,
          paddingHorizontal: 15,
          height: 110,
          paddingBottom: 70,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    fontWeight: 'bold',
    color: '#000000',
  },

  title: {
    color: '#2242D8',
    borderWidth: 1,
    borderColor: '#2242D8',
    margin: 10,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
});

export default General;
