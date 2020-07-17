import React  from 'react';
import { Link } from 'react-router-dom';

function ItemCard(props) {
    const {id , name ,category , images , test ,is_booked} = props.room
    console.log(is_booked);

    const x = images.map((img,index)=>{
        if (img.image === null){
                return "Hello"
            }
        else{
            return img.image
        }           
    })

    const testNullCheck = () => {
        if (Array.isArray(test)){
            if(test.length < 2 ){
                for (let i = 0 ; i <= 2-test.length; i++){
                    var obj = {
                        name: 'Null Checked'
                    };
                    test.push(obj);
                }
            }
        }
        const returnValue = test.map((t,i) => {
            return t.name
        })
        return returnValue;
    }
    
    testNullCheck();

    return(
        
        <div className= "col-4">
            <div className="card">
                <div className="card-body">
                    <p className="card-text">This image is in the middle</p>
                </div>
                
                <img src = {x[0]} 
                alt="Card " height="200px" width="200px" />
                <div className="card-body">
                    <p className="card-text">{name}</p>
                    <p className="card-text">{category.name}</p>
                    <p className="card-text">Price {category.price}</p>
                    <p className="card-text">{test[0].name}</p>
        
                </div>
                {
                    is_booked
                    ?
                    <button className= 'btn btn-primary'  >Room Booked</button>                    
                    :
                    <Link to ={`/menu/${id}/`} >
                        <button className= 'btn btn-secondary'  >Booking</button>
                    </Link>
                }
            </div>
        </div>
    );
}


export default ItemCard;

