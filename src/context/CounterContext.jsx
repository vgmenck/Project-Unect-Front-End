import {createContext, useState } from "react";

export const CounterContext = createContext();

export const CounterContextProvider = ({children}) => {
    const [Nome, setNome] = useState("");
    const [Email, setEmail] = useState("");
    const [Senha, setSenha] = useState("");
    const [confirmeSenha, setConfirmeSenha] = useState("");
    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [Status, setStatus] = useState("A fazer");

    return(
        <CounterContext.Provider value={{Nome, setNome, Email, setEmail, Senha, setSenha, confirmeSenha, setConfirmeSenha,Title , setTitle, Description, setDescription, Status, setStatus }}>
            {children}
        </CounterContext.Provider>
    );
}
