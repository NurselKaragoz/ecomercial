import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

import * as Yup from "yup";

export default function App() {
  const NotWork = () => {
    const [show, setShow] = React.useState(false);
    // ❌ won't get notified, need to invoke unregister
    return show && <input {...register("test")} />;
  };
  const [show, setShow] = React.useState(false);
  const { control } = useForm({ shouldUnregister: true });

  const Work = ({ control }) => {
    const { show } = useWatch({ control });
    // ✅ get notified at useEffect
    return show && <input {...register("test1")} />;
  };

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
  // axios
  //   .get("https://workinteck-fe-final.onrender.com")
  //   .then(function (response) {
  //     console.log(response);
  //   });

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
        </div>
        <div>
          <div>
            <div>
              // ✅ get notified at useForm's useEffect123
              {show && <input {...register("test2")} />}
              <NotWork />
              <Work control={control} />
            </div>{" "}
          </div>
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
