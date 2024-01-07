import { useFormik } from "formik";
import * as yup from "yup";
import { Button, Input, Text } from "../../components";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const go = useNavigate();

  const forMik1 = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values, { resetForm }) => {
      const response = await fetch(
        "https://mock-api.arikmpt.com/api/user/login",
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "content-type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.data.token);
        toast.success("Login Succes");
        go("/listcategory");
      } else {
        toast.error("Login Error");
      }
      console.log(response);
      resetForm();
      // alert("Registration successful!")
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Invalid email format, ex: henci@gmail.com")
        .required("Please enter your email"),
      password: yup
        .string()
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
        .required("No password provided."),
    }),
  });
  return (
    <form onSubmit={forMik1.handleSubmit}>
      <div>
        <div>
          <Text className="text-red-700 font-bold text-center text-2xl p-4">
            {"Login"}
          </Text>
          <Text>{"Email"}</Text>
          <Input
            className="border-solid border-2 border-yellow-950"
            name="email"
            value={forMik1.values.email}
            onChange={forMik1.handleChange("email")}
          />
          {forMik1.errors.email && <Text>{forMik1.errors.email}</Text>}
        </div>
        <div>
          <Text>{"Password"}</Text>
          <Input
            className="border-solid border-2 border-yellow-950"
            name="password"
            type="password"
            value={forMik1.values.password}
            onChange={forMik1.handleChange("password")}
          />
          {forMik1.errors.password && <Text>{forMik1.errors.password}</Text>}
        </div>
      </div>
      <div className="flex justify-center">
        {<Button className="w-3/4" label={"Login"} />}
        <span className="text-xs font-bold py-2 px-2 my-3">
          Don't have account?{" "}
        </span>
        <NavLink
          className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-1 px-2 my-2 mx-3 "
          to="/register"
        >
          Register Account
        </NavLink>
      </div>
    </form>
  );
};

export default Login;
