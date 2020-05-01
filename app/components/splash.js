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


export default class splash extends Component {
    constructor(){
        super();
        this.state = {
        	splashText: "FPI TUTORING SYSTEM",
          timePassed: false
        }
    }

    goto = (screen) =>{
		  this.props.navigation.navigate(screen);
	  }



    componentDidMount()
    {
      setTimeout( () => {
        this.setTimePassed();
      },5000);
    }

    setTimePassed(){
      this.setState({timePassed:true});
      this.goto('LoginScreen');
    }

    render(){
    	return(
    		<View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"green"}}>
			 
			  	<Animatable.View animation="fadeIn">
                  <View style={{ustifyContent:"center",alignItems:"center"}}>
                   <Image style={{width:100,height:100}} source={require('../assets/fpilogo.png')} />
                  </View>
			  	  <Animatable.Text animation="pulse" 
                  style={{
                    fontSize:25,
                    color:"#FFF",
                    textAlign:"center",
                    margin:30,
                    fontFamily:"Roboto"
                   }}>
                  {this.state.splashText}
                  </Animatable.Text>
                  <Animatable.Text animation="pulse" iterationCount="infinite" 
                  style={{
                    fontSize:14,
                    color:"#eee",
                    textAlign:"center",
                    margin:30,
                    fontFamily:"Roboto"
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