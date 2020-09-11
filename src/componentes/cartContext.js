import React,{useState, useContext} from 'react';

export  const Contexto = React.createContext({});

 const useContexto = () => useContext(Contexto);

export function CartContextProvider ({children}) {

    const [counter, setCounter] = useState(0);

    const [item, setItem]=useState([]);

    const [valor , setValor]= useState([]);
    console.log(valor);
    function guardaMesta(valo){
        const val= [...valor, valo];
        setValor(val);
    }
    return <Contexto.Provider value={{counter,item,setItem,
    setCounter,valor,guardaMesta}}>
        {children}
    </Contexto.Provider>
}

export default useContexto;