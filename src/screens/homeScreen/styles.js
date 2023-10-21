import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  header: {
    marginLeft: 20,
    fontSize: 17,
    fontWeight: 'bold',
  },
  titleView: {
    backgroundColor: 'white',
    height: 40,
    marginTop: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'center',
  },
  contentContainerStyle: {
    paddingBottom: 150,
  },
  loadingView: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
