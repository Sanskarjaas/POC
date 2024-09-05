export interface EmployeeState{
    firstName: string;
    lastName: string;
    Dob: Dob.toISOString().split('T')[0];
    gender:string;
    phoneNumber:number;
    emailAddress:string;
    fullAddress:string;
    Department:string; 
    departmentHead: string,
    numberOfEmployees: number,
    location: string,
    loading:boolean;
    error:string|null;
}