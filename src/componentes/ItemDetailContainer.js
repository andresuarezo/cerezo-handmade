import React, {useState, useEffect, useRef} from 'react';
import  '../App.css';
import styled, { keyframes }  from 'styled-components';
import CartCounter from './CartCounter';
import useContexto from './cartContext';
import { useParams} from 'react-router';
import {getFirestore} from '../Firebase/indes';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useWindowScroll} from 'react-use';

const Bodi= styled.div.attrs( props => ({
        className:'superhola',
}))`
margin: 0 auto;
margin-top:4em;
height:100%;
width:90%;
display:grid;
grid-template-rows: 75vh 35vh auto;
grid-template-columns:1;

    `;

const Detalle= styled.div`
height:100%;
width:100%;
margin-top:0px;
display:grid;        
grid-row:1;
grid-template-columns:1fr 1fr;
grid-template-rows:1;

div .botones{
  width:60%;
  
  }

figure{
  display:grid;
margin:0;
  grid-column:1;
  width: 100%;
  img{
    width:60%;
    margin: auto;
    }
  }
 
} `;

const jitter = keyframes`
0%{
  transform:  translateX(-100%) scale(0.5);
}

100%{
  transform: translateX(1%) scale(1);
}
`;
    

const Favs = styled.section`
position:relative;
width:100%;
height:100%;
display:grid;
grid-template-columns: 1fr 1fr 1fr;
grid-row:2;
grid-column:1;
margin:auto;
padding:0.4rem;
overflow-x:hidden;

.sale{
  
  transition: transform 1.4s ease-out;
  position: absolute;
  top: 0em;
   font-family: 'Caveat', cursive;
   color: #9b2f2f;
   transform: translateX(-100%) scale(0.8);
}

.sale.activa{
  transform: translateX(5%) scale(1);
}

div{
  transition: all 0.4s 0.1s ease-in;
  border-radius: 5%;
  display: grid;
  position: relative;
  top:15%;
  height:85%;
  width: 90%;
  box-shadow:inset 0px 0px 5px 1px rgba(223, 95, 81, 0.2);
  overflow: hidden;
    h1 {
    position:relative;
    display:inline-block;
    width:2.7em;
    height:1.3em;
    top:1%;
    left:-45%;
    font-size: 1.3em;
    transition: all 0.9s 0.1s ease-out;
    text-shadow: 1px 1px 2px rgb(255, 255, 255);
    }
   

    figure{
    top:0;
    margin:0;
    position: absolute;
    width:100%;
    height:90%;
 
    img {
     transition: transform 1.5s 0.1s ease,top 0.5s 0.3s ease;
     position: relative;
     left:20%;
     margin:0 auto;
     height:100%;
    }
  }
}
 div:nth-child(${props => (props.rey + 1)}n) {
  grid-column: ${props => (props.rey + 1)};
} 

div:hover{
  box-shadow:inset 0px 0px 15px 1px rgba(223, 95, 81, 0.4);
    figure{
      img{
        
        transform: scale(1.6) translateY(5%);
      }
    }
    h1{
      left: 3%;
      }
}



    `;
    const H= styled.h1`
margin:0px;
font-size:1.2em;
`; 


function ItemContainer(){
    const {counter, setCounter, setCart, guardaMesta}= useContexto();
    const [item, setItem] =useState({});
    const [lisFav, setFav] = useState([]);
    const [load ,setLoad] = useState();
    const {id = undefined} = useParams();
    const [anima, setAnima] = useState(null);
    useWindowScroll();    



    useEffect( () =>{
      
    window.scrollTo(0,0);
     setAnima(false);
      setLoad(true);
    
      const itemIn = async () =>{
        const {...pieza} = await axios.get(`http://localhost:4000/piezax/${id}`);
          setItem({id: pieza.id, ...pieza.data});
          setLoad(false);
          setCart(1);
      };
      const favIn = async () => {
            const {...fav} = await axios.get('http://localhost:4000/piezax');
            const favis = fav.data.filter( otras => ( otras.id !== id && otras.costo > 400)).splice(0,3)  ;
            setFav(favis);
      };
      itemIn();
      favIn();
     
    },[id]);
// const otraMas = (y > 100 && anima !== true) ? setAnima(true) : setAnima(false);
    
 function addValue(c){  
      c+=counter;      
      setCounter(c);
      guardaMesta(item);  
 }

 const laqueFal = () =>{
   if( document.documentElement.scrollTop > 100 )
setAnima(true);
  };

        
return ( <>
    { load === true && <H style={{marginTop:'300px', height: '100vh', width:'100%'}}>Loading</H> }

    { load === false &&
     <Bodi onScroll={(anima !== true) ? laqueFal() : null }>
           <Detalle  > 
               <figure >
                <img  src={item.vista} alt={item.vista}/>
               </figure>
              <div>
                <h1 >{item.name}</h1>
                <h3>{item.descrip}</h3>
                <h3> Costo: {item.costo}</h3>
               <CartCounter clasiName={'botones'} max={item.stock}
                 min={1} inicial={ item.stock >= 1 ? 1 :'no hay stock disponible'}
                  onChange={ addValue} acxion={'Añadir al Carrito'}/>
              </div>
           </Detalle>
           <Favs>
            <h2 className={`sale ${ (anima) ? 'activa' : ''}`}>Otros Diseños que podrían interesarte</h2>
             {lisFav.map( (favo, i) => ( 
            <div rey={i} key={i}>
               <figure>
                <Link style={{textDecoration: 'none'}} to={`/item/${favo.id}`}> 
                  <img alt={favo.name} src={favo.vista}  />
                </Link>
               </figure>
             <h1>{favo.name}</h1>
            </div>
                 ))}
           </Favs>
       </Bodi>}

       </>);
}


export default ItemContainer;
