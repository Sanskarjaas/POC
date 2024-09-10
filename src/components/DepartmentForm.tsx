import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { AppDispatch, RootState } from '../store/store';
import { setDepartmentData, submitEmployeeData } from '../slices/employeeSlice';
import { FormContainer,FormField,FormLabel,BackButton,FormButton } from '../FormStyles';

interface DepartmentFormValues {
    Department: string;
    departmentHead: string;
    numberOfEmployees: number;
    

   
}

interface DepartmentFormProps {
    setStep: (step: number) => void;
}

const DepartmentForm: React.FC<DepartmentFormProps> = ({ setStep }) => {
    const dispatch :AppDispatch= useDispatch();
    const employee = useSelector((state: RootState) => state.employee);

    if (!employee.firstName || !employee.lastName) {
        setStep(1);
        return null;
    }

    const initialValues: DepartmentFormValues = {
        Department: employee.Department,
        departmentHead: employee.departmentHead,
        numberOfEmployees: employee.numberOfEmployees
   
       
    };

    const validationSchema = Yup.object({
        Department: Yup.string().required('Department Name is required'),
        departmentHead: Yup.string().required('Department Head is required'),
        numberOfEmployees: Yup.number().required('Number of Employees is required').typeError('Number of Employees must be a number'),

       
    });
    const handleSubmit = (values: DepartmentFormValues) => {
        console.log('submitting',values);
        dispatch(setDepartmentData(values));
        dispatch(submitEmployeeData());
        setStep(1); 
    };


    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}
        >
            {({ isSubmitting }) => (
                <FormContainer>
                    <h1>Please fill the Department Details</h1>
                    <FormField>
                        <FormLabel htmlFor="Department">Department Name</FormLabel>
                        <Field id="Department" name="Department" />
                        <ErrorMessage name="Department" component="div" />
                    </FormField>
                    <FormField>
                        <FormLabel htmlFor="departmentHead">Department Head</FormLabel>
                        <Field id="departmentHead" name="departmentHead" />
                        <ErrorMessage name="departmentHead" component="div" />
                    </FormField>
                    <FormField>
                        <FormLabel htmlFor="numberOfEmployees">Number of Employees</FormLabel>
                        <Field id="numberOfEmployees" name="numberOfEmployees" type="number" />
                        <ErrorMessage name="numberOfEmployees" component="div" />
                    </FormField>

                    <BackButton type="button" onClick={() => setStep(1)}>
                        Back
                    </BackButton>
                    <FormButton type="submit" disabled={isSubmitting}>
                        Submit
                    </FormButton>
                </FormContainer>
            )}
        </Formik>
    );
};

export default DepartmentForm;
