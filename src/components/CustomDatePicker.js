import React from 'react';
import { Controller } from 'react-hook-form';
import { DatePicker } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = ({ control, name }) => (
  <Controller
    control={control}
    name={name}
    render={({ field }) => <DatePicker {...field} selected={field.value} />}
  />
);

export default CustomDatePicker;
