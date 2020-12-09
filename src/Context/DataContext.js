import React,{createContext,useState,useEffect} from 'react';

export const DataContext = createContext()

const DataContextProvider = (props) => {
    const [data,setData] = useState([])
    useEffect(()=>{
        const fun = async() => {
            fetch('https://api.stackexchange.com/2.2/questions?order=desc&sort=hot&site=stackoverflow&page=1')
            .then(response => response.json())
            .then(data => setData(data.items));
        }
        fun()
    },[])

    return ( 
        <DataContext.Provider value={{data,setData:setData}}>
           {props.children}
        </DataContext.Provider>
     );
}
 
export default DataContextProvider;
