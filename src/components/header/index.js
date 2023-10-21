import React from 'react';
import {Pressable, View, Text, Image} from 'react-native';
import {styles} from './styles';

export const Header = ({title, onBackPress}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onBackPress} style={styles.backButton}>
        <Image
          source={require('../../images/right-chevron.png')}
          style={styles.backIcon}
          onPress={onBackPress}
        />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
