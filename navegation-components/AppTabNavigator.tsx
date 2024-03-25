import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Platform, SafeAreaView } from 'react-native';
import { Text } from '../tool-components'; // Asegúrate de que la importación es correcta según tu estructura
import { AnimatedIcon } from '../components/AnimatedIcon';
import { Highlights } from '../screens/HighlightedStories';
import { TaleNavigator } from './TaleStack';
import { ProfileNavigator } from './ProfileStack';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const TabIcons = {
  Highlights: require('../assets/iconsHTML/black/star.png'),
  Home: require('../assets/iconsHTML/black/home.png'),
  Profile: require('../assets/iconsHTML/black/profile.png'),
};

const SelectedIcons = {
  Highlights: require('../assets/iconsHTML/white/star.png'),
  Home: require('../assets/iconsHTML/white/add.png'),
  Profile: require('../assets/iconsHTML/white/profile.png'), // Asume que tienes un icono seleccionado para Profile
};

export const AppNavigator = () => {
  console.log('Bottom space: ', getBottomSpace());
  const [selectedTab, setSelectedTab] = useState('Home');

  const renderContent = () => {
    switch (selectedTab) {
      case 'Highlights':
        return <Highlights />;
      case 'Home':
        return <TaleNavigator />;
      case 'Profile':
        return <ProfileNavigator />;
      default:
        return <TaleNavigator />;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {renderContent()}
      <SafeAreaView style={styles.tabBar}>
        {Object.keys(TabIcons).map((tab, index) => (
          <TouchableOpacity key={index} style={styles.tabItem} onPress={() => setSelectedTab(tab)}>
            <AnimatedIcon
              focused={selectedTab === tab}
              source={selectedTab === tab ? SelectedIcons[tab] : TabIcons[tab]}
              first_background={styles.tabBar.backgroundColor}
              second_background={'#8B00FF'}
            />
            {/* <Text>{tab}</Text> */}
          </TouchableOpacity>
        ))}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#e8e8e8',
    height: 60,
    paddingBottom: Platform.OS === 'ios' ? getBottomSpace() : 0,
  },
  tabItem: {
    alignItems: 'center',
  },
});
