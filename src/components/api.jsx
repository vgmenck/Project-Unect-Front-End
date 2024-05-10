import { useEffect, useState } from "react"

const url = "http://localhost:3000/Cadastro"

const api = () => {

    const[Cadastro, setCadastro] = useState([]);

    useEffect(()=>{
        
        async function getData(){
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)

            setCadastro(data);
        }

        getData();
    },[]);


  return (
    <div>
        <ul>
            {Cadastro.map((Cadastro)=>(
                <li key={produts.id}>{produts.name} - R${produts.price}</li>
               
        ))}
        </ul>
    </div>
  )
}

export default api