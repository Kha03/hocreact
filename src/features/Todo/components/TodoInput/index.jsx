import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import InputTextField from "../../../ControllForm/InputField/InputTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
TodoInput.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoInput(props) {
  const schema = yup
    .object({
      title: yup
        .string()
        .required("plesae enter title")
        .min(5, "title is too short"),
    })
    .required();
  const form = useForm({
    defaultValues: {
      title: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values) => {
    console.log("Form 555: ", values);
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputTextField name="title" label="Todo" form={form} />
    </form>
  );
}

export default TodoInput;
