import { Button, Input, Text } from '../../components';
import * as yup from "yup";
import { useFormik } from "formik";
import toast from "react-hot-toast";

const FormCategory = () => {
    const forMik1 = useFormik({
      initialValues: {
        name: "",
       
      },
  
      onSubmit: async (values, { resetForm }) => {
        const response = await fetch(
          "https://mock-api.arikmpt.com/api/category/create",
          {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
              "content-type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        if (response.ok) {
          toast.success("Succes");
        }
        else {
          toast.error("Error")
        }
        console.log(response);
        resetForm();
        // alert("Registration successful!")
      },
      validationSchema: yup.object({
        name: yup.string().required("Please enter your name"),

      }),
    });
  
    return (
      <form onSubmit={forMik1.handleSubmit}>
        <div>
          <div>
            <Text className="text-fuchsia-700 text-center text-2xl p-4">
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
    
        </div>
        <div className="flex justify-center">{<Button label={"Submit"} />}
        </div>
      </form>
    )
  };

export default FormCategory