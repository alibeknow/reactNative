import React, {useState,useEffect} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import SearchBar from '../components/searchBar';
import yelp from '../api/yelp';



const SearchScreen=()=>{
    const [term,setTerm]=useState('');
    const [results,setResults]=useState([]);
    const searchApi=async ()=>{
        const response=await yelp.get("/search",{
            params:{
                limit:50,
                term,
                location:'san jose'
            }
        });
        setResults(response.data.businesses);
    } 
useEffect(()=>{
    searchApi('pasta');
},[])
return (
    <View>
        <SearchBar term={term}
        onTermChange={setTerm} 
        onTermSubmit={()=>{searchApi(term)}}/>
        <Text>Search Screen </Text>
        <Text>Founded.... {results.length} restaurants </Text>
        
    </View>
)
};
const styles=StyleSheet.create({});
export default SearchScreen;