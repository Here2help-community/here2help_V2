import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const WheelPicker = ({ items, selectedValue, onValueChange }) => {
  return (
    <View style={styles.container}>
      {items.map((item) => (
        <TouchableOpacity
          key={item.value}
          style={[
            styles.item,
            { backgroundColor: item.value === selectedValue ? '#DDDDDD' : 'transparent' },
          ]}
          onPress={() => onValueChange(item.value)}
        >
          <Text style={styles.label}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    color: 'black',
  },
});

export default WheelPicker;
