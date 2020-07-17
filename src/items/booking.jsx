import React,{useState} from 'react';
import NavBar from '../container/NavBar';
import axios from 'axios';




function BookingForm(props) {
    const id = props.match.params.id;
    const [payment,setPayment] = useState('');
    const [checkIn,setCheckIn] = useState('');
    const [checkOut,setCheckOut] = useState('');
    
            // 'Content-Type': 'multipart/form-data',

    // for uploading image
    const upload = (id,payment,checkIn,checkOut) => {
        const t     = localStorage.getItem('access');
        const token = `Bearer  ${t}`;
        const data  = {
            id : id ,
            initial_payment : payment,
            check_in : checkIn,
            check_out : checkOut
        }

        axios.post(`http://127.0.0.1:8000/api/product/booking/`,
        data,
        {
        headers : {
            'Authorization': token
          }
        }
        )
        .then(res =>{
                console.log(res);
        })    
    }

    const handleClick = (e) => {
        e.preventDefault();
        upload(id,payment,checkIn,checkOut);
    }



    return(
        <div>
            <div>
                <NavBar />
            </div>
            <div style={{marginTop:'80px'}}>
                <form>
                
                    <div class="form-group">
                        <label for="formPayment">Payment Amount</label>
                        <input type="number" 
                        title ="Must be greater than 100"
                        class="form-control"
                        value ={payment} 
                        onChange={(e)=>setPayment(e.target.value)} 
                        id="formPayment" 
                        placeholder="Must pay more than Rs 100" />
                    </div>

                    <div class="form-group">
                        <label for="formCheckIn">Check In</label>
                        <input type="datetime-local" 
                        value={checkIn}
                        onChange={(e)=>setCheckIn(e.target.value)} 
                        class="form-control" 
                        id="formCheckIn" 
                        placeholder="Another input" />
                    </div>
                    
                    <div class="form-group">
                        <label for="formCheckOut">Check Out</label>
                        <input type="datetime-local" 
                        class="form-control"
                        value ={checkOut}
                        onChange={(e)=>setCheckOut(e.target.value)} 
                        id="formCheckOut" 
                        placeholder="Another input" />
                    </div>
                
                </form>
                <button onClick ={handleClick}>Confirm Booking</button>
            </div>
        </div>
    );
}


export default BookingForm;

