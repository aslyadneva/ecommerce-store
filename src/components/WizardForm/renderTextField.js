import React from 'react'; 
import TextField from '@material-ui/core/TextField'; 

const renderTextField = (formProps) => {
  const {label, value, input, meta, meta: { touched, invalid, error }, ...custom} = formProps;
  console.log(formProps); 
  return (
  <TextField
    fullWidth
    label={label} 
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)}

export default renderTextField; 