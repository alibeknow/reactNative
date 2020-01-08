import React, {useState} from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import SearchBar from '../components/searchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/resultsList';


const SearchScreen=({navigation})=>{
      const [term,setTerm]=useState('');
      const [searchApi,results]=useResults();

const filterResultsByPrice=(price)=>{
return results.filter(result=>{
    return result.price===price;
});
};
      return (
    <View style={{flex:1}}>
        <SearchBar term={term}
        onTermChange={setTerm} 
        onTermSubmit={()=>{searchApi(term)}}/>
        <ScrollView>
        <ResultsList title='Cost Effectife' results={filterResultsByPrice('$')} 
         />        
        <ResultsList title='Bit Pricier' results={filterResultsByPrice('$$')}
        />        
        <ResultsList title='bit spender' results={filterResultsByPrice('$$$')}
        />        
        </ScrollView>
    </View>
)
};
const styles=StyleSheet.create({});
export default SearchScreen;