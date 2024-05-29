import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import PropTypes from "prop-types";
import { useState } from "react";
import { Controller } from "react-hook-form";

PasswordField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,
};

function PasswordField(props) {
  const { name, label, form } = props;
  const { formState } = form;
  const hasError = formState.errors[name];
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword((x) => !x);
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => (
        <TextField
          {...field}
          id={name}
          type={showPassword ? "text" : "password"}
          label={label}
          fullWidth
          variant="outlined"
          margin="normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={toggleShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          error={!!hasError}
          helperText={hasError?.message}
        />
      )}
    />
  );
}

export default PasswordField;
