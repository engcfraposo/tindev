import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,

    },

    input:{
       height: 46,
       alignSelf: 'stretch',
       backgroundColor: '#fff',
       borderWidth: 1,
       borderColor: '#ddd',
       borderRadius: 4,
       marginTop: 20,
       paddingHorizontal: 15,

    },

    button:{
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#df4723',  
        borderRadius: 4,
        marginTop: 10,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
 
     },

     buttonText:{
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 16,
 
     },
})

export default styles;