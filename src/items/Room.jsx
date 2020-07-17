import React,{useEffect} from 'react';
import NavBar from '../container/NavBar'
import { useHistory} from 'react-router-dom';
import { connect } from 'react-redux';
import {auhtGetItem} from '../store/action/itemAuth';
import {authLogin} from '../store/action/loginAuth';
import ItemCard  from './ItemCard';
import Login from '../elements/Login';

function Room(props) {

    let history = useHistory()

    useEffect(() => {
        const check = localStorage.getItem('access');
        if(!check){
            history.push('/')
        }
    },[history])

    useEffect(() => {
        props.item();
    },[])
    
    const items = props.post;
    const deluxe =items.filter(item=>item.category.name === 'Deluxe') 
    const normal =items.filter(item=>item.category.name === 'Normal')
   
    const categoryDeluxe = deluxe.map((item,index) => <ItemCard  
        key ={item.id} room = {item}/>);

    const categoryNormal = normal.map((item,index) => <ItemCard  
       key ={item.id} room = {item}/>);

    return(
        <div>
            <div>
                <NavBar />
            </div>
            <div style={{marginTop:"60px"}}>
            

                <div className="container">
                    <hr></hr>
                    <p className="shadow-lg p-3 mb-5 bg-white rounded">
                        Deluxe
                    </p>
                    <hr></hr>

                    <div className="row">
                        {categoryDeluxe}
                        {/* {
                            items.map((item,index) =>{ 
                                return <ItemCard key = {item.id} name={item.name} 
                                category = {item.category.name} 
                                price = {item.category.price}
                                image = {item.images} />
                                }
                            )
                        } */}
                        {/* {items.map((item,index) => <ItemCard  
                        key ={item.id} room = {item}/>) } */}

                    </div>
                    <hr></hr>
                        <p className="shadow-lg p-3 mb-5 bg-white rounded">
                            Normal
                        </p>
                    <hr></hr>

                    <div className="row">
                        {categoryNormal}
                        {/* {
                            items.map((item,index) =>{ 
                                return <ItemCard key = {item.id} name={item.name} 
                                category = {item.category.name} 
                                price = {item.category.price}
                                image = {item.images} />
                                }
                            )
                        } */}
                        {/* {items.map((item,index) => <ItemCard  
                        key ={item.id} room = {item}/>) } */}

                    </div>
                </div>
            </div>
        </div>
    );

}

const mapStateToProps = state => {
    return {
        post : state.item.data
    }
}   

const mapDispatchToProps =  dispatch => {
    return {
    item    : () => dispatch(auhtGetItem()),       
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Room);
  
