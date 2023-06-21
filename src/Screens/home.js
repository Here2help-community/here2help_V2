import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import colors from '../components/colors';
import { useNavigation } from "@react-navigation/native";

const Home = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.head} >
          <Text style={styles.Heading}>Select a category to create a request for help </Text>
        </View>
        <View style={{paddingVertical: '5%'}} >
        <TouchableOpacity onPress={() => { navigation.navigate('rides_screen')   }} activeOpacity={0.8} style={styles.card}>
          <View style={styles.cardText}>
            <Text style={styles.subHead} >
              Rides
            </Text>
            <Text style={styles.context} >
              Offer Someone a ride
            </Text>
          </View>
            <Image
            source={require('../../assets/rides.png')}
              resizeMode='contain'
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
       

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: colors.backgroundColor,
    paddingHorizontal: '2.5%',
    paddingTop: '10%'
   
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  head: {
    flexDirection: 'column',
    justifyContent: 'center'
    // backgroundColor: 'red'

  },
  cardText:{
    flexDirection: 'column',
    justifyContent: 'center'
  },
  image: {
    width: '50%'
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#596188',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: '3%'
  },
  subHead:{
    color: colors.primary1,
    fontSize:21,
    fontWeight: '700'
  },
  context:{
    fontSize: 14
  },

  Heading: {
    fontSize: 24,
    fontWeight: '800',
    textAlign : 'left'
    
    },
});

export default Home;

