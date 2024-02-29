import { createContext, useState, useEffect } from "react";
import {db} from "../../service/config";
import { getDocs, collection, query } from "firebase/firestore";

export const dataContext = createContext ();


const DataProvider = ({children}) => {
        const [data, setData] = useState([]);
        const [cart, setCart] = useState([]);
        useEffect (() => {
            const misProductos = query (collection (db, "productos"))
            
            getDocs(misProductos)
              .then(res => {
                setData (res.docs.map(doc => ({id:doc.id, ...doc.data()})))
              })
          }, [])

    
    return (
        <dataContext.Provider value={{data, cart, setCart}}>{children}</dataContext.Provider>
    )
}

export default DataProvider