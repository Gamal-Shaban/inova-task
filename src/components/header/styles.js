import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  backButton: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    transform: [{rotate: '180deg'}],
  },
  title: {
    flex: 1,
    marginRight: 40,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
