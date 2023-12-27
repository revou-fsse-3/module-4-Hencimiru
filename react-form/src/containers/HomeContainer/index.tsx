
import { useFormik } from "formik";
import { Button, Input, Text, Card } from "../../components"
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
    const forMik1 = useFormik({
        initialValues: {
            name:"",
            email:"",
            birth:"",
            
        },
        
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm();
            setStep(1)
            // alert("Registration successful!")
            handleNext()
    },
    validationSchema: 
            yup.object({
            name: yup.string().required('Please enter your name'),
            email: yup.string().email('Invalid email format, ex: henci@gmail.com').required('Please enter your email'),
            birth: yup.date().max(new Date(),'Please enter your date of birth').required('Date of Birth is required, ex: 12-10-1998')
        }),
    });

    const forMik2 = useFormik({
        initialValues: {
            address:"",
            city:"",
            state:"",
            zip:"",
        },
        
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm();
            // setStep(1)
            // alert("Registration successful!")
            handleNext()
    },
    validationSchema: 
            yup.object({
            address: yup.string().required('Please enter your address.'),
            city: yup.string().min(4,'"Invalid city name. Please enter a valid city.').required('Please enter your city'),
            state: yup.string().min(4,'Please enter the correct state').required('Please enter your state'),
            zip: yup.string().matches(/^\d{5}$/,'Invalid ZIP code. Please enter a valid ZIP code.').required('Please enter your ZIP code.'),
        })
    })
    const forMik3 = useFormik({
        initialValues: {
            username:"",
            password:"",
        },
        
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm();
            alert("Registration successful!")
    },
    validationSchema: 
            yup.object({
            username: yup.string().min(8,'Username should be at least 8 characters').required('Please enter your username'),
            password: yup.string()
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
            .required('No password provided.') 
        })
})
    return (
        <Card border>
            {step === 1 && (
            <form onSubmit={forMik1.handleSubmit}>
                <div>
                <div>
                    <Text className="text-fuchsia-700 text-center text-2xl p-4">{'Personal Information'}</Text>
                    <Text>{'Name'}</Text>
                    <Input
                    className="border-solid border-2 border-yellow-950"
                    name="name"
                    value={forMik1.values.name}
                    onChange={forMik1.handleChange('name')}
                    />
                    {forMik1.errors.name && <Text>{forMik1.errors.name}</Text>}
                </div>
                <div>
                    <Text>{'Email'}</Text>
                    <Input
                    className="border-solid border-2 border-yellow-950"
                    name="email"
                    value={forMik1.values.email}
                    onChange={forMik1.handleChange('email')}
                    />
                    {forMik1.errors.email && <Text>{forMik1.errors.email}</Text>}
                </div>
                <div>
                <Text>{'Date Of Birth'}</Text>
                <Input
                    className="border-solid border-2 border-yellow-950"
                    name="birth"
                    type="date"
                    value={forMik1.values.birth}
                    onChange={forMik1.handleChange('birth')}
                    />
                    {forMik1.errors.birth && <Text>{forMik1.errors.birth}</Text>}
                </div>
                </div>
                <div className="flex justify-center">
                {step > 1 && <Button label={'Previous'} onClick={handlePrevious}/>}
                {(<Button label={'Next'} />
                )}
                </div>
                </form>
            )}
            
            {step === 2 && (
                <form onSubmit={forMik2.handleSubmit}>
                <div>
                <Text className="text-fuchsia-700 text-center text-2xl p-4">{'Address Information'}</Text>
                <div>
                <Text>{'Street Address'}</Text>
                <Input
                    className="border-solid border-2 border-yellow-950"
                    name="address"
                    value={forMik2.values.address}
                    onChange={forMik2.handleChange('address')}
                />
                {forMik2.errors.address && <Text>{forMik2.errors.address}</Text>}
                </div>
                <div>
                    <Text>{'City'}</Text>
                        <Input
                        className="border-solid border-2 border-yellow-950"
                        name="city"
                        value={forMik2.values.city}
                        onChange={forMik2.handleChange('city')}
                        />
                    {forMik2.errors.city && <Text>{forMik2.errors.city}</Text>}
                </div>
                <div>
                    <Text>{'State'}</Text>
                        <Input
                        className="border-solid border-2 border-yellow-950"
                        name="state"
                        value={forMik2.values.state}
                        onChange={forMik2.handleChange('state')}
                        />
                    {forMik2.errors.state && <Text>{forMik2.errors.state}</Text>}
                </div>
                <div>
                    <Text>{'Zip Code'}</Text>
                        <Input
                        className="border-solid border-2 border-yellow-950"
                        name="zip"
                        value={forMik2.values.zip}
                        onChange={forMik2.handleChange('zip')}
                        />
                    {forMik2.errors.zip && <Text>{forMik2.errors.zip}</Text>}
                </div>
                </div>
                <div className="flex justify-center">
                {step > 1 && <Button label={'Previous'} onClick={handlePrevious}/>}
                { (<Button label={'Next'} />
                )}
                </div>
                </form>
            )}

            {step === 3 && (
                <form onSubmit={forMik3.handleSubmit}>
                <div>
                    <Text className="text-fuchsia-700 text-center text-2xl p-4">{'Account Information'}</Text>
                    <div>
                    <Text>{'Username'}</Text>
                        <Input
                        className="border-solid border-2 border-yellow-950"
                        name="username"
                        value={forMik3.values.username}
                        onChange={forMik3.handleChange('username')}
                    />
                    {forMik3.errors.username && <Text>{forMik3.errors.username}</Text>}
                </div>
                <div>
                    <Text>{'Password'}</Text>
                    <Input
                        className="border-solid border-2 border-yellow-950"
                        type="password"
                        value={forMik3.values.password}
                        onChange={forMik3.handleChange('password')}
                    />
                    {forMik3.errors.password && <Text>{forMik3.errors.password}</Text>}
                </div>
            </div>
            <div className="flex justify-center">
                {step > 1 && <Button label={'Previous'} onClick={handlePrevious}/>}
                {step === 3 ? (<Button label={'Submit'} type="submit" />) : (<Button label={'Next'} />
                )}
            </div>
            </form>
            )}

        </Card>
    );
}  

export default HomeContainer