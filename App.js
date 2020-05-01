import React from 'react';

// Components
import splash     from './app/components/splash';
import main     from './app/components/main';
import login     from './app/components/login';
import register     from './app/components/register';
import Loading     from './app/components/loading';

import { AppRegistry,View, Image, TouchableOpacity,Text} from 'react-native';
import { DrawerItems,Icon,Header,Left,Button,Body,Title} from 'native-base';
import {createBottomTabNavigator,createStackNavigator,createSwitchNavigator, createAppContainer } from "react-navigation";
import { Ionicons } from 'react-native-vector-icons';



const AuthStack = createStackNavigator(
  {
    LoginScreen: {screen:login,navigationOptions: { header: null }},
    RegisterScreen: {screen:register,navigationOptions: { header: null }},
  },
  {
    initialRouteName: "LoginScreen",
  }
);

const AppStack = createStackNavigator(
  {
    MainScreen: {screen:main,navigationOptions:{header:null}},
  }
)


const AppContainer = createAppContainer(
  createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack
  }
));


export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      fontLoaded: false
    }
  }

  goto = (screen) =>{
      this.props.navigation.navigate(screen);
  }


  render(){
      let that = this;
      setTimeout(function(){that.setState({timePassed: true})}, 5000);
      if(!this.state.timePassed){
        return(
          <Loading/>
        )
      }else{
          return(
              <AppContainer/>
          )
      }
      
    }
}
