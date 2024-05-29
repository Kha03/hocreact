import { yupResolver } from "@hookform/resolvers/yup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Button, LinearProgress, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputTextField from "features/ControllForm/InputField/InputTextField";
import styled from "@emotion/styled";
import PasswordField from "features/ControllForm/PassWordField/PassWordField";
// import "./style.scss";
RegisterFrom.propTypes = {
  onSubmit: PropTypes.func,
};
const MyStyledDiv = styled("div")((theme) => ({
  paddingTop: "16px",
  textAlign: "center",
}));
function RegisterFrom(props) {
  const schema = yup
    .object({
      fullName: yup.string().required("plesae enter your full name"),
      email: yup.string().email().required("please enter your email"),
      password: yup.string().required("please enter your password"),
      retypePassWord: yup
        .string()
        .oneOf([yup.ref("password")], "password not match")
        .required("please retype your password"),
    })
    .required();
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassWord: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
  };
  const isSubmitting = form.formState.isSubmitting;
  return (
    <MyStyledDiv>
      <div>{isSubmitting && <LinearProgress sx={{ left: 0, right: 0 }} />}</div>
      <Avatar
        sx={{
          m: 1,
          bgcolor: "secondary.main",
          margin: "0 auto",
        }}
      >
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5" sx={{ paddingTop: "6px" }}>
        Sign up
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputTextField name="fullName" label="Full Name *" form={form} />
        <InputTextField name="email" label="Email *" form={form} />
        <PasswordField name="password" label="Password *" form={form} />
        <PasswordField
          name="retypePassWord"
          label="Retype PassWord *"
          form={form}
        />
        <Button
          variant="contained"
          type="submit"
          color="primary"
          fullWidth
          sx={{ marginTop: "10px" }}
        >
          Create An Account
        </Button>
      </form>
    </MyStyledDiv>
  );
}

export default RegisterFrom;
