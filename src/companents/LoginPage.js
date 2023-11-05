import { useForm } from "react-hook-form";
function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email</label>
        <br />

        <input
          className=" border-2 border-colors-lacivert rounded-md py-1 px-5"
          type="text"
          {...register("email", { required: true })}
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
