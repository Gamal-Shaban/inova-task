import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    padding: 10,
    height: 150,
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
    resizeMode: 'contain:',
  },
  title: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: {width: 0.5, height: 0.5},
    textShadowRadius: 1,
    marginTop: 40
  },
  footerView: {
    height: 30,
    backgroundColor: 'white',
    position: 'absolute',
    borderRadius: 10,
    bottom: 10,
    left: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});
