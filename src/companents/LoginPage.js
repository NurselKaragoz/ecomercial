import React, { useState } from "react";
import { set, useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

import * as Yup from "yup";

export default function App() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    name: Yup.string()
      .required("Name is a required field")
      .min(3, "Name must be at least 3 characters"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        "Olmadı yar"
      ),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const [registerMode, setRegisterMode] = React.useState("1");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = (data) => {
    console.log("form submit", data);
  };

  // axios
  //   .get("https://workinteck-fe-final.onrender.com")
  //   .then(function (response) {
  //     console.log(response);
  //   });

  return (
    <div className="gap-5 flex flex-col">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Role</label>
          <br />
          <select
            className=" border-2 border-colors-lacivert rounded-md py-1 px-5"
            value={registerMode}
            {...register("role_id")}
            onChange={(e) => setRegisterMode(e.target.value)}
          >
            <option value="1">customer</option>
            <option value="2">store</option>
            <option value="3">admin</option>
          </select>
        </div>
        <div className=" flex- flex-col gap-3">
          <label>Name</label>
          <div>
            <br />
            <input
              className="border-2 border-colors-lacivert rounded-md py-1 px-5"
              type="text"
              name="name"
              {...register("name")}
            />

            <p className="text-colors-red"> {errors.name?.message}</p>
          </div>
        </div>
        <div className=" gap-3">
          <label>Email</label>
          <br />
          <input
            className=" border-2 border-colors-lacivert rounded-md py-1 px-5 gap-3"
            type="text"
            name="email"
            {...register("email")}
          />

          <p className="text-colors-red"> {errors.email?.message}</p>
        </div>
        <div className="">
          <label>Password</label>
          <br />
          <input
            name="password"
            type="password"
            {...register("password")}
            className={` ${
              errors.password ? "is-invalid" : ""
            } border-2 border-colors-lacivert rounded-md py-1 px-5 `}
          />

          <p className="text-colors-red"> {errors.password?.message}</p>
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
        <div>
          {registerMode === "2" && (
            <div>
              <div className=" gap-3">
                <label>Store Name</label>
                <br />
                <input
                  className=" border-2 border-colors-lacivert rounded-md py-1 px-5 gap-3"
                  type="text"
                  name="store"
                  {...register("store")}
                />
              </div>
              <div className=" gap-3">
                <label>Store Tax ID </label>
                <br />
                <input
                  className=" border-2 border-colors-lacivert rounded-md py-1 px-5 gap-3"
                  type="number"
                  name="tax_no"
                />
              </div>
              <div className=" gap-3">
                <label>Store Bank Account</label>
                <br />
                <input
                  className=" border-2 border-colors-lacivert rounded-md py-1 px-5 gap-3"
                  type="number"
                  name="bank_account"
                />
              </div>
            </div>
          )}
        </div>

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
