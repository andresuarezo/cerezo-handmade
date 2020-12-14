import React,{useState, useContext} from 'react';

export  const Contexto = React.createContext({});

 const useContexto = () => useContext(Contexto);

export function CartContextProvider ({children}) {

    const [counter, setCounter] = useState(0);
    const [count, setCart]= useState();
    const [item, setItem]=useState([]);
    const [fut, setFut] = useState(false);
    const [valor , setValor]= useState([]);
    const [piezax, setPieza] = useState([]);
    const [cantidad, setCantida] = useState();
    
    
    function precio(){
        return piezax.reduce( (prev, next) => 
         (prev +(next.qty * next.precio)),0 )
    }

    function guardaMesta(valo){
        const val= [...valor, valo];
        const pieza= {nombre: valo.name, id: valo.id,
                         precio: valo.costo, qty: cantidad};
        const piejita=[...piezax, pieza];
        setValor(val);
        setPieza(piejita);
    }
    return <Contexto.Provider value={{counter,item,setItem, fut, setFut,
            setCounter,valor, piezax, precio, setCantida, guardaMesta,
            setCart, count}}>
                {children}
            </Contexto.Provider>
}

export default useContexto;