import { useState } from "react"

export default function Forms() {
    const [name, setName] = useState({ firstName: "", lastName: "" });
    function handleSubmit(e){
        e.preventDefault();
        console.log(name);
    }
    return (
        <>
            <h1>Handling Multiple Input Data Forms</h1>
            <form>
                <input type="text" placeholder="First Name" onChange={(e) => setName({ ...name, firstName: e.target.value })} />
                <input type="text" placeholder="Last Name" onChange={(e) => setName({ ...name, lastName: e.target.value })} />
                <button onClick={e=>handleSubmit(e)}>Submit</button>
{/* 
                <input type="text" onChange={(e)=> setName({firstName:e.target.value, lastName: ""})} value={name.firstName} />
                <input type="text"  onChange={(e)=> setName({firstName:"", lastName: e.target.value})} value={name.lastName} /> */}
            </form>
        </>
    )
}