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
import {allWidthItem} from '../../components/allWidthItem';
import {styles} from './styles';
import {useDebounce} from 'use-debounce';
import {Header} from '../../components/header';
import RNExitApp from 'react-native-exit-app';

export const HomeScreen = () => {
  const {loading, DATA} = useSelector(state => ({
    loading: state?.home?.loading,
    DATA: state?.home?.homeData,
  }));
  const dispatch = useDispatch();
  const [input, setInput] = useState(null);
  const [showGrid, setShowGrid] = useState(null);
  const [value] = useDebounce(input, 600);

  useEffect(() => {
    dispatch(fetchHomeData());
  }, [dispatch]);

  console.log('data?>>>>0', DATA);
  useEffect(() => {
    dispatch(fetchHomeData(value));
  }, [dispatch, value]);

  return (
    <View style={styles.container}>
      <Header title={'Restaurant'} onBackPress={() => RNExitApp.exitApp()} />
      <Input placeholder={'Search'} onChangeText={setInput} />
      {loading && DATA?.length < 1 ? (
        <View style={styles.loadingView}>
          <ActivityIndicator size={'large'} color={'white'} />
        </View>
      ) : (
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          showsVerticalScrollIndicator={false}
          renderItem={allWidthItem}
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
      )}
    </View>
  );
};
