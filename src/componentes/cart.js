import React from 'react';
import styled from 'styled-components';
import useContexto from './cartContext';
import {Link} from 'react-router-dom';

const Cantidac = styled.h1`
position:absolute;
bottom:20px;
height:2em;
width:2em;
border-radius:50%;
margin-left:2.8%;
background-color:white;
color: #e66465;
font-size:.6rem;
text-align:center;
border:1px solid #e66465;
padding-top:3px;
`;

const Boton = styled.button` 
width: 3.5rem;
height: auto;
background-color:white;
display:inline;
padding-top:5%;

bottom:0px;

`;
function Tocado(){
alert('soy un boton atravesado');
         
};

function Cart(){


var {counter,valor} = useContexto();
    return (
        
 
        <Boton onClick={ ()=> console.log(valor)  }>  <Cantidac>{counter}</Cantidac>
       <Link to='/Cart'> <i className='fas fa-shopping-cart' style={{color:'#e66465', fontSize:'2rem',padding:'0'}}></i></Link>
        </Boton>
        
  
    );
}

export default Cart;
