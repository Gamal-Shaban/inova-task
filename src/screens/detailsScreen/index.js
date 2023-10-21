import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import {styles} from './styles';
import {Header} from '../../components/header';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchDetails} from '../../redux/actions/details';

export const DetailsScreen = () => {
  const {goBack} = useNavigation();
  const params = useRoute()?.params;
  const dispatch = useDispatch();
  const {loading, data} = useSelector(state => ({
    loading: state?.details.loading,
    data: state?.details.data,
  }));

  useEffect(() => {
    dispatch(fetchDetails(params?.id));
  }, [dispatch, params?.id]);

  console.log('data?.location?.location', data?.location?.location);
  return (
    <View style={styles.container}>
      <Header title={params?.name} onBackPress={goBack} />
      {loading ? (
        <View style={styles.loadingView}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <FlatList
          data={data?.location?.display_address}
          renderItem={({item}) => <Text style={styles.addressTitle} >* {item}</Text>}
          ListHeaderComponent={() => (
            <View>
              <Image source={{uri: data?.image_url}} style={styles.image} />
              <View style={styles.content}>
                <Text style={styles.name}>
                  {data?.name}
                </Text>
                <Text style={styles.displayAddressTitle}>
                  Display Address
                </Text>

              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};
