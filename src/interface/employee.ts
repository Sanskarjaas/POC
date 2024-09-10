export interface EmployeeState{
    firstName: string;
    lastName: string;
    Dob: Date;
    gender:string;
    phoneNumber:number;
    emailAddress:string;
    fullAddress:string;
    Department:string; 
    departmentHead: string,
    numberOfEmployees: number,
    loading:boolean;
    error:string|null;
}