
import { Button, Input, Text, Card } from "../../components"
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from"yup";


const HomeContainer = () => {
    const [step, setStep] = useState<number>(1);

    const handleNext = () => {
        if (step === 3){
            return;
        }
        setStep((prevState) => prevState + 1);
    };

    const handlePrevious = () => {
        if (step === 1) {
            return;
        }
        setStep((prevState)=> prevState - 1)
    }

    const forMik = useFormik({
        initialValues: {
            name:"",
            email:"",
            birth:"",
            address:"",
            city:"",
            state:"",
            zip:"",
            username:"",
            password:"",
        },

        
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm(),
            alert("Registration successful!")
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().email('Invalid email format, ex: henci@gmail.com').required('Email is required'),
            birth: yup.date().max(new Date(),'Please enter your date of birth').required('Date of Birth is required, ex: 12-10-1998'),
            address: yup.string().required('Please enter your address.'),
            city: yup.string().min(4,'"Invalid city name. Please enter a valid city.').required('Please enter your city'),
            state: yup.string().min(4,'Please enter the correct state').required('Please enter your state'),
            zip: yup.string().matches(/^\d{5}$/,'Invalid ZIP code. Please enter a valid ZIP code.').required('Please enter your ZIP code.'),
            username: yup.string().min(8,'Username should be at least 8 characters').required('Please enter your username'),
            password: yup.string()
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
            .required('No password provided.') 
        })
    });
    return (
        <Card border>
            <form onSubmit={forMik.handleSubmit}>
            {step === 1 && (
                <div>
                <div>
                    <Text className="text-fuchsia-700 text-center text-2xl p-4">{'Personal Information'}</Text>
                    <Text>{'Name'}</Text>
                    <Input
                    className="border-solid border-2 border-yellow-950"
                    name="name"
                    value={forMik.values.name}
                    onChange={forMik.handleChange('name')}
                    />
                    {forMik.errors.name && <Text>{forMik.errors.name}</Text>}
                </div>
                <div>
                    <Text>{'Email'}</Text>
                    <Input
                    className="border-solid border-2 border-yellow-950"
                    name="email"
                    value={forMik.values.email}
                    onChange={forMik.handleChange('email')}
                    />
                    {forMik.errors.email && <Text>{forMik.errors.email}</Text>}
                </div>
                <div>
                <Text>{'Date Of Birth'}</Text>
                <Input
                    className="border-solid border-2 border-yellow-950"
                    name="birth"
                    type="date"
                    value={forMik.values.birth}
                    onChange={forMik.handleChange('birth')}
                    />
                    {forMik.errors.birth && <Text>{forMik.errors.birth}</Text>}
                </div>
                </div>
            )}
            {step === 2 && (
                <div>
                <Text className="text-fuchsia-700 text-center text-2xl p-4">{'Address Information'}</Text>
                <div>
                <Text>{'Street Address'}</Text>
                <Input
                    className="border-solid border-2 border-yellow-950"
                    name="address"
                    value={forMik.values.address}
                    onChange={forMik.handleChange('address')}
                />
                {forMik.errors.address && <Text>{forMik.errors.address}</Text>}
                </div>
                <div>
                    <Text>{'City'}</Text>
                        <Input
                        className="border-solid border-2 border-yellow-950"
                        name="city"
                        value={forMik.values.city}
                        onChange={forMik.handleChange('city')}
                        />
                    {forMik.errors.city && <Text>{forMik.errors.city}</Text>}
                </div>
                <div>
                    <Text>{'State'}</Text>
                        <Input
                        className="border-solid border-2 border-yellow-950"
                        name="state"
                        value={forMik.values.state}
                        onChange={forMik.handleChange('state')}
                        />
                    {forMik.errors.state && <Text>{forMik.errors.state}</Text>}
                </div>
                <div>
                    <Text>{'Zip Code'}</Text>
                        <Input
                        className="border-solid border-2 border-yellow-950"
                        name="zip"
                        value={forMik.values.zip}
                        onChange={forMik.handleChange('zip')}
                        />
                    {forMik.errors.zip && <Text>{forMik.errors.zip}</Text>}
                </div>
                </div>
            )}
            {step === 3 && (
                <div>
                    <Text className="text-fuchsia-700 text-center text-2xl p-4">{'Account Information'}</Text>
                    <div>
                    <Text>{'Username'}</Text>
                        <Input
                        className="border-solid border-2 border-yellow-950"
                        name="username"
                        value={forMik.values.username}
                        onChange={forMik.handleChange('username')}
                    />
                    {forMik.errors.username && <Text>{forMik.errors.username}</Text>}
                </div>
                <div>
                    <Text>{'Password'}</Text>
                    <Input
                        className="border-solid border-2 border-yellow-950"
                        name="password"
                        value={forMik.values.password}
                        onChange={forMik.handleChange('password')}
                    />
                    {forMik.errors.password && <Text>{forMik.errors.password}</Text>}
                </div>
            </div>
            )}
            <div className="flex justify-center">
                {step > 1 && <Button label={'Previous'} onClick={handlePrevious}/>}
                {step === 3 ? (<Button label={'Submit'} type="submit" />) : (<Button label={'Next'} onClick={handleNext} />
                )}
            </div>
        </form>
        </Card>
    );
}      
export default HomeContainer