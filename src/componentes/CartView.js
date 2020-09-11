import React from 'react';
import styled from 'styled-components';
import useContexto from './cartContext';
import {Link} from 'react-router-dom';

const Barra = styled.div`
margin-top:100px;
  display:grid;
  grid-template-columns:2fr 1fr 1fr;
  height:2em;
  width:100%;
`;
const H= styled.h1`
margin-top:150px;
font-size:2.2em;
width:100%;
height:auto;
`; 

function CartView(){
 const {valor,counter}= useContexto();
 

   const compras = valor.map( e =>  <Barra>
    <h3>{e.Nombre}</h3>
    <h3>{e.precio*counter}</h3>       
    <h3> {e.id}</h3>   
 </Barra>);

const Sera = ({load}) => (load.length===0) ?<><H>El carrito está vacio
     perro</H> 
     <button type='button'><Link to='/catalogo'>A compra!</Link></button></>: compras;

    return(
     <Sera load={valor}/>
    
    );
}
export default CartView;
