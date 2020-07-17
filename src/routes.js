import React ,{useState} from 'react';
import { Route ,Redirect } from 'react-router-dom';
import StartingLayout from './container/Layout'
import Login from './elements/Login'
import Register from './elements/Register'
import Room from './items/Room'
import RoomDetail from './items/RoomDetail'
import BookingForm from './items/booking'



const checkUser = localStorage.getItem('access');
// const checkUser = false;


const BaseRouter = () => (
    <div>
        <Route exact path = '/' component                   = {StartingLayout}/>
        {/* <Route exact path = '/articles/:articleID/' component = {ArticleDetail}/> */}
        <Route exact path = '/login/' component             = {Login}/>
        <Route exact path = '/signup/' component            = {Register}/>
        <Route exact path = '/menu/' component              = {Room}/>
        {
            checkUser
            ?
            <Route exact path ="/menu/:id/" component = {RoomDetail}/>
            :   
            <Redirect to = "/" /> 
        }
        {
            checkUser
            ?
            <Route exact path ="/menu/:id/booking/" component = {BookingForm}/>
            :   
            <Redirect to = "/" /> 
        }
        
    </div>    
);

export default BaseRouter;

