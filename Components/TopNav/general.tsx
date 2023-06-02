import {View, Text, FlatList} from 'react-native';
import React from 'react';

const General = () => {
  const Fields = [
    {
      title: 'Card Name',
      paho: 'Work',
    },
    {
      title: 'Personal Details',
      paho: 'John-ryan',
    },
    {
      title: 'Company Details',
      paho: ['CompanyName', 'Designation', 'Department'],
    },
  ];
  return (
    <View>
      <FlatList
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
      />
    </View>
  );
};

export default General;
