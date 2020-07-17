import React from 'react';
import { connect } from "react-redux";
import NavBar from '../container/NavBar';
import {Link } from 'react-router-dom';


// import axios from 'axios';
// for uploading image
    // const upload = (id,img) => {
    //     let formdata = new FormData();
    //     formdata.append('id' , id);
    //     formdata.append('image' , img);
    //     axios.post(`http://127.0.0.1:8000/api/product/update/`,
    //     formdata,
    //     {
    //     headers : {
    //         'Content-Type': 'multipart/form-data'
    //       }
    //     }
    //     )
    //     .then(res =>{
    //             console.log(res);
    //     })    
    // }
    

function RoomDetail(props) {
    
    const id = props.match.params.id;
    const arrayData = JSON.parse(localStorage.getItem('data'));
    const d = arrayData.filter(d=>d.id == id)
    const data  = d[0];

    const size = data.images.length;

    const ar = []
    for (let i = 0 ; i < size ; i ++){
        ar[i]=i;
    }

    const targetData = ar.map((a ,index) => 
        <li data-target = "#carouselExampleIndicators" 
        data-slide-to = {a} class="active"></li>
    )

    const images = data.images.map((img,index)=> {
        if (index == 0){
            return   <div class="carousel-item active">
                        <img class="d-block w-100" 
                        src={img.image} 
                        data-src="holder.js/900x400?theme=social" 
                        alt="First slide" />
                    </div>
        }
        else {
            return  <div class="carousel-item">
                        <img class="d-block w-100" 
                        src={img.image}
                        data-src="holder.js/900x400?theme=industrial" 
                        alt="Second slide"/>
                    </div>
        }
    })


    // const handleClick = () => {
    //     console.log(data.category.name)
    //     const promtdata = prompt('Amount should be greater than 100')
    //     const integer   = parseInt(promtdata)
    //     const value     = Number.isInteger(integer)
    //     const category  = data.category.name
    //     // console.log(value)
        
    //     if (value){
    //         if(category === 'Deluxe'){
    //             if (integer >= 100 && integer <= 1500){
    //                 alert('Its Hundred');
    //             }
    //             else{
    //                 alert('Not Allowed')
    //             }
    //         }
    //         if(category === 'Normal'){
    //             if (integer >= 100 && integer <= 1000){
    //                 alert('Normal');
    //             }
    //             else{
    //                 alert('Not Allowed')
    //             }
    //         }
            
    //     }
       
    // }
 
    return(
        <div>
            <div>
                <NavBar />
             </div>
            
            <div id="carouselExampleIndicators" 
            class="carousel slide" data-ride="carousel">
                
                <ol class="carousel-indicators">
                    {targetData}
                </ol>

                <div class="carousel-inner" role="listbox">
                    {images}
                </div>
                
                <a class="carousel-control-prev" 
                href="#carouselExampleIndicators" 
                role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" 
                    aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" 
                href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" 
                    aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <div className = "list-group" >
            <Link to ={`/menu/${id}/booking/`} >
               
            <div class="shadow-lg p-3 mb-5 bg-white rounded">Click For Booking</div>

            </Link>

                <p className = "list-group-item l`ist-group-item-action list-group-item-secondary">
                    {data.name}
                </p>
                <p className = "list-group-item list-group-item-action list-group-item-secondary">
                     It is a  {data.category.name} room
                </p>
                <p className = "list-group-item list-group-item-action list-group-item-secondary">
                    It's price is {data.category.price} 
                </p>
             </div>
             
           
        </div>
        
    );
}


const mapStateToProps = state => {
    return {
        detail : state.item.data
    };
}



// const mapDispatchToProps =  dispatch => {
//     return {
//     login : (username,password) => dispatch(authLogin(username,password))       
//     };
// }


export default connect(
    mapStateToProps,
    // mapDispatchToProps
  )(RoomDetail);
