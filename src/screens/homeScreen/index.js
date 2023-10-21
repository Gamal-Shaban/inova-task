import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  BackHandler,
  FlatList,
  ScrollView,
  SectionList,
  Text,
  View,
} from 'react-native';
import Input from '../../components/input';
import {useDispatch, useSelector} from 'react-redux';
import {fetchHomeData} from '../../redux/actions/home';
import {AllWidthItem, allWidthItem} from '../../components/allWidthItem';
import {styles} from './styles';
import {useDebounce} from 'use-debounce';
import {Header} from '../../components/header';
import RNExitApp from 'react-native-exit-app';
import {useNavigation} from '@react-navigation/native';

export const HomeScreen = () => {
  const {loading, DATA} = useSelector(state => ({
    loading: state?.home?.loading,
    DATA: state?.home?.homeData,
  }));
  const dispatch = useDispatch();
  const [input, setInput] = useState(null);
  const {navigate} = useNavigation();
  const [value] = useDebounce(input, 600);

  useEffect(() => {
    dispatch(fetchHomeData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchHomeData(value));
  }, [dispatch, value]);

  const RenderData = () => {
    console.log('DATA?.length > 0',DATA)
    if (DATA?.length > 0) {
      return (
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <AllWidthItem
              item={item}
              onPress={() =>
                navigate('Details', {
                  id: item?.id,
                  name: item?.name,
                })
              }
            />
          )}
          contentContainerStyle={styles.contentContainerStyle}
          renderSectionHeader={({section: {title, data}}) => {
            if (data?.length > 0) {
              return (
                <View style={styles.titleView}>
                  <Text style={styles.header}>{title}</Text>
                </View>
              );
            } else {
              return <View />;
            }
          }}
        />
      );
    } else {
      return (
        <View style={[styles.loadingView, {backgroundColor: 'red'}]}>
          <Text>No Content</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Header title={'Restaurant'} onBackPress={() => RNExitApp.exitApp()} />
      <Input placeholder={'Search'} onChangeText={setInput} />
      {loading ? (
        <View style={styles.loadingView}>
          <ActivityIndicator size={'large'} color={'white'} />
        </View>
      ) : (
        <RenderData />
      )}
    </View>
  );
};
