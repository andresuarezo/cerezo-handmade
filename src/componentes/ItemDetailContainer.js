import React, {useState, useContext, useEffect} from 'react';
import styled from 'styled-components';
import Cart from './CartCounter';
import useContexto from './cartContext';
import { useParams} from 'react-router-dom';

const Bodi= styled.div.attrs( props => ({
        className:'superhola',
}))`

height:80vh;
margin-top:4.8em;
width:100%;
display:grid;
grid-template-rows: 80% 20%;
grid-template-columns:1;

    `;

const Detalle= styled.div.attrs( props => ({
        className:'hola',
}))`


height:100%;
margin-top:0px;
display:grid;        
grid-row:1;
grid-template-columns:1fr 1fr;
grid-template-rows:1;

    `;
    

const Favs = styled.div`
width:100%;
height:100%;
display:grid;
grid-row:2;

    `;


function ItemContainer(){
    const {counter, setCounter, item, guardaMesta}= useContexto();
     
    const {id} = useParams();
 
    function addValue(c){
        c+=counter;
        setCounter(c);
        guardaMesta(item);
 }

return (
<Bodi>
  <Detalle >
    <figure >
     <img  src={item.vista}/>
    </figure>
   <div  >
     <h1 >{item.Nombre}</h1>
     <h3>{item.descripcion}</h3>
     <h3> Costo: {item.precio}</h3>
    <Cart clasiName={'botones'} max={item.stock}
      min={1} inicial={1} onChange={ addValue}
        acxion={'Añadir al Carrito'}/>
   </div>
  </Detalle>
  <Favs>
 
  </Favs>
        </Bodi>
   );}


export default ItemContainer;