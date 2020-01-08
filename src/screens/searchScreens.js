import React, {useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import SearchBar from '../components/searchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/resultsList';


const SearchScreen=()=>{
    const [term,setTerm]=useState('');
      const [searchApi,results]=useResults();
return (
    <View>
        <SearchBar term={term}
        onTermChange={setTerm} 
        onTermSubmit={()=>{searchApi(term)}}/>
        <Text>Search Screen </Text>
        <Text>Founded.... {results.length} restaurants </Text>
        <ResultsList title='Cost Effectife'  />        
        <ResultsList title='Bit Pricier'/>        
        <ResultsList title='bit spender'/>        
    </View>
)
};
const styles=StyleSheet.create({});
export default SearchScreen;