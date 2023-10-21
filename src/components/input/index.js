import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const Input = ({
  title,
  secondElement,
  refInput,
  placeholder,
  onChangeText,
  onBlur,
  returnKeyType,
  touched,
  onSubmitEditing,
  error,
  keyboardType,
  autoCapitalize,
  style,
  value,
  containerStyle,
  inputStyle,
  editable,
  maxLength,
}) => {
  const [inputValue, setInputValue] = useState(null);

  return (
    <View style={[containerStyle]}>
      {title && <Text style={[styles.title]}>{title}</Text>}
      <View
        style={[
          styles.inputContainer,
          style,
          !inputValue || inputValue?.length < 1 ? styles.emptyViewStyle : null,
          error ? styles.errorInputStyle : null,
        ]}>
        <TextInput
          value={value}
          ref={refInput}
          style={[styles.input, inputStyle]}
          placeholder={placeholder}
          onChangeText={text => {
            setInputValue(text);
            onChangeText(text);
          }}
          onBlur={onBlur}
          returnKeyType={returnKeyType}
          touched={touched}
          keyboardType={keyboardType}
          onSubmitEditing={onSubmitEditing}
          autoCapitalize={autoCapitalize}
          editable={editable}
          autoComplete={'off'}
          maxLength={maxLength}
        />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    marginLeft: 5,
    lineHeight: 28,
  },
  inputContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: 'white',
    borderColor: 'rgba(0,0,0,0.08)',
    borderWidth: 1,
    marginTop: 10,
    marginHorizontal: 15,
  },
  input: {
    flex: 1,
    height: 55,
    fontSize: 15,
    color: 'black',
    textAlign: 'left',
  },
  errorView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 3,
    marginRight: 5,
  },
  errorText: {
    fontSize: 13,
    color: 'red',
    textAlign: 'right',
    marginLeft: 3,
  },
  errorInputStyle: {
    borderColor: 'red',
  },
  secondElement: {
    marginTop: 15,
  },
});
