import React, {useContext} from 'react';
import {View,Text,StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import {Context as BlogContext} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';

const IndexScreen = ({navigation}) =>{
    const {state, deleteBlogPost} = useContext(BlogContext);

    return (<View>
        <FlatList 
            data = {state}
            keyExtractor = {(blogPosts)=>blogPosts.title}
            renderItem = {({item})=>{
                return(
                    <TouchableOpacity onPress={()=>navigation.navigate('Show', {id: item.id})}>
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress={()=> deleteBlogPost(item.id)}>
                                <Feather style={styles.icons} name = "trash"/>
                            </TouchableOpacity>
                            
                        </View>
                    </TouchableOpacity>
                    
                );
            }}
        />
    </View>);
};

IndexScreen.navigationOptions = ({navigation}) =>{
    return {
        headerRight: <TouchableOpacity onPress={()=>navigation.navigate('Create')}>
                <Feather name="plus" size = {30} style ={{paddingHorizontal:8}}/>
            </TouchableOpacity>
    };
};

const styles = StyleSheet.create({
    icons:{
        fontSize: 22,
    },
    title:{
        fontSize: 18
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        borderTopWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10,
    }
});

export default IndexScreen;