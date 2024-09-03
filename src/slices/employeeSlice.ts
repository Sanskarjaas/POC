import {createSlice,PayloadAction} from '@reduxjs/toolkit'; 
import { EmployeeState } from '../interface/employee';
import { AppThunk } from '../store/store';

const initialState:EmployeeState={
    firstName: '',
    lastName: '',
    Dob: new Date(),
    gender:'',
    phoneNumber :0,
    emailAddress:'',
    fullAddress:'',
    Department:'',
    departmentHead: '',
    numberOfEmployees: 0,
    location: '',
    loading: false,
    error: null
}


const employeeSlice=createSlice({
    name:'employee',
    initialState,
    reducers:{
        setEmployeeData: (state, action: PayloadAction<{firstName: string; lastName: string; Dob: Date; gender: string; phoneNumber: number; emailAddress: string; fullAddress: string; }>) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.Dob = action.payload.Dob;
            state.gender = action.payload.gender;
            state.phoneNumber = action.payload.phoneNumber;
            state.emailAddress = action.payload.emailAddress;
            state.fullAddress = action.payload.fullAddress;
            //  return {...state, ...action.payload};
            
        },
        setDepartmentData: (state, action: PayloadAction<Pick<EmployeeState, 'Department' | 'departmentHead' | 'numberOfEmployees' | 'location'>>) => {
            const { Department, departmentHead, numberOfEmployees, location } = action.payload;
            state.Department = Department;
            state.departmentHead = departmentHead;
            state.numberOfEmployees = numberOfEmployees;
            state.location = location;
        },
        clearData: (state) => {
            state.firstName = '';
            state.lastName = '';
            state.Dob = new Date();
            state.gender = '';
            state.phoneNumber = 0;
            state.emailAddress = '';
            state.fullAddress = '';
            state.Department = '';
            state.departmentHead = '';
            state.numberOfEmployees = 0;
            state.location = '';
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        }
    }
});

export const {setEmployeeData,setDepartmentData,clearData,setLoading,setError}=employeeSlice.actions;

export const submitEmployeeData = (): AppThunk => async (dispatch, getState) => {
    dispatch(setLoading(true));
    const {  firstName, lastName, Dob, gender, phoneNumber, emailAddress, fullAddress, Department,departmentHead, numberOfEmployees,location} = getState().employee;

    try {
        // Simulate an API call, replace with actual API integration
        const response = await fetch('https://employeeapi20240828231706.azurewebsites.net/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName,
                lastName,
                Dob,
                gender,
                phoneNumber,
                emailAddress,
                fullAddress,
                Department,
                departmentHead,
                numberOfEmployees,
                location
            }),
        });
        if (!response.ok) {
            throw new Error('Failed to submit data');
        }
        dispatch(clearData());
        dispatch(setLoading(false));
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An error occurred';
        dispatch(setError(errorMessage));
        dispatch(setLoading(false));
    }
};


export default employeeSlice.reducer;