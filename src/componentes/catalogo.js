import React , {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import useContexto from './cartContext';
import { useParams} from 'react-router';
import { useScroll } from 'react-use';


const H= styled.h1`
margin:0px;
font-size:1.2em;
`; 

const Produc= styled.article` 
  width:20em;
margin: auto;
display:grid;
grid-template-rows: 1fr auto;
grid-template-columns:100%;

figure{
  height:100%;
  width: 100%;
  grid-row: 1;
  margin: 0;

  img { 
    height: auto;
    width: 100%;
    padding-top: 15%;
  }
}
`;
const Demas = styled.button`
width:100%;
height:auto;
background-color:#FaFaFa01;
font-size:1.5em;
color:rgb(87, 0, 12);
padding:0.5em;
`;

function Catalogo(){
const [result , setTodo ] = useState([]);
const { setItem} = useContexto();
const [load ,setLoad] = useState();
 const {catId} = useParams();
 const [categorias, setCategorias] = useState([]);
 
useEffect( () => {

  setLoad(true);
  

  const obTenedor = async () =>{
    
    const pieza = await axios.get('http://localhost:4000/piezax');;
    try{    
     if(catId){
         const resul = pieza.data.filter( p =>
          { for(let i = 0; i< p.categoria.length; i++) {
            if(p.categoria[i] === catId)
             return p;
          }});
          setTodo(resul);
          setLoad(false); 
        }else{
    setTodo(pieza.data);
    setLoad(false); 
        }
    } catch (err){
      console.log(err);
    }
  }
  
  window.scrollTo(0,0);
  obTenedor();
  },[catId]);
 
// const  Cargando = ({load}) => (load===true) ? :
//  result.map( (resul, i) =>  
//  (<Produc key={i}>
// <figure >
// <img  src={resul.vista}  href={resul.vista}alt={resul.vista}/>
// </figure>
// <H>{resul.name}</H>
// <Link to={`/item/${resul.id}`}><Demas>
//   Detalle Del Producto{resul.Nombre}
//  </Demas></Link>
// </Produc>));

return( <>
{/* <div style={{marginTop:'1.5em', width:'90%'}}>
  <Cargando load={load}/>
  </div> */}
   {load === true && <H style={{marginTop:'300px', height: '100vh', width:'100%'}}>Loading</H> }

   { load === false && result.map( (resul, i) =>  
 <Produc key={i}>
<figure >
<img  src={resul.vista}  href={resul.vista}alt={resul.vista}/>
</figure>
<H>{resul.name}</H>
<Link to={`/item/${resul.id}`}><Demas>
  Detalle Del Productos
 </Demas></Link>
</Produc>) }

   </>);
}
export default Catalogo;