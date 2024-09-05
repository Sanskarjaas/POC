import React from 'react';
import { Formik,Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { setEmployeeData } from '../slices/employeeSlice';
import { FormContainer, FormLabel,FormButton, FormField } from '../FormStyles';
import { RootState } from '../store/store';


interface EmployeeFormValues {
    firstName: string;
    lastName: string;
    Dob:Date;
    gender:string;
    phoneNumber:string;
    emailAddress:string;
    fullAddress:string;
   
}

interface EmployeeFormProps {
    setStep: (step: number) => void;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({ setStep }) => {
    const dispatch = useDispatch();
    const employee=useSelector((state:RootState)=>state.employee);

    const initialValues: EmployeeFormValues = {
        firstName: employee.firstName,
        lastName: employee.lastName,
        Dob: employee.Dob,
        gender: employee.gender,
        phoneNumber: employee.phoneNumber,
        emailAddress: employee.emailAddress,
        fullAddress: employee.fullAddress,
      
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required('First Name is required *'),
        lastName: Yup.string().required('Last Name is required *'),
        Dob: Yup.date().required('Date of Birth is required *'),
        gender: Yup.string().required('Gender is required *'),
        phoneNumber: Yup.number().required('Phone Number is required *').typeError('Phone Number must be a number'),
        emailAddress: Yup.string().email('Invalid email address').required('Email Address is required *'),
        fullAddress: Yup.string().required('Full Address is required *'),
       
    });

    return (
       
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
                dispatch(setEmployeeData(values));
                setStep(2);
            }}
            enableReinitialize={true}
        >
            {({ isSubmitting }) => (

                <FormContainer>
                    <h1>Please Fill the Form</h1>
                    <FormField>
                        <FormLabel htmlFor="firstName">First Name</FormLabel>
                        <Field id="firstName" name="firstName" />
                        <ErrorMessage name="firstName" component="div" />
                    </FormField>
                    <FormField>
                        <FormLabel htmlFor="lastName">Last Name</FormLabel>
                        <Field id="lastName" name="lastName" />
                        <ErrorMessage name="lastName" component="div" />
                    </FormField>
                    <FormField>
                        <FormLabel htmlFor="Dob">Date of Birth</FormLabel>
                        <Field id="Dob" name="Dob" type="date" />
                        <ErrorMessage name="Dob" component="div" />
                    </FormField>
                    <FormField>
                        <FormLabel htmlFor="gender">Gender</FormLabel>
                        <Field id="gender" name="gender" />
                        <ErrorMessage name="gender" component="div" />
                    </FormField>
                    <FormField>
                        <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
                        <Field id="phoneNumber" name="phoneNumber"  />
                        <ErrorMessage name="phoneNumber" component="div" />
                    </FormField>
                    <FormField>
                        <FormLabel htmlFor="emailAddress">Email Address</FormLabel>
                        <Field id="emailAddress" name="emailAddress" type="email" />
                        <ErrorMessage name="emailAddress" component="div" />
                    </FormField>
                    <FormField>
                        <FormLabel htmlFor="fullAddress">Full Address</FormLabel>
                        <Field id="fullAddress" name="fullAddress" />
                        <ErrorMessage name="fullAddress" component="div" />
                    </FormField>
                    <FormButton type="submit" disabled={isSubmitting}>
                        Next
                    </FormButton>
                </FormContainer>
            )}
        </Formik>
    );
};
export default EmployeeForm;
