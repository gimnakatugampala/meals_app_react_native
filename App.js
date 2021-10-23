import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MealsNavigator from './navigation/MealsNavigator';

import {enableScreens} from 'react-native-screens'

enableScreens()



export default function App() {
  return (
    <MealsNavigator />
  );
}

const styles = StyleSheet.create({});
