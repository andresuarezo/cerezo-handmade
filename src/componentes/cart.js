import React from 'react';
import styled from 'styled-components';
import useContexto from './cartContext';
import {Link} from 'react-router-dom';

const Cantidac = styled.h1`
position:absolute;
bottom:${ props => (props.mueve === true) ? '1.5rem' : '1.1rem'};
left:${props => (props.mueve === true) ? '65%' : '35%'};
height:1.82em;
width:1.72em;
border-radius:50%;
margin-left:2.8%;
background-color:white;
color: #e66465;
font-size:.6rem;
text-align:center;
border:1px solid #e66465;
padding-top:3px;
transition: all 0.5s  0.1s ease-out;
`;

const Boton = styled.button` 
position:relative;
top: 0.1rem;
width: ${props => (props.circu === true) ? '6rem' : '3rem'};
height: ${props => (props.circu === true ) ? '5.2rem' : '2.9rem' };
background-color:white;
display:inline-block;
border-radius: ${props => (props.circu === true ) ? '45%' : '5%' } ;
box-shadow: ${props => (props.circu === true ) ? '0px 0px 5px 1px rgba(223, 95, 81, 0.5)': '0px 0px 3px rgba(173, 95, 81, 0.2)'};
outline: none;
border:none;
transition: all 0.5s 0.3s ease-out;

i {
    text-align:center;
position:relative;
right:  ${ props => (props.circu === true) ? '.3rem': '0' };
top: ${ props => (props.circu === true) ? '-2px' : '5px' };
color: rgb(161, 26, 44);
font-size: ${props => (props.circu === true ) ? '2.1rem': '1.5rem'} ;
padding:0;
transition: all 0.6s 0.2s ease-in;
}
`;

function Cart({circu, onClick}){

var {counter,valor} = useContexto();

    return (
        <Boton circu={circu} >
          <Cantidac mueve={circu}>{counter}</Cantidac>
       <Link to='/Cart' onClick={ onClick }>
     <i className='fas fa-shopping-cart'></i>
       </Link>
        </Boton>
    );
}

export default Cart;
