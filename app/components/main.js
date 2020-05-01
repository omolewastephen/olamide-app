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


export default class main extends Component {
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
    		<View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
			 
			  	<Animatable.View animation="fadeIn" >
			  	  <Animatable.Text animation="pulse" iterationCount="infinite" style={{fontWeight:"bold",fontSize:16,color:"#000",textAlign:"center",margin:30}}>
                  {this.state.greeting}
                  </Animatable.Text>
                  <View>
			  	   <Button style={{width:"100%"}} full rounded success onPress={() => {this.goto('LoginScreen')}}>
					  <Text style={{fontWeight:"bold",fontSize:16,color:"white"}}>Go to Login Page</Text>
				    </Button>
                </View>
			  	</Animatable.View>
			 
			</View>
    	)
    }

}