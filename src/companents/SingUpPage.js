import React, { useState } from "react";
import { set, useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../Axios/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
export default function App() {
  const history = useHistory();
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    name: Yup.string()
      .required("Name is a required field")
      .min(3, "Name must be at least 3 characters"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*\W).{8,}$/,
        "Your password should include one lower case one upper case one number and one symbol"
      ),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
    storename: Yup.string().min(3, "Store name must be at least 3 characters"),
    bank_account: Yup.string().matches(
      /^(?:((?:IT|SM)\d{2}[A-Z]{1}\d{22})|(NL\d{2}[A-Z]{4}\d{10})|(LV\d{2}[A-Z]{4}\d{13})|((?:BG|GB|IE)\d{2}[A-Z]{4}\d{14})|(GI\d{2}[A-Z]{4}\d{15})|(RO\d{2}[A-Z]{4}\d{16})|(MT\d{2}[A-Z]{4}\d{23})|(NO\d{13})|((?:DK|FI)\d{16})|((?:SI)\d{17})|((?:AT|EE|LU|LT)\d{18})|((?:HR|LI|CH)\d{19})|((?:DE|VA)\d{20})|((?:AD|CZ|ES|MD|SK|SE)\d{22})|(PT\d{23})|((?:IS)\d{24})|((?:BE)\d{14})|((?:FR|MC|GR)\d{25})|((?:PL|HU|CY)\d{26}))$/,
      "You must be enter valid IBAN number"
    ),
    tax_no: Yup.string().matches(/^T\d{4}V\d{6}$/, "Tax no is not valid"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const [registerMode, setRegisterMode] = React.useState("3");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const roles = useSelector((store) => store.user.role_id);
  const [availableRoles, setAvailableRoles] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = (data) => {
    console.log("form submit", data);

    const postData = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: data.role_id,
    };

    if (data.role_id === "2") {
      postData.store = {
        name: data["storename"],
        tax_no: data["tax_no"],
        bank_account: data["bank_account"],
      };
    }
    console.log("post data=>", postData);
    axiosInstance
      // .try(setIsSubmitting(true))
      .post("/signup", postData)
      .then((response) => {
        console.log("Signup successful=>", response.postData);
        toast.success(
          "You need to click link in email to activate your account!"
        );

        history.push("/previous-page", {});
      })

      .catch((error) => {
        console.error("Signup failed=>", error);
      })
      .finally(setIsSubmitting(false));
  };

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
            onChange={(e) => {
              setRegisterMode(e.target.value);
              setAvailableRoles("role_id", e.target.value);
            }}
          >
            <option value="3">customer</option>
            <option value="2">store</option>
            <option value="1">admin</option>
          </select>
        </div>
        <div className=" flex- flex-col mt-3">
          <label>Name</label>
          <br />
          <div>
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
                  name="name"
                  {...register("storename")}
                />
                <p className="text-colors-red"> {errors.storename?.message}</p>
              </div>
              <div className=" gap-3">
                <label>Store Tax ID </label>
                <br />
                <input
                  className=" border-2 border-colors-lacivert rounded-md py-1 px-5 gap-3"
                  type="text"
                  name="tax_no"
                  {...register("tax_no")}
                />
                <p className="text-colors-red"> {errors.tax_no?.message}</p>
              </div>
              <div className=" gap-3">
                <label>Store Bank Account</label>
                <br />
                <input
                  className=" border-2 border-colors-lacivert rounded-md py-1 px-5 gap-3"
                  type="text"
                  name="bank_account"
                  {...register("bank_account")}
                />
                <p className="text-colors-red">
                  {" "}
                  {errors.bank_account?.message}
                </p>
              </div>
            </div>
          )}
        </div>

        <div>
          <button
            className=" bg-colors-lacivert px-5 py-2 text-colors-white rounded-md mt-4 mb-4"
            type="submit"
            disabled={isSubmitting}
          >
            {" "}
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
