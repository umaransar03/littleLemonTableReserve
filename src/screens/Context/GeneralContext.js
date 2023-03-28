import { createContext, useState, useContext } from "react";

export const GeneralContext = createContext();
export const useGeneralContext = () => useContext(GeneralContext);


export function CartProvider({ children }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());

    const values = {
        name,
        setName,
        phone,
        setPhone,
        email,
        setEmail,
        date,
        setDate,
        time,
        setTime
    }
    return (
        <GeneralContext.Provider value={values} >
            {children}
        </GeneralContext.Provider>
    )
}