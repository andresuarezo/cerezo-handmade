import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import useContexto from './cartContext';

const Pie = styled.section`
margin: 0 auto;
transition: height 1.2s ease-in;
position: ${props => (props.super === true) ? 'fixed' : 'relative'} ;
bottom: ${props => (props.super === true) ? '0': 'auto'};
left:${props => (props.super === true) ? '0': 'auto'};
right:${props => (props.super === true) ? '0':'auto'};
width:90%;
height:${props => (props.super===true) ? '100vh' : '25vh'};
background:rgba(200,10,10,0.1);
display: grid;
grid-template-columns: repeat(4, 1fr) ;
grid-template-rows: 1fr 1fr;
padding: 0.5em;
.newsletter{
    display:grid;
    grid-row: 1;
    width:auto;
    grid-column-end:  span 4;
    grid-template-rows: 1fr 1fr;

    input{
        display:grid;
        grid-row:1;
        width:100%;
    }
    label{
        display:grid;
        grid-row:2;
        width:100%;
    }

}

.link{
   display: grid;
   width:auto;
   grid-row: 2;
   grid-column: ${props => toString(props.punto + 1)};
   height: auto;
   background-color: #FFF;
   

    h1{
        color:color: #9b2f2f;
        width:auto;
        text-align: center;
    }

}

`;

function Footer() {

    const {fut} = useContexto();
    const [links, setLinks] = useState([]);


useEffect( () => {

    const dora = async () => {
        const {...contact} = await axios.get(`http://localhost:4000/contacto`);
            setLinks(contact.data);
    };
dora();

},[])


    return ( <Pie super={fut} >
         <div className='newsletter'>
      <input type="email" key={'1'} placeholder="Nombre y Apellido" id='email'   required/>
      <label for='email' >Suscribete para Conocer los Nuevos Diseños</label> 
    </div>
    { links.map( ( link, i) => <div punto={i} className={'link'}>
        <h1>{link.name}</h1>
        </div>) }

    </Pie>
    );

};

export default Footer;
