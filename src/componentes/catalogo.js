import React , {useState, useEffect} from 'react';
import datos from './Inventario';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import useContexto from './cartContext';
import {getFirestore} from '../Firebase/indes';
import { useParams} from 'react-router-dom';
 
const H= styled.h1`
margin:0px;
font-size:1.2em;
`; 
const Produc= styled.article` 
  width:19em;
  text-align:center;
margin: auto;
display:grid;
grid-template-rows: 1fr auto;
grid-template-columns:100%;
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
const [cats, setCats]=useState();
const [result , setTodo ]= useState([]);
const { setItem} = useContexto();
const [load ,setLoad] = useState();
 const {catId} =useParams();
useEffect( () => {
  setCats(catId);
  setLoad(true);
    const db = getFirestore();
    let itemColec = db.collection('items');

    let filtra = catId ? itemColec.where('categoria', '==', cats) : itemColec;
    
      filtra.get().then( (querySnapshot) => {
       
alert(cats);
    if(querySnapshot.size===0){
      alert('aquí no hay nada')
    }
      setLoad(false); 
      setTodo(querySnapshot.docs.map( m => ({...m.data(), id: m.id })));
    });

  },[cats]);
 
const  Cargando = ({load}) => (load===true) ? <H style={{marginTop:'300px'}}>Loading</H> :
 result.map( resul => 
 (<Produc>
<figure style={{height:'100%', width:'100%',
   gridRow:'1',margin:'0'}}>
<img style={{height:'70%',width:'100%',
    paddingTop:'35%',}} src={resul.vista} href={resul.vista} alt={resul.vista}/>
</figure>
<H>{resul.Nombre}</H>
<Link to={`/item/${resul.id}`}><Demas onClick={()=> setItem(resul)}>
  Detalle Del Producto
 </Demas></Link>
</Produc>));
return( <>
  <Cargando load={load}/>
   </>);
}
export default Catalogo;