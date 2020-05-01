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


export default class register extends Component {
    constructor(){
        super();
        this.state = {
            greeting: "Hi User",
            username: "",
            password:""
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
                        Sign Up
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
                        Create account to join your coursemate in class
                    </Animatable.Text>
                 </View>

                 <View>
                 <TextInput
                   style={{height: 50,
                    backgroundColor: "#fff",
                    color: "#40196d",
                    paddingHorizontal: 5,
                    fontFamily:"SenRegular",
                    marginBottom: 10,
                    fontSize: 13,
                    paddingVertical: 5,
                    borderRadius:20,
                    borderBottomWidth:1,
                    borderBottomColor: "#40196d"}}
                   placeholder="Full Name"
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
                    paddingHorizontal: 5,
                    fontFamily:"SenRegular",
                    marginBottom: 10,
                    fontSize: 13,
                    paddingVertical: 5,
                    borderRadius:20,
                    borderBottomWidth:1,
                    borderBottomColor: "#40196d"}}
                   placeholder="Email Address"
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
                    paddingHorizontal: 5,
                    fontFamily:"SenRegular",
                    marginBottom: 10,
                    fontSize: 13,
                    paddingVertical: 3,
                    borderRadius:20,
                    borderBottomWidth:1,
                    borderBottomColor: "#40196d"}}
                   placeholder="Stduent ID"
                   returnKeyType="next"
                   autoCapitalize="none"
                   autoCorrect={false}
                   onSubmitEditing = {() => this.passwordInput.focus()}
                   placeholderTextColor="#ccc"
                   name="username"
                   keyboardType="default"
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
                    fontSize: 13,
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
                          <Text style={{fontFamily:"SenBold",fontSize:16,color:"white"}}>Sign up</Text>
                        </Button>
                    </View>
                    <View style={{justifyContent:"center",alignItems:"center"}}>
                      <Text onPress={() =>{this.goto('LoginScreen')}} style={{color:"#FFF",fontSize:14,fontFamily:"SenBold",margin:20}}>Already have an account ? Sign in</Text>
                    </View>
                </Animatable.View>
              
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
   }

 })