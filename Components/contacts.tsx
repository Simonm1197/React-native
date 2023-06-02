/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Contacts = ({navigation}) => {
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: '#2242D8', fontWeight: 'bold', fontSize: 30}}>
          Contacts
        </Text>
        <View
          style={{
            borderWidth: 1,
            width: 126,
            height: 40,
            borderRadius: 20,
            borderColor: 'rgba(34, 66, 216, 0.5)',
            backgroundColor: '#EAEDFB',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            paddingHorizontal: 10,
          }}>
          <Text style={{color: '#2242D8', fontSize: 15}}>+ Create group</Text>
        </View>
      </View>
      <View style={styles.searchBar}>
        <View style={styles.search}>
          <FontAwesome5 name="search" size={40} color={'#2242D8'} />

          <TextInput
            placeholder="Search by job,name..."
            style={styles.searchInput}
          />
        </View>
        <View style={styles.filter}>
          <View
            style={{borderColor: '#2242D8', borderWidth: 1.5, borderRadius: 5}}>
            <Icon name="swap-vertical" size={20} color="#2242D8" />
          </View>
        </View>
      </View>

      <View style={styles.contact}>
        <View>
          <Image
            source={require('../Images/scanned/abd.png')}
            style={{
              height: 60,
              width: 60,
              borderColor: '#FFFFFF',
              borderWidth: 1,
              borderRadius: 50,
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              top: -15,
            }}>
            <Image
              style={{
                left: 0,
                height: 30,
                width: 30,
                borderColor: '#FFFFFF',
                borderWidth: 1,
                borderRadius: 50,
              }}
              source={require('../Images/scanned/abd.png')}
            />
            <Image
              style={{
                position: 'absolute',
                left: 15,
                height: 30,
                width: 30,
                borderColor: '#FFFFFF',
                borderWidth: 1,
                borderRadius: 50,
              }}
              source={require('../Images/scanned/abd.png')}
            />
            <Image
              style={{
                left: 5,
                height: 30,
                width: 30,
                borderColor: '#FFFFFF',
                borderWidth: 1,
                borderRadius: 50,
              }}
              source={require('../Images/scanned/abd.png')}
            />
          </View>
        </View>
        <View>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#2242D8'}}>
            All contacts
          </Text>
          <Text style={{color: '#8B9CEB'}}>35 contacts</Text>
        </View>
        <FontAwesome5 name="angle-right" size={30} color="#2242D8" />
      </View>
      <View style={styles.contact}>
        <View>
          <Image
            source={require('../Images/scanned/abd.png')}
            style={{
              height: 60,
              width: 60,
              borderColor: '#FFFFFF',
              borderWidth: 1,
              borderRadius: 50,
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              top: -15,
            }}>
            <Image
              style={{
                left: 0,
                height: 30,
                width: 30,
                borderColor: '#FFFFFF',
                borderWidth: 1,
                borderRadius: 50,
              }}
              source={require('../Images/scanned/abd.png')}
            />
            <Image
              style={{
                position: 'absolute',
                left: 15,
                height: 30,
                width: 30,
                borderColor: '#FFFFFF',
                borderWidth: 1,
                borderRadius: 50,
              }}
              source={require('../Images/scanned/abd.png')}
            />
            <Image
              style={{
                left: 5,
                height: 30,
                width: 30,
                borderColor: '#FFFFFF',
                borderWidth: 1,
                borderRadius: 50,
              }}
              source={require('../Images/scanned/abd.png')}
            />
          </View>
        </View>
        <View>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#2242D8'}}>
            Recently added
          </Text>
          <Text style={{color: '#8B9CEB'}}>30 contacts</Text>
        </View>
        <FontAwesome5 name="angle-right" size={30} color="#2242D8" />
      </View>
      <View style={styles.contact}>
        <View>
          <Image
            source={require('../Images/scanned/abd.png')}
            style={{
              height: 60,
              width: 60,
              borderColor: '#FFFFFF',
              borderWidth: 1,
              borderRadius: 50,
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              top: -15,
            }}>
            <Image
              style={{
                left: 0,
                height: 30,
                width: 30,
                borderColor: '#FFFFFF',
                borderWidth: 1,
                borderRadius: 50,
              }}
              source={require('../Images/scanned/abd.png')}
            />
            <Image
              style={{
                position: 'absolute',
                left: 15,
                height: 30,
                width: 30,
                borderColor: '#FFFFFF',
                borderWidth: 1,
                borderRadius: 50,
              }}
              source={require('../Images/scanned/abd.png')}
            />
            <Image
              style={{
                left: 5,
                height: 30,
                width: 30,
                borderColor: '#FFFFFF',
                borderWidth: 1,
                borderRadius: 50,
              }}
              source={require('../Images/scanned/abd.png')}
            />
          </View>
        </View>
        <View>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#2242D8'}}>
            Live contacts
          </Text>
          <Text style={{color: '#8B9CEB'}}>40 contacts</Text>
        </View>
        <FontAwesome5 name="angle-right" size={30} color="#2242D8" />
      </View>
      <Pressable
        onPress={() => navigation.navigate('ScannedPage')}
        style={styles.contact}>
        <View>
          <Image
            source={require('../Images/scanned/abd.png')}
            style={{
              height: 60,
              width: 60,
              borderColor: '#FFFFFF',
              borderWidth: 1,
              borderRadius: 50,
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              top: -15,
            }}>
            <Image
              style={{
                left: 0,
                height: 30,
                width: 30,
                borderColor: '#FFFFFF',
                borderWidth: 1,
                borderRadius: 50,
              }}
              source={require('../Images/scanned/abd.png')}
            />
            <Image
              style={{
                position: 'absolute',
                left: 15,
                height: 30,
                width: 30,
                borderColor: '#FFFFFF',
                borderWidth: 1,
                borderRadius: 50,
              }}
              source={require('../Images/scanned/abd.png')}
            />
            <Image
              style={{
                left: 5,
                height: 30,
                width: 30,
                borderColor: '#FFFFFF',
                borderWidth: 1,
                borderRadius: 50,
              }}
              source={require('../Images/scanned/abd.png')}
            />
          </View>
        </View>
        <View>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#2242D8'}}>
            Scanned
          </Text>
          <Text style={{color: '#8B9CEB'}}>0 contacts</Text>
        </View>
        <FontAwesome5 name="angle-right" size={30} color="#2242D8" />
      </Pressable>
    </View>
  );
};
export default Contacts;

const styles = StyleSheet.create({
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    marginBottom: 25,
    marginHorizontal: 25,
    marginTop: 15,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 270,
    height: 50,
    backgroundColor: '#F4F6FD',
    borderRadius: 20,
  },
  filter: {
    width: 50,
    height: 50,
    backgroundColor: '#F4F6FD',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  searchGlass: {
    color: '#2242D8',
    paddingLeft: 16,
  },
  searchInput: {
    width: 200,
    color: '#757575',
    fontSize: 14,
    fontWeight: '400',
    paddingLeft: 21,
  },
  contact: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderWidth: 1,
    height: 110,
    width: 325,
    top: 10,
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: '#E6EBF7',
    borderColor: 'rgba(34, 66, 216, 0.26)',
  },
});
