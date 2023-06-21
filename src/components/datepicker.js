import React, { useState } from 'react';
import { View, Button } from 'react-native';
import DatePicker from 'react-native-datepicker';

const MyDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleButtonPress = () => {
    console.log('Selected date:', selectedDate);
  };

  return (
    <View>
      <DatePicker
        style={{ width: 200 }}
        date={selectedDate}
        mode="date"
        placeholder="Select date"
        format="YYYY-MM-DD"
        minDate="2020-01-01"
        maxDate="2025-12-31"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
          },
        }}
        onDateChange={handleDateChange}
      />
      <Button title="Get Selected Date" onPress={handleButtonPress} />
    </View>
  );
};

export default MyDatePicker;
