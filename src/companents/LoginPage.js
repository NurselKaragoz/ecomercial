import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as Yup from "yup";

export default function App() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    name: Yup.string()
      .required("Name is a required field")
      .min(3, "Name must be at least 3 characters"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="gap-5 flex flex-col">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex- flex-col gap-3">
          <label>Name</label>
          <div>
            <br />
            <input
              className="border-2 border-colors-lacivert rounded-md py-1 px-5"
              type="text"
              name="name"
              {...register("name", {
                minLength: 3,
                required: true,
              })}
            />
            {errors.name && errors.name.type === "required" && (
              <p className="text-colors-red">Name is required.</p>
            )}
            {errors.name && errors.name.type === "minLength" && (
              <p className="errorMsg text-colors-red">
                Name must be more than 3 characters
              </p>
            )}
          </div>
        </div>
        <div className=" gap-3">
          <label>Email</label>
          <br />
          <input
            className=" border-2 border-colors-lacivert rounded-md py-1 px-5 gap-3"
            type="text"
            name="email"
            {...register("email", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <p className="errorMsg text-colors-red">Email is required.</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p className="errorMsg text-colors-red">Email is not valid.</p>
          )}
        </div>
        <div className="">
          <label>Password</label>
          <br />
          <input
            className=" border-2 border-colors-lacivert rounded-md py-1 px-5"
            type="password"
            name="password"
            {...register("password", {
              required: true,
              minLength: 8,
              pattern:
                /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-]).$/,
            })}
          />
          {errors.password && errors.password.type === "pattern" && (
            <p className="errorMsg text-colors-red">Password is not valid</p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p className="errorMsg text-colors-red">
              Password should be at-least 8 characters.
            </p>
          )}
        </div>
        <div></div>

        <div className="">
          <label>Confirm Password</label>
          <br />
          <input
            name="confirmPassword"
            type="password"
            {...register("confirmPassword")}
            className={` ${
              errors.confirmPassword ? "is-invalid" : ""
            } border-2 py-1 px-5 rounded-md`}
          />
          <div className="invalid-feedback ">
            {errors.confirmPassword?.message}
          </div>
        </div>
        <di>
          <label>Role</label>
          <br />
          <select
            className=" border-2 border-colors-lacivert rounded-md py-1 px-5"
            {...register("role_id")}
          >
            <option value="customer">customer</option>
            <option value="store">store</option>
            <option value="admin">admin</option>
          </select>
        </di>
        <div>
          <button
            className=" bg-colors-lacivert px-5 py-2 text-colors-white rounded-md mt-4 mb-4"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
