import React, { useEffect, useState }  from 'react';
import styled from 'styled-components'
import Cart from './cart';
import {Link} from 'react-router-dom';
import {getFirestore} from '../Firebase/indes';
const Top = styled.nav`-
  width: 100%;
  margin-top:0px;
  height:4rem;
  position:fixed;
  top:0;
  left:0;
  right:0;
 border: 1px solid gray;
 background-color:#FFF;
 box-shadow: 0px 0px 5px #57000c93;
`;



const  Titulo= styled.h1`
margin-left:5px;
  padding: .1em;
  display:inline-block;
  fons-size: 1.7em;
  color: #e66465;
`;

const Barra = styled.ul`
  display: inline-block;
  width:650px;
  margin-right:0em;
  float:right;
  list-style:none;
  
  height:100%;
`;

const Lista = styled.li`
  width:auto;
  margin:0  2%;
  display: inline-block;
  color: black;
  height:auto;
  padding-bottom:10%;

`;

const Ancors = styled.a`

  text-decoration: none;
  color: rgb(156, 5, 25);
`;



function NavBar() {
  const [categoris, setCat]= useState([]);

  useEffect ( () => {
      const db = getFirestore();
      const catColec = db.collection('Categorias');

      catColec.get().then( (querySnapshot) => {
        if(querySnapshot.size==0){
          alert('che n hay ndeaah')
        }
        setCat(querySnapshot.docs.map( cat => ({...cat.data(),id : cat.id})));
      });
  }, [])

const menu=[<div class="btn-group">
<button class="btn btn-light btn-sm" type="button">
<Link style={{textDecoration:'none',  color:' rgb(156, 5, 25)'}} to='/catalogo'>Productos</Link>
</button>
<button type="button" class="btn btn-sm btn-light dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <span class="sr-only">Toggle Dropdown</span>
</button>
<div class="dropdown-menu">
  
  {categoris.map( cate => (<Link className={'dropdown-item'} style={{textDecoration:'none',  color:' rgb(156, 5, 25)'}} to={`/catalogo/${cate.categoria}`}>{cate.categoria}</Link>))}

{/* <Link className={'dropdown-item'} style={{textDecoration:'none',  color:' rgb(156, 5, 25)'}} to=''>Pequeños</Link>
<Link className={'dropdown-item'} style={{textDecoration:'none',  color:' rgb(156, 5, 25)'}} to=''>Grandes</Link> */}
</div>
</div>,
<Link style={{textDecoration:'none',  color:' rgb(156, 5, 25)'}} to='/itemdetail'>Personalizado</Link>,
 'Contacto','Sobre Nosotros',<Cart />];

  

  return (

  <Top>
   <Link style={{textDecoration:'none'}} to='/'>
   <Titulo>  Cerezo HandMade
    </Titulo>
     </Link>
    <Barra>
      {menu.map( m => <Lista><Ancors>{m}</Ancors></Lista>)}
    </Barra>
    
  </Top>
  
  );
}

export default NavBar;