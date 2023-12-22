
import { Button, Input, Text, Card } from "../../components"
import {useFormik} from "formik";
import * as yup from"yup";


const HomeContainer = () => {

    const forMik = useFormik({
        initialValues: {
            name:"",
            email:"",
            birth:"",
        },
        onSubmit: (values) => console.log(values),
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().email('Invalid email format, ex: henci@gmail.com').required('Email is required'),
            birth: yup.date().required('Date of Birth is required, ex: 12-10-1998'),

        })

    });

    return (
        <Card border>
            <form onSubmit={forMik.handleSubmit} >
                <div>
                    <Text>{'Name'}</Text>
                    <Input className="border-solid border-2 border-yellow-950" 
                    name="nama"
                    value={forMik.values.name}
                    onChange={forMik.handleChange("name")}
                    />

                    {
                        forMik.errors.name && (
                            <Text>{forMik.errors.name}</Text>
                        )
                    }
                </div>
                <div>
                    <Text>{'Email'}</Text>
                    <Input className="border-solid border-2 border-yellow-950" 
                    name="email"
                    value={forMik.values.email}
                    onChange={forMik.handleChange("email")}
                    />

                    {
                        forMik.errors.email && (
                            <Text>{forMik.errors.email}</Text>
                        )
                    }
                </div>
                <div>
                    <Text>{'Date Of Birth'}</Text>
                    <Input className="border-solid border-2 border-yellow-950" 
                    name="dob"
                    value={forMik.values.birth}
                    onChange={forMik.handleChange("birth")}
                    />

                    {
                        forMik.errors.birth && (
                            <Text>{forMik.errors.birth}</Text>
                        )
                    }
                </div>
                <Button label={"Submit"} type={"submit"} className="bg-green-400 opacity-100 mt-5"/>
            </form>

        </Card>
    )
}

export default HomeContainer