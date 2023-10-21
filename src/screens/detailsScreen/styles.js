import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  loadingView: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: 320,
    width: '100%'
  },
  content: {
    paddingHorizontal: 20
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15
  },
  displayAddressTitle:{
    marginVertical: 10
  },
  addressTitle: {
    fontSize: 15,
    marginLeft: 20,
    marginTop: 10
  }
});
