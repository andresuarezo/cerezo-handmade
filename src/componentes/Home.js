import React from 'react';
import styled,{ keyframes} from 'styled-components';

const hola = (t) => keyframes` 
0%{
  opacity:0;
  
transform: translateY(1rem) translateZ(-300px) translateX(4rem) scale(2.5);
  top:${t-1}rem;
}
50%{
  opacity:0.3;
}
100%{
  opacity:1;
  
  transform:  translateZ(-500px) translateX(4rem) scale(2.8);
  top: ${t}rem;
}
`;

const Intro = styled.div.attrs( props => ({
  className:'intro',
}))`
font-family: 'Permanent Marker', cursive;
position:relative;
margin: 10% auto;
padding-bottom:25%;
 display : grid;
padding:0;
 height:65vh;
 width:90%;
 grid-template-columns: 1fr 2fr;
 grid-template-rows: auto;
 z-index: -1;

 p{
   display:grid;
   margin-top:1em;
  position:absolute;
 grid-row:2;
  font-family: 'Caveat', cursive;
  color: #9b2f2f;
  padding:.2em 2em;
 line-height: 1.5em;
  font-size: 1.5em;
  text-align: center;
 }

 div {
   perspective:600px;
   background-attachment: fixed;
   position:absolute;
   top:0;
   left:0;
   right:0;
   display:grid;
   grid-template-rows: 68% 30%;
  width:90%;
  height: 100%;
  margin: 0px;
  grid-column: 2;
  padding: 1em;
  box-sizing: border-box;
  z-index:1;  
  
 }

`;


const Saludo = styled.h1`
z-index:-1;
display:grid;
top:0rem;
grid-row:1;
position: absolute;
text-shadow:  2px 2px 5px rgba(60, 189, 35, 0.56);
height:auto;
width:90%;
color: rgba(45, 130, 47, 0.95);
font-family: 'Satisfy', cursive;
font-weight: 600;
line-height: 1.2em;
padding:0.1em;
font-size: 5.4rem; 
transform: translateY(1rem) translateZ(-300px) translateX(4rem) scale(2.5);
margin:1% 0;
opacity:0;

 :nth-child(1n){
  transform:  translateZ(-500px) translateX(4rem) scale(2.8);
   animation: ${hola('-16')} 1s  ease-in forwards;
 }

 :nth-child(2n){
  transform: translateY(2rem)  translateZ(-500px) translateX(4rem) scale(2.8);
  transition: all 2s 2.2s ease;
  animation: ${hola('-5')} 1s 1s ease-in forwards;
}
:nth-child(3n){
  transform: translateZ(-500px) translateX(4rem) scale(2.8);
  transition: all 2s 1.5s ease;
  animation: ${hola('10')} 1s 1.4s ease-in forwards;
}

`;



function Home() {

  

  return (<>

  <Intro >

    <figure className='introFig'>
      <img src='/cerezohandmade/laquetal.png' className='introimg' />

    </figure>
    <div >
  <Saludo> Diseñados</Saludo> <Saludo>para consentir</Saludo> <Saludo>tu belleza</Saludo>
  <p>Nuestras piezas son diseñadas con la misión de brindarte comodidad y mood,
     nuestro material arcilla polimerica es perfecto para darle un diseño<br/> unico a un
      articulo de muy poco peso y alta calidad
  </p>
  </div>
  </Intro>

  <Intro style={{backgroundColor:'white'}}>

<figure className='introFig'>
  <img src='/cerezohandmade/IMG_20200815_175321.jpg' className='introimg'/>

</figure>
<div style={{width:'100%',height:'100%',gridColumn:'2',padding:'1em'}}>
{/* <Saludo> Que fue </Saludo> */}
<p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut lacus consectetur tellus maximus ultricies sit amet porta dui. Mauris 
    quis efficitur leo. Integer auctor pretium mauris in congue. Ut tristique scelerisque tellus vel rhoncus. Etiam est tellus,
     interdum a suscipi </p>
</div>
</Intro>
<Intro>

<figure className='introFig'>
  <img src='/cerezohandmade/IMG_20200815_175321.jpg' className='introimg'/>

</figure>
<div style={{width:'100%',height:'100%',gridColumn:'2',padding:'1em'}}>
{/* <Saludo> Que fue </Saludo> */}
<p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut lacus consectetur tellus maximus ultricies sit amet porta dui. Mauris 
    quis efficitur leo. Integer auctor pretium mauris in congue. Ut tristique scelerisque tellus vel rhoncus. Etiam est tellus,
     interdum a suscipincluding versions of </p>
</div>
</Intro>

  </>
  );

}

export default Home;
