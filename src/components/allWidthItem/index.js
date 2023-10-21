import React from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import {styles} from './styles';

export const AllWidthItem = ({item, onPress}) => {
  console.log('item>>>', item);
  return (
    <Pressable onPress={onPress}>
      <ImageBackground style={styles.container} source={{uri: item?.image_url}}>
        <Text style={styles.title}>{item?.name}</Text>
        <View style={styles.footerView}>
          <Text>{`${item?.rating} stars, ${item?.review_count} Reviews`}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};
