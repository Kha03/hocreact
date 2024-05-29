import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

InputTextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,
};

function InputTextField(props) {
  const { name, label, form } = props;
  const { formState } = form;
  const hasError = formState.errors[name];
  return (
    <Controller
      render={({ field }) => (
        <TextField
          variant="outlined"
          label={label}
          fullWidth
          margin="normal"
          {...field}
          error={!!hasError}
          helperText={hasError?.message}
        />
      )}
      name={name}
      control={form.control}
    />
  );
}

export default InputTextField;
