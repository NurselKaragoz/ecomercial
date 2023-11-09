import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../Store/Actions/userActions";

import { axiosWithAuth } from "./axiosWithAuth.js";
import axiosInstance from "../Axios/axiosInstance.js";
function LoginForm() {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(userAction.fetchLoginUser(data, history));
  };

  // axiosWithAuth()
  //   .get("verify")
  //   .then((data) => console.log("get data =>", data))
  //   .catch((err) => console.log("error get token", err));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email</label>
        <br />

        <input
          className=" border-2 border-colors-lacivert rounded-md py-1 px-5"
          type="text"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && (
          <p className=" text-colors-red">This field is required.</p>
        )}
      </div>
      <div>
        <label>Password</label>
        <br />
        <input
          type="password"
          className="border-2 border-colors-lacivert rounded-md py-1 px-5"
          {...register("password")}
        />
        {errors.password && <p>This field is required.</p>}
      </div>
      <button
        className=" bg-colors-lacivert px-5 py-2 text-colors-white rounded-md mt-4 mb-4"
        type="submit"
        onSubmit={handleSubmit(onSubmit)}
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
