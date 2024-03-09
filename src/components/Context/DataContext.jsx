import { createContext, useState, useEffect } from "react";
import { db } from "../../service/config";
import { getDocs, collection, query } from "firebase/firestore";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "productos"));
        const newData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <dataContext.Provider value={{ data, cart, setCart, selectedCategory, setSelectedCategory }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;