import React, {useState ,useEffect } from 'react';
import NavBar from '../container/NavBar';
// import Footer from '../container/Footer';
import './login.css';
import { Link  ,useHistory} from 'react-router-dom';
import { connect } from "react-redux";
import {authLogin} from '../store/action/loginAuth'

function Login(props) {
    
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [validate , setValidate] = useState(false);

    let history = useHistory();

    useEffect(() => {

        const token = localStorage.getItem('access');
        const redirect = () => {
            if (token) {
                history.push('/menu/')
            } 
        }
        redirect(); 
        
    },[history,props ])


    const handleSubmit = e => {
        e.preventDefault();
        if (email ==='' || password === '') {
            if (validate === false){
                setValidate(!validate);
            }
        }
        else{      
            props.login(email,password);
            if (validate === true){
                setValidate(!validate);
            }
        }
    };


    return(
        <div>

        <div>
            <NavBar />
        </div>
        
        <div className ="loginform" onSubmit ={handleSubmit}>            
            
            <form>
            
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Email</label>
                    <input type="email" className="form-control" id="formGroupExampleInput" 
                    value = {email}
                    onChange={(e)=>{setemail(e.target.value)}}
                    placeholder="Email" />
                 </div>
            
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Password</label>
                    <input type="password" className="form-control" id="formGroupExampleInput2" 
                    value = {password}
                    onChange={(e) => setpassword(e.target.value)}
                    placeholder="Password" />
                </div>
                
                <div>
                <button type="submit" 
                className="btn btn-outline-warning">
                    Login
                </button> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to = '/signup/'>Sign Up</Link>
                </div>
                {validate?<p>Please Try Again</p>:<p></p> }
            
            </form>
        </div>
{/*         
        <div className = "footer">
            <Footer/>
        </div>
         */}
        </div>

    )
}


const mapStateToProps = state => {
    return {
        loading     : state.login.loading,
        error       : state.login.error,
        token       : state.login.token
    };
}


const mapDispatchToProps =  dispatch => {
    return {
    login : (username,password) => dispatch(authLogin(username,password))       
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login);
