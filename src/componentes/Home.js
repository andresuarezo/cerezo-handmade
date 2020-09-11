import React from 'react';
import styled from 'styled-components';
import foto from './cerezohandmade/IMG_20200815_175321.jpg';

const Intro = styled.div.attrs( props => ({
  className:'intro',
}))`
margin: 10% 5%;
padding-bottom:25%;
 display : grid;
 padding:0px;
 height:65vh;
 width:100%;
 grid-template-columns: 1fr 2fr;
 grid-template-rows: auto;


`;


const Saludo = styled.h1`
height:auto;
color: rgb(30, 90, 7);
font-size:2em;
line-height: 1.2em;
padding:0 10%;
margin:1%;
font-weight:bolder;

`;



function Home() {

  

  return (<>

  <Intro >

    <figure className='introFig'>
      <img src={foto} className='introimg' />

    </figure>
    <div style={{width:'100%',height:'100%',margin:'0',gridColumn:'2',padding:'1em',boxSizing:'border-box'}}>
  <Saludo> Diseñados para consentir tu belleza</Saludo>
  <p>Nuestras piezas son diseñadas con la misión de brindarte comodidad y mood, nuestro material arcilla de mis bolas
    es perfecto para darle un diseño unico a un articulo de muy poco peso
  </p>
  </div>
  </Intro>

  <Intro style={{backgroundColor:'white'}}>

<figure className='introFig'>
  <img src={foto} className='introimg'/>

</figure>
<div style={{width:'100%',height:'100%',gridColumn:'2',padding:'1em'}}>
<Saludo> Que fue </Saludo>
<p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut lacus consectetur tellus maximus ultricies sit amet porta dui. Mauris 
    quis efficitur leo. Integer auctor pretium mauris in congue. Ut tristique scelerisque tellus vel rhoncus. Etiam est tellus,
     interdum a suscipi </p>
</div>
</Intro>
<Intro>

<figure className='introFig'>
  <img src={foto} className='introimg'/>

</figure>
<div style={{width:'100%',height:'100%',gridColumn:'2',padding:'1em'}}>
<Saludo> Que fue </Saludo>
<p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut lacus consectetur tellus maximus ultricies sit amet porta dui. Mauris 
    quis efficitur leo. Integer auctor pretium mauris in congue. Ut tristique scelerisque tellus vel rhoncus. Etiam est tellus,
     interdum a suscipincluding versions of </p>
</div>
</Intro>

  </>
  );

}

export default Home;
