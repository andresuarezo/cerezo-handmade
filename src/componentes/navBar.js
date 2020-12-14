import React, { useEffect, useState }  from 'react';
import styled, { keyframes } from 'styled-components'
import Cart from './cart';
import {Link} from 'react-router-dom';
import axios from 'axios';
import useContexto from './cartContext';

const Top = styled.nav`
z-index: 5;
  width: 100%;
  margin-top:0px;
  height:${ props => (props.sube === true  && props.baja === true) ? '100vh'  : (props.sube === true && props.baja === false) ? '6rem' : '3rem'};
  position:fixed;
  top:0;
  left:0;
  right:0;
 background-color:rgba(255,255,255,0.99);
 box-shadow: 0px 0px 5px #57000c93;
 display: grid;
 grid-template-rows: ${props => (props.baja === true) ? '5.9rem 90vh' : '100%' };
 grid-template-columns: 1.5fr 1fr 2fr;
 overflow-y:hidden;
 transition: all 0.7s ease-in;

 .diviv {
   padding:1em;
   transition: all 1s linear;
   display:grid;
   grid-column: 1  / span 3;
   grid-row:2;
   grid-template-columns: repeat(auto, 30%);
   grid-template-rows: repeat(2,50%);
   column-gap: 1em;
   height:100%;
   width:100%;
   }
 }

 

`;



const  Titulo= styled.div`
  display: grid;
  grid-column: 1;
  grid-row:1;
  margin:0px;
  padding: .1em;
  display:inline-block;
  color: #e66465;
  width: auto;
  position:fixed;
  height: auto;
  top:-1rem;
  left:0px;
  

  figure{
    position:relative;
    margin-top:0px;
    margin-left:5%;
    width:auto;
    height:100%;
    

    img{
      margin:0;
      padding:0px;
     width:13rem;
    }
  }
`;

const Posis = styled.div`
  display: grid;
  grid-row:1;
  grid-column: ${props => props.rey};
  text-align:center;
  margin:0 auto;
  position:relative;



  :nth-child(3n){
    display: grid;
    grid-template-rows; 1fr 1fr;
    grid-template-column:100%;
    width:100%;
    height: ${props => (props.sube === true) ? '6em': 'auto'};

   
    h1{
      cursor:pointer;
      height:100%;
      width:2.4em;
      z-index:1;
      margin: auto;
      font-size:2em;
      display:grid;
      grid-column:1;
      grid-row:1;
      background-color:white;
      font-family: 'Caveat', cursive;
      transition: all 0.5s 0.2s;
      :hover{ 
        font-weigh:200;
            }
    }

    span{
      z-index:${props => (props.sube === true) ? '1' : '-1' } ;
      positiion:absolute;
      padding-top:1rem;
      transform: ${props => (props.sube === true) ? 'translateX(14em)' : 'translateX(18em)' };
      opacity: ${props => (props.sube === true) ? '1' : '0'};
      transition: transform 1s 0.5s ease-out, opacity 0.3s 0.9s ease-in;
      display:grid;
      width:2rem;
      height:auto;
      grid-row:1;
      cursor:pointer;
      grid-column:1;
      font-size:1em;
      font-family: 'Caveat', cursive;
  color: #9b2f2f;
    }
 
  }

 

`;

const Barra = styled.ul`
position:relative;
display:inline-block;
  grid-row:2;
  top: ${props => (props.sube === true) ? `0.1em` : '3em'};
  opacity: ${ props => (props.sube === true) ? 1: 0};
  list-style:none;
  height:100%;
  transition: top 0.5s 0.1s, opacity 0.3s 0.1s;


`;

const Lista = styled.li`
 display:inline;
 margin:0 1%;
  color: black;
  height:auto;
  opacity: ${ props => (props.sube === true) ? '1': '0'};
  transition: ${props => (props.sube === true) ? `opacity 0.8s 0.${props.rey + 4}s `: 'all 0.1s '} 
 
`;

const Ancors = styled.a`
font-family: 'Caveat', cursive;
 color: #9b2f2f;
 font-weight:800;
 font-size:1.5rem;
  text-decoration: none;
  
`;
const fondo = keyframes`
0%{
  background-position: 0% 0%;

}
100%{
  background-position: 100% 100%;
}

`;

const Cates = styled.article`
  display:grid;
  padding:2em;
  background-color:white;
  width:100%;
  height:auto;
   grid-column:${props => (0 <= props.point == 2 ) ? (props.point + 1) :
               ( 3 == props.point <=5 ) ? (props.point - 2) : null};
   grid-row: ${ props => (props.point <= 2 ) ? 1 : 2};
   grid-template-rows: 15% 100%;
   grid-template-columns:1;
   
   overflow:hidden;
   
   h3{
     opacity: ${props => (props.baja === true) ? 1: 0};
     transform: ${props => (props.baja === true ) ? 'translateX(0.5em)': 'translateX(-5em)' };
     transition:  opacity 0.8s ${props => ( (props.point + 2) * 0.3)}s ease-out, transform 1.5s ${props => ( (props.point + 2) * 0.25)}s ease-out;
     grid-row:1;
     font-family: 'Caveat', cursive;
     height:0.5em;
   }

   .${props => ( props.laque ) }{
     width:100%;
     grid-row:2;
     z-index:2;
     position:relative;
     margin: 0 auto;
     height:100%;
     border-radius: 2%;
     box-shadow: ${props => (props.baja === true ) ? 'inset 0px 1px 10px rgba(0,0,0,0.2)':'none'};
     transition:all 0.2s 0.5s ease-in, transform 0.5s ${props => ( (props.point + 3)*0.3)}s ease-out;
    transform: ${props => (props.baja === true) ? 'translateY(0%)' : 'translateY(100%)'} ;
    background: left -5em / 80% 100% no-repeat url('../cerezohandmade/rayinrayan.png'),
                14em 10% / 85% 95% no-repeat url('../cerezohandmade/BerryJelou.png'),
                0em 8em  / 80% 90% no-repeat url('../cerezohandmade/cherrireinbow.png'),
                15em 15em/ 80% 90% no-repeat url('../cerezohandmade/colofrstraw.png');
      background-size: 50% 70%;
      background-position: top 5%;


      :hover{
        transition: box-shadow 0.3s 0.1s ease-in;
        box-shadow: inset 0px 5px 30px rgba(0,0,0,0.45);
      }
   }

   .Grandes{
     
   }

`;



function NavBar() {
  const {setFut, fut} = useContexto();
  const [categoris, setCat]= useState([]);
const [sube, setSube] = useState(false);
const [baja, setBaja] = useState(false);
  useEffect ( () => {
    const catIn = async () =>{
      try{
          const cates = await axios.get(`http://localhost:4000/categorias`);
          setCat(cates.data);
      } catch (err){
        console.log(err);
      }
    };
catIn();
      // const db = getFirestore();
      // const catColec = db.collection('Categorias');

      // catColec.get().then( (querySnapshot) => {
      //   if(querySnapshot.size===0){
      //     alert('che n hay ndeaah')
      //   }
      //   setCat(querySnapshot.docs.map( cat => ({...cat.data(),id : cat.id})));
      // });
  }, [categoris])

  const subela = () => setSube( (sube===false) ? true : false);

const menu = [
<Link onClick={() => setSube(!sube)} 
style={{textDecoration:'none',  color:' rgb(156, 5, 25)'}} to='/catalogo'>
   Productos
  </Link>,
<Link  onClick={ () => setBaja(!baja)} 
style={{textDecoration:'none',  color:' rgb(156, 5, 25)'}}>
   Categorias
</Link>,
,
<Link onClick={() => setSube(!sube)} 
style={{textDecoration:'none',  color:' rgb(156, 5, 25)'}} to='/itemdetail'>
   Personalizado
   </Link>,
 <Link onClick={() => { setFut(!fut); setSube(!sube);} }//por terminasrr --- terminado
 style={{textDecoration:'none',  color:' rgb(156, 5, 25)'}} >
   Contacto
 </Link>,'Sobre Nosotros'];

 

  return (

  <Top sube={sube}  baja={baja}>
   <Titulo sube={sube}> <figure>
   <Link  style={{textDecoration:'none'}} to='/'> <img src={'./cerezohandmade/nlogo.png'}/>
     </Link>
   </figure>
    </Titulo>
     <Posis rey='2' >
     <Cart circu={sube} onClick={subela}/>
     </Posis>
     <Posis rey='3' sube={sube} >
       <h1 onClick={subela}>Menu</h1>
       <span onClick={() => { subela(); setBaja( () => (baja !== false) ? !baja : baja) }}>
         Cerrar
         </span>
    <Barra sube={sube} baja={baja}>
      {menu.map( (m, i) => 
      <Lista sube={sube} rey={i} key={i}>
        <Ancors>{m}</Ancors>
      </Lista>)}
    </Barra>
    </Posis>
    <div className="diviv">
  {categoris.map( (cate, i) => 
  <Cates baja={baja}  laque={cate} point={i}> 
                <h3>{cate}</h3>
     <Link onClick={() => {subela(); setBaja(!baja);}}
      to={`/catalogo/${cate}`}>
       <div className={cate}></div>
     </Link>
  </Cates>)}
    </div>
  </Top>
  
  );
}

export default NavBar;