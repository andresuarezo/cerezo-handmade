import React , { useState, useContext }  from 'react';
import styled from 'styled-components';



const Sumador = styled.button`
width:50%;
height:auto;
font-size:2em;
radius:5px;
background-color:#FaFaFa01;
box-shadow:0px 0px 2px #57000c59;
color: olive;
`;

const Aniadir = styled.button`
width:100%;
height:auto;
background-color:#FaFaFa01;
font-size:1.5em;
color:#2af342b;
padding:0.5em;

`;


function CartCounter({min, max,inicial,acxion,clasiName,onChange}){
    
   
  var [counter, setCounter] = useState(inicial);
    const restar = () =>{if(counter>min) {
        setCounter(counter - 1);}
       
    };
    const sumar = () =>{if(counter<max) {
                     setCounter(counter + 1);}
                   
                    };
                    
  
    return (
        <div className={clasiName} style={{margin:'0 auto 2.5rem',display:'flexbox'}}>
        <h5 style={{flexDirection:'row', textAlign:'center',fontSize:'1rem',margin:'0'}}>{counter}</h5>
        
<Sumador  onClick={restar} disabled={(counter===min)} >-</Sumador>
<Sumador  onClick={sumar} disabled={(counter===max)}>+</Sumador>
        <div style={{flexDirection:'row'}}>
        <Aniadir type='submit' onClick={()=>onChange(counter)}>{acxion}</Aniadir>
        </div>
    </div>

    );
}

export default CartCounter ;

