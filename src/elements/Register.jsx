import React, {useState ,useEffect } from 'react';
import NavBar from '../container/NavBar'
import './register.css';
// import { Link  ,useHistory} from 'react-router-dom';
import { connect } from "react-redux";
import {authRegister} from '../store/action/loginAuth'
import { useHistory} from 'react-router-dom';



function Register(props) {

    const [name,setName] = useState('');
    const [contact,setContact] = useState('');
    const [gender,setGender] = useState('');
    const [email,setEmail] = useState('');
    const [password ,setPassword] = useState('');
    const [confirm , setConfirm] = useState('');

    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.register(name,contact,gender,email,password)
    }

    
    useEffect(() => {
        const redirect = () => {
            const token = localStorage.getItem('access')
            if (token) {
                history.push('/menu/')
            }   
        }
        redirect()    
    },[props,history])


    return (
        <div>
            <div>
                <NavBar />
            </div>

            <div className ="loginform" >  
            
                <h1>Register</h1>          
            
                <form onSubmit={handleSubmit}>
                    
                    <div className="form-group">
                    
                        <label htmlFor="formName">Name</label>
                        <input type="text" className="form-control" 
                        id="formName" 
                        pattern="[A-Za-z\s]+"
                        value = {name}
                        onChange={(e)=>{setName(e.target.value)}}
                        placeholder="Full Name" />
                    
                    </div>
                    
                    <div className="form-group">
                    
                        <label htmlFor="formContact">Contact</label>
                        <input type="text" className="form-control" 
                        id="formContact" 
                        pattern="[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]"
                        value = {contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="Contact" />
                    
                    </div>
                    
                    <div className="form-group ">
                    
                        <label htmlFor ='gender'>
                            Gender
                        </label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type = "radio" name = "gender" 
                        id  = "male"  value={gender} 
                        onChange={(e) => setGender('M')}
                        />
                        <label htmlFor = "male">&nbsp;Male</label>

                        &nbsp;&nbsp;&nbsp;
                        <input type = "radio" name = "gender" 
                        id = "female" value={gender} 
                        onChange={(e) => setGender('F')}
                        />
                        <label htmlFor = "female">&nbsp;Female</label>
                    
                    </div>

                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Email</label>
                        <input type="email" className="form-control" id="formGroupExampleInput" 
                        value = {email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        placeholder="Email" />
                    </div>
                    
                    <div className="form-group">
                    
                        <label htmlFor="formPassword">Password</label>
                        <input type="password" className="form-control" 
                        id="formPassword" 
                        value = {password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password" />

                    </div>

                    <div className="form-group">
                    
                        <label htmlFor="formConfirmPassword">Password</label>
                        <input type="password" className="form-control"         
                        id="formConfirmPassword" 
                        value = {confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                        placeholder="Confirm Password" />
                    
                    </div>
                    
                    <div>
                    
                    <button type="submit" 
                    className="btn btn-outline-warning">
                        Sign Up
                    </button> 
                    
                    </div>
            
                </form>
            
            </div>
        
        </div>
    );
}


const mapStateToProps = state => {
    return {
        loading : state.login.loading,
        error : state.login.error,
        token : state.login.token
    };
}


const mapDispatchToProps =  dispatch => {
    return {
    register : (name,contact,gender,email,password) =>
        dispatch(authRegister(name,contact,gender,email,password))       
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Register);

