/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator,
  TabBarIOS
} from 'react-native';
var ScrollableTabView = require('react-native-scrollable-tab-view');

var sample = React.createClass({
  getInitialState: function(){
    return {
      selectedTab: "home"
    }
  },
  _renderPage: function(pageName) {
    switch (pageName) {
      case "home":
        return (<Text>home</Text>);
      case "search":
        return (
          <ScrollableTabView style={{marginTop: 20}}>
            <Text tabLabel='Tab #1'>My</Text>
            <Text tabLabel='Tab #2'>favorite</Text>
            <Text tabLabel='Tab #3'>project</Text>
          </ScrollableTabView>
        );
    }
  },
  render: function() {
    return (
      <TabBarIOS>
         <TabBarIOS.Item
           title="Home"
           systemIcon={"search"}
           selected={this.state.selectedTab === 'home'}
           onPress={() => {
             this.setState({
               selectedTab: 'home',
             });
           }}>
           {this._renderPage('home')}
         </TabBarIOS.Item>
         <TabBarIOS.Item
           title="Search"
            systemIcon={"search"}
           selected={this.state.selectedTab === 'search'}
           onPress={() => {
             this.setState({
               selectedTab: 'search'
             });
           }}>
           {this._renderPage("search")}
         </TabBarIOS.Item>
        </TabBarIOS>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('sample', () => sample);
