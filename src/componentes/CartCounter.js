import React , {useState}  from 'react';
import styled from 'styled-components';
import useContexto from './cartContext';



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


function CartCounter({min, max,acxion,clasiName,onChange}){

   
const {setCantida,count, setCart}=useContexto();


    const restar = () =>{if(count>min) 
        setCart(count - 1);
      }
    const sumar= () => { if(count < max)
                      setCart(count+1);
                    
                    }
               
                    
  setCantida(count);
    return (
        <div className={clasiName} style={{margin:'0 auto 2.5rem',display:'flexbox'}}>
        <h5 style={{flexDirection:'row', textAlign:'center',fontSize:'1rem',margin:'0'}}>
          {count}
          </h5>
    <Sumador type='button'  onClick={restar} disabled={(count===min)}> -</Sumador>
    <Sumador type='button' onClick={sumar} disabled={(count===max)}>+</Sumador>
        <div style={{flexDirection:'row'}}>
        <Aniadir type='submit' onClick={()=> onChange(count)}>{acxion}</Aniadir>
        </div>
    </div>

    );
}

export default CartCounter ;

