import React, {useState, useEffect} from 'react';
import '../App.css';
import styled from 'styled-components';
import useContexto from './cartContext';
import {Link} from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import {getFirestore} from '../Firebase/indes';


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
const Demas = styled.button`
margin-left:35%;
width:35%;
height:auto;
background-color:#FaFaFa01;
font-size:1.5em;
color:rgb(87, 0, 12);
padding:0.5em;
font-style:none;
`;


function CartView(){
 const {valor, piezax, precio}= useContexto();
const [nombre, setNombre]= useState('');
const [correo, setCorreo]= useState('');
const [correoserio, setCorreos] = useState('')
const [tel, setTel]= useState('');
const [id, setId] = useState();



  function nomBrada(event){
   
  setNombre(event.target.value);
   }
  
  function elCorreo(event){
    setCorreo(event.target.value);
     }
     
     function elCorreos(event){
      setCorreos(event.target.value);
       }

  function elTel(event){
      setTel(event.target.value);
       }

     const buyer= { nom: nombre, corr: correo, tele: tel};

 async function creaOrder(){

  const db = getFirestore();
  let orden = db.collection('ordenes');
        const newOrder ={
          comprador: buyer,
          items: piezax,
          fecha: firebase.firestore.Timestamp.fromDate( new Date()),
          total: precio(),
        };
      
         try{
        const {id}= await orden.add(newOrder);
         setId(id);
         } catch(err){
           console.log('err');
         }
};

   const compras = piezax.map( e =>  <Barra>
    <h3>{e.nombre}</h3>
    <h3> {e.qty}</h3>  
    <h3>{e.precio}</h3>       
  
     </Barra> );
const Listo = ({list}) => (list) ?  <H> {buyer.nom} Utliza este codigo:{id}, para el seguimiento de tu orden  </H> : null;
 
const Sera = ({load}) => (load.length===0) ?<>
                <H>El carrito está vacio perro</H> 
          <Link  to='/catalogo'>  <Demas type='button'>A compra!</Demas></Link>
          </>
     : <> 
     <Listo list={id}/>
     <Barra>
       <h2>Pieza</h2>
       <h2>Cantidad</h2>
       <h2>Precio</h2>
     </Barra>
     {compras}
        <Barra> 
          <h3 style={{gridColumn:'2'}}>Total($AR):</h3>
          <h3 style={{gridColumn:'3'}}>{precio()}</h3>
        </Barra>
      <form style={{width:'80%', marginLeft:'10%'}} className='needs-validation mt-5' onSubmit={ (event) => event.preventDefault()} >
  <div className="row">
    <div className="col">
      <input type="text" key={'1'} className="form-control" placeholder="Nombre y Apellido"     onChange={(event) => nomBrada(event)} value={nombre}  required/>
    </div>
    <div className="col">
    <input type="number" className="form-control" placeholder="Numero de telefono"  value={tel} onChange={elTel}   required />
    </div>
  </div>
  <div className="row">
  <div className="col">
      
      <input type="email" className="form-control" placeholder="Correo electronico"  value={correo} onChange={elCorreo}  required/>
    </div>
    <div className="col">
      
      <input type="email" className="form-control" placeholder="Confirme Correo electronico"  value={correoserio} onChange={elCorreos}  required/>
    </div>
     
   </div>
   <Demas type='submit' onClick={creaOrder} disabled={(correo!==correoserio) ||(!nombre)||(!tel) || (!correo)}>Comprar</Demas> 
</form>


     

     </>;

    return( <>
    {/* //  <Sera load={piezax}/> */}
      { piezax.length === 0 && <> <H>El carrito está vacio perro</H> 
          <Link  to='/catalogo'>  <Demas type='button'>A compra!</Demas></Link> </>
        }

        {piezax.length !== 0  && <> 
     <Listo list={id}/>
     <Barra>
       <h2>Pieza</h2>
       <h2>Cantidad</h2>
       <h2>Precio</h2>
     </Barra>
     {compras}
        <Barra> 
          <h3 style={{gridColumn:'2'}}>Total($AR):</h3>
          <h3 style={{gridColumn:'3'}}>{precio()}</h3>
        </Barra>
      <form style={{width:'80%', marginLeft:'10%'}} className='needs-validation mt-5' onSubmit={ (event) => event.preventDefault()} >
  <div className="row">
    <div className="col">
      <input type="text" key={'1'} className="form-control" placeholder="Nombre y Apellido"     onChange={(event) => nomBrada(event)} value={nombre}  required/>
    </div>
    <div className="col">
    <input type="number" className="form-control" placeholder="Numero de telefono"  value={tel} onChange={elTel}   required />
    </div>
  </div>
  <div className="row">
  <div className="col">
      
      <input type="email" className="form-control" placeholder="Correo electronico"  value={correo} onChange={elCorreo}  required/>
    </div>
    <div className="col">
      
      <input type="email" className="form-control" placeholder="Confirme Correo electronico"  value={correoserio} onChange={elCorreos}  required/>
    </div>
     
   </div>
   <Demas type='submit' onClick={creaOrder} disabled={(correo!==correoserio) ||(!nombre)||(!tel) || (!correo)}>Comprar</Demas> 
</form>
</>}
    </>);
}
export default CartView;
