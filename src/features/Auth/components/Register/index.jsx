import { register } from "features/Auth/userSlice";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import RegisterFrom from "../RegisterFrom";
import { useSnackbar } from "notistack";

Register.propTypes = {
  setClose: PropTypes.func,
};

function Register(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const handleSuccess = () => {
    enqueueSnackbar("Register successfully", { variant: "success" });
  };
  const handleSubmit = async (values) => {
    // setClose(false);
    const newValues = {
      username: values.fullName,
      password: values.password,
    };
    try {
      const action = register(newValues);
      const user = await dispatch(action).unwrap();
      console.log(user);
      // show snackbar
      handleSuccess();
      // close dialog
      const { setClose } = props;
      setClose();
    } catch (err) {
      console.log("error");
    }
  };
  return (
    <div>
      <RegisterFrom onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
