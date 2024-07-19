import './App.css';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import Appointment from './Page/Appointment';
import About from './Page/About';
import Login from './Page/Login';
import MainLayout from './Layout/MainLayout';
import Home from './Page/Home';
import ForgotPassword from './Page/ForgoPassword';
import Contact from './Page/Contact';
import PatientList from './Page/PatientList';
import DoctorList from './Page/DoctorList';
import PatientAccount from './Page/PatientAccount';
import AppointmentList from './Page/AppointmentList';
import PatientUpdate from './Page/PatientUpdate';
import DoctorUpdate from './Page/DoctorUpdate';
import AppointmentUpdate from './Page/AppointmentUpdate';
import Home2 from './Page/Home2';
import Layor from './layour/Layor';
import PatientListOnly from './Page/PatientListOnly';
import DoctorListOnly from './Page/DoctorListOnly';
import AppointmentOnly from './Page/AppointmentOnly';
import ForDocAppointment from './Page/ForDocAppointment';
import For_patient_app_update from './Page/For_patient_app_update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='patient_account' element={<PatientAccount/>}/>
        <Route path='forgot' element={<ForgotPassword/>}/>

        <Route path='Main' element={<MainLayout/>}>
        <Route path='contact' element={<Contact/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='Home' element={<Home/>}/>
        <Route path='doctor_list' element={<DoctorList/>}/> 
        <Route path='patient_list' element={<PatientList/>}/> 
        <Route path='appointment_list' element={<AppointmentList/>}/> 
        <Route path='patient_update' element={<PatientUpdate/>}/>
        <Route path='patient_update/:id' element={<PatientUpdate />}/>
        <Route path='doctor_update' element={<DoctorUpdate/>}/>
        <Route path='doctor_update/:id' element={<DoctorUpdate/>}/> 
        <Route path='appointment_update' element={<AppointmentUpdate />}/>
        <Route path='appointment_update/:id' element={<AppointmentUpdate />}/>

        </Route> 
        
        <Route path='layout' element={<Layor/>}>
        <Route path='Home2' element={<Home2/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='appointmentUpdate' element={<For_patient_app_update />}/>
        <Route path='appointmentUpdate/:id' element={<For_patient_app_update/>}/>
        <Route path='appointment' element= {<Appointment/>}/>      
        <Route path='appointment_list' element={<AppointmentList/>}/> 
        <Route path='patient_list_only' element={<PatientListOnly/>}/> 
        <Route path='doctor_list' element={<DoctorList/>}/> 
        <Route path='doctor_list_only' element={<DoctorListOnly/>}/>  
        <Route path='appointment_only' element={<AppointmentOnly/>}/> 
        <Route path='for_doc_appointment' element={<ForDocAppointment/>}/> 
        <Route path='appointment' element= {<Appointment/>}/>     
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

