import React from "react";
import { StyleSheet, Text, View,Button,Alert,FlatList,SafeAreaView } from 'react-native';
import { Divider,Input,ListItem } from 'react-native-elements';

const styles = StyleSheet.create({
    peopleView:{
        flex:1,
        width:400,
        // borderWidth:0.5
    },
    peopleList: {
        flex:1,
      color:'black',
    }
  })

class Peoples extends React.Component{
    Names=[
        {
          key:1,
          name:"Nischhal Raj Subba",
          position:"UI Designer"
        },
        {
          key:2,
          name:"Kaushal Raj Subba",
          position:"UX Designer"
        },
        {
          key:3,
          name:"Bikes Subba",
          position:"SEO Export"
        }
    ];
    Posts=[];
    state = { isLoading: true };


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

    showPeople({ item }) {
        return(
        <View>
            <Text>{item.name}</Text>
            <Text>{item.position}</Text>
        </View>
        );
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

    render(){
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

export default Peoples;