import React from 'react';
import {View,TextInput,StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar=({term,onTermChange,onTermSubmit})=>{
return (
    <View style={styles.backgroundStyle}>
        <Feather name='search' style={styles.iconStyle} />
        <TextInput placeholder="Search" style={styles.textInput} value={term}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        />
    </View>
)
};
const styles=StyleSheet.create({

backgroundStyle:{
    marginTop:15,
    backgroundColor:"#F0EEEE",
    height:50,
    borderRadius:5,
    marginHorizontal:15,
    flexDirection:'row',
    marginBottom:10
},
textInput:{
flex:1,
fontSize:18
},
iconStyle:{
    fontSize:35,
    alignSelf:'center',
    marginHorizontal:15
}

});
export default SearchBar;