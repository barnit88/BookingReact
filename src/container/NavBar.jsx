import React,{useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import {authLogout} from '../store/action/loginAuth'


function NavBar(props) {
    const data = localStorage.getItem('access')
    var condition;
    const [s,ss] = useState(true)
    
    const conditonCheck = () => {
        return condition = data?true:false;
    }
   

    useEffect(() => {
        conditonCheck();

    },[data])

    return (
        <div>
        <div>
            {conditonCheck()}
        </div>
        
        <nav className="navbar fixed-top navbar-dark bg-info d-flex flex-row-reverse">
            
            <ul className="nav nav-pills">
                <Link to ="/">
                    <li className="nav-item">
                        <button className="btn btn-outline-dark">
                            Home
                        </button>
                    </li>
                </Link>
             
                <Link to = "/menu/">
                    <li className="nav-item">
                        <button className="btn btn-outline-dark">
                            Menu
                        </button>
                    </li>
                </Link>
                
                    {
                        condition
                        ?
                        <li className="nav-item">
                            <Link to ="/">
                                <button className="btn btn-outline-dark"
                                onClick={()=>props.logout()} >
                                    LogOut</button>
                            </Link>
                        </li>
                        :
                        <li className="nav-item">
                            <Link to ="/login">
                                <button className="btn btn-outline-dark">
                                    Login</button>
                            </Link>
                        </li>
                    }
            
            </ul> 
        </nav>
        </div>
    );
}


const mapStateToProps = state => {
    return {
        token       : state.login.token
    };
}


const mapDispatchToProps =  dispatch => {
    return {
    logout : () => dispatch(authLogout()),
           
    };
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavBar);
// export default NavBar;
