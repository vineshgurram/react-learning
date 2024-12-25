import { useState } from "react"

export default function Form(){
    const [name, setName] = useState("");
    return(
        <>
        <h1>Forms</h1>
        <input type="text" onChange={(e)=>setName(e.target.value)} value={name} />
        </>
    )
}