import { Provider } from 'react-redux';
import './App.css';
import store from './store/store';
import { useState } from 'react';
import EmployeeForm from './components/EmployeeForm';
import DepartmentForm from './components/DepartmentForm';

const App:React.FC=()=>{
  const [step ,setStep]=useState(1);
  return (
    <Provider store={store}>
    {step === 1 && <EmployeeForm setStep={setStep} />}
    {step === 2 && <DepartmentForm setStep={setStep} />}
</Provider>
  );
}


export default App;
