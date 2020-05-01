import React, {Component} from 'react';
import {StyleSheet,
ScrollView,
Dimensions,
Text,ActivityIndicator,
TouchableOpacity,
TextInput,
View,
Image,
StatusBar,
Modal,
ImageBackground,
KeyboardAvoidingView,AsyncStorage} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from 'react-native-vector-icons';
import { Icon,Toast,Container,Button,Content,Root,List,Card,Spinner, CardItem, ListItem, Thumbnail, Header, Left, Body, Right, Title, Subtitle } from 'native-base';


export default class loading extends Component {
    constructor(){
        super();
        this.state = {
        	greeting: "Hi User"
        }
    }

    goto = (screen) =>{
		this.props.navigation.navigate(screen);
	}

    render(){
    	return(
    		<View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"white"}}>
             
                <Animatable.View animation="fadeIn">
                  <View style={{justifyContent:"center",alignItems:"center"}}>
                   <Image style={{width:"50%",height:140}} source={require('../assets/Icon-512.png')} />
                  </View>
                  <Animatable.Text animation="pulse" 
                  style={{
                    fontSize:25,
                    color:"#000",
                    textAlign:"center",
                    margin:30,
                    fontFamily:"SenBold"
                   }}>
                  FPI TUTORIAL SYSTEM
                  </Animatable.Text>
                  <Animatable.Text animation="pulse" iterationCount="infinite" 
                  style={{
                    fontSize:14,
                    color:"#eee",
                    textAlign:"center",
                    margin:30,
                    fontFamily:"SenBold"
                   }}>
                   Loading...
                  </Animatable.Text>
                  <View>
                   
                </View>
                </Animatable.View>
              
            </View>
    	)
    }

}