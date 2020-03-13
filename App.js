/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {

  Colors,

} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
 
      <SafeAreaView>
      <StatusBar barStyle="dark-content" />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
               <Text style={styles.highlight}>Techmelo on github</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
 
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },

  highlight: {
    fontWeight: '700',
  },
});

export default App;
