import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: Constants.statusBarHeight + 30,
        

    },

    empty:{
      alignSelf: 'center',
      color: '#999',
      fontSize: 24,
      fontWeight: 'bold',
    },

    cardsContainer:{
       flex: 1, 
       alignSelf: 'stretch',
       justifyContent: 'center',
       maxHeight: 500,
       

    },

    card:{
      ...StyleSheet.absoluteFillObject,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      margin: 30,
      overflow: 'hidden',
      elevation: 5,
      shadowColor: '#000',
       shadowOpacity:0.05,
       shadowRadius: 2,
       shadowOffset:{
          width: 0,
          height: 2,
       }

    },

    avatar:{
      flex: 1,
      height: 300,

    },

    footer:{
      backgroundColor: '#fff',
      paddingHorizontal: 20,
      paddingVertical: 15,

    },

    name:{
      fontWeight: 'bold',
      fontSize: 16,
      color: '#333',

    },

    bio:{
      fontSize: 14,
      color: '#999',
      marginTop: 2,
      lineHeight: 20,
      
    },

    buttonsContainer:{
      flexDirection: 'row',
      marginBottom: Constants.statusBarHeight + 70,
    },

    button:{
       width: 50,
       height: 50,
       borderRadius: 25,
       backgroundColor: '#fff',
       justifyContent: 'center',
       alignItems: 'center',
       marginHorizontal: 20,
       elevation: 5,
       shadowColor: '#000',
       shadowOpacity:0.05,
       shadowRadius: 2,
       shadowOffset:{
          width: 0,
          height: 2,
       }
    },

    matchContainer:{
      
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      elevation: 6,
      justifyContent: 'center',
      alignItems: 'center',

    },

    matchAvatar:{
      width: 160,
      height: 160,
      borderRadius: 80,
      borderWidth: 5,
      borderColor: '#fff',
      marginVertical: 30,

    },

    matchImage:{
      height: 60,
      resizeMode: 'contain',
      

    },

    matchName:{
      fontSize: 26,
      fontWeight: 'bold',
      color: '#fff',


    },

    matchBio:{
      marginTop: 10,
      fontSize: 16,
      color: 'rgba(255, 255, 255, 0.8)',
      lineHeight: 24,
      textAlign: 'center',
      paddingHorizontal: 30,

    },

    closeMatch:{
      fontSize: 16,
      color: 'rgba(255, 255, 255, 0.8)',
      marginTop: 30,
      fontWeight: 'bold',
    },
})

export default styles;