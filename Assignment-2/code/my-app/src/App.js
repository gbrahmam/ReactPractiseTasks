import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
    
return(
 
<div className="container App">
    {/* Start your React code here */
<>
  
  <div className = "picture">
    <img className = "profile" src={employee.profileImg} width="100" height="100" alt="profile photo"></img>
  </div>
  <div className = "personName">
    <h1>{employee.name}</h1>
  </div>
<div className = "profile-details">
  <label>Location</label>
  <strong>{employee.location}</strong>
</div>

<div className = "profile-details">
  <label>Blood Group</label>
  <strong>{employee.bloodGroup}</strong>
</div>

<div className = "profile-details">
  <label>Age</label>
  <strong>{employee.age}</strong>
</div>
</>
    }

</div>

);
}



export default App;
