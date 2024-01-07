import { useFormik } from "formik";
import * as yup from "yup";
import { Button, Input, Text } from "../../components";
import toast from "react-hot-toast";

const register = () => {
  const forMik1 = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    onSubmit: async (values, { resetForm }) => {
      const response = await fetch(
        "https://mock-api.arikmpt.com/api/user/register",
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "content-type": "application/json",
          },
        }
      );
      if (response.ok) {
        toast.success("Register Succes");
      }
      else {
        toast.error("Register Error")
      }
      console.log(response);
      resetForm();
      // alert("Registration successful!")
    },
    validationSchema: yup.object({
      name: yup.string().required("Please enter your name"),
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
            {"Register"}
          </Text>
          <Text>{"Name"}</Text>
          <Input
            className="border-solid border-2 border-yellow-950"
            name="name"
            value={forMik1.values.name}
            onChange={forMik1.handleChange("name")}
          />
          {forMik1.errors.name && <Text>{forMik1.errors.name}</Text>}
        </div>
        <div>
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
      <div className="flex justify-center">{<Button label={"Register"} />}
  </div>
    </form>
  );
};

export default register;
