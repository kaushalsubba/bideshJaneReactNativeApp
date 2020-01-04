import React, { Component } from 'react';
import { View, Text,FlatList,StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

const styles = StyleSheet.create({
    peopleView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    peopleList: {
        flex:1,
        color:'black',
    }
  })

export default class SearchJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading: true
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(jsonResponse=>{
            this.Posts=jsonResponse;

            this.setState({
                isLoading:false
            })
        })
    }

    showPosts({ item }) {
        return(
            <ListItem
                style={styles.peopleView}
                title={item.title}
                subtitle={item.body}
                leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
                bottomDivider
                chevron
        />
        );
    }

    keyExtractor = (item, index) => index.toString()

  render() {
    if(this.state.isLoading){
        return (<Text>Loading...</Text>);
    } else {
        return(
            <View>
            <FlatList
                keyExtractor={this.keyExtractor}
                data={this.Posts}
                renderItem={this.showPosts}
            />
            </View>
        );
    }
  }
}
