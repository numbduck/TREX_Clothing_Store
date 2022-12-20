import { createContext, useEffect, useState } from "react";



const CartContext = createContext();

export function CartProvider({ children }) {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    const [query, setQuery] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [activegender, setActivegender] = useState("");



    useEffect(() => {
        async function fetchMyAPI() {
            let response = await fetch('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json')
            let result = await response.json();
            setData(result)
            setFiltered(result)
        }

        fetchMyAPI()
    }, [])

    return (
        <CartContext.Provider value={{
            dataValue: [data, setData],
            cartValue: [cart, setCart],
            queryValue: [query, setQuery],
            filteredValue: [filtered, setFiltered],
            activeValue: [activegender, setActivegender]
        }}>{children}</CartContext.Provider>
    );
}
export default CartContext;