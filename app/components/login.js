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


export default class login extends Component {
    constructor(){
        super();
        this.state = {
        	username: "",
        	password:"",
        	loading:true,
        	userdata:[]
        }
    }

    goto = (screen) =>{
		this.props.navigation.navigate(screen);
	}

    render(){
    	return(
    		<View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"white"}}>
    		<View style={styles.overlay}/>
			  <Image source={require('../assets/bgsample.jpg')} resizeMode='cover' blurRadius={1} style={styles.img}/>
			  	<Animatable.View animation="fadeIn" style={{margin:10}}>
			  	 <View style={{justifyContent:"center",alignItems:"center"}}>
			  	 	<Image source={require('../assets/Icon-96.png')} />
			  	 </View>
			  	 <View>
			  	 	<Animatable.Text 
			  	 	style={{
			  	 		fontSize:20,
			  	 		color:"#b16405",
			  	 		fontFamily:"SenBold",
			  	 		textAlign:"center",
			  	 		margin:30,
			  	 		textTransform: "uppercase"
			  	 	}}>
			  	  		Welcome to FPI Edu Tutor
			  	    </Animatable.Text>
			  	    <Animatable.Text 
			  	 	style={{
			  	 		fontSize:15,
			  	 		color:"#FFF",
			  	 		fontFamily:"SenRegular",
			  	 		textAlign:"center",
			  	 		marginTop:10,
			  	 		marginBottom:20
			  	 	}}>
			  	  		Hi user, please login with your student ID and password
			  	    </Animatable.Text>
			  	 </View>

			  	 <View>
			  	 <TextInput
	               style={{height: 50,
					backgroundColor: "#fff",
					color: "#40196d",
					paddingHorizontal: 10,
					fontFamily:"SenRegular",
					marginBottom: 10,
					fontSize: 18,
					paddingVertical: 5,
					borderRadius:20,
					borderBottomWidth:1,
					borderBottomColor: "#40196d"}}
	               placeholder="Student ID"
	               returnKeyType="next"
	               autoCapitalize="none"
	               autoCorrect={false}
	               onSubmitEditing = {() => this.passwordInput.focus()}
	               placeholderTextColor="#ccc"
	               name="username"
	               keyboardType="email-address"
	               blurOnSubmit={true}
	               onChangeText={(TextInput) => this.setState({username: TextInput})}
               />

               <TextInput
	               style={{height: 50,
					backgroundColor: "#fff",
					color: "#40196d",
					paddingHorizontal: 10,
					fontFamily:"SenRegular",
					marginBottom: 10,
					fontSize: 18,
					paddingVertical: 5,
					borderBottomWidth:1,
					borderRadius:20,
					borderBottomColor: "#40196d"}}
	               placeholder="Password"
	               returnKeyType="go"
	               autoCapitalize="none"
	               secureTextEntry
	               blurOnSubmit={true}
	               ref={(input) => this.passwordInput = input}
	               placeholderTextColor="#ccc"
	               name="password"
	               onChangeText={(TextInput) => this.setState({password: TextInput})}
               />

			  	 </View>

			  	 
			  	  
  					<View>	
				  	    <Button style={{width:"100%",backgroundColor:"#b16405"}}  full rounded onPress={() => {this.goto('SplashScreen')}}>
						  <Text style={{fontFamily:"SenBold",fontSize:16,color:"white"}}>Sign in</Text>
					    </Button>
				    </View>
				    <View style={{display:"flex",justifyContent:"space-between",flexDirection:"row"}}>
				      <Text onPress={() =>{this.goto('RegisterScreen')}} style={{color:"#FFF",fontSize:14,fontFamily:"SenBold",margin:20}}>Sign up</Text>
				      <Text style={{color:"#FFF",fontSize:14,fontFamily:"SenBold",margin:20}}>Forget Password</Text>
				    </View>
			  	</Animatable.View>
			    {this.state.loading &&
				    <View style={styles.loading}>
				      <ActivityIndicator size='large' />
				    </View>
				}
			</View>
    	)
    }

}

const styles = StyleSheet.create({
   overlay: {
     ...StyleSheet.absoluteFillObject,
     backgroundColor: 'rgba(11,102,35,.9)'
   },
   img:{
   	...StyleSheet.absoluteFillObject,
   	width:"100%",
   	height:"100%",
   },
   loading:{
   	position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
   }

 })