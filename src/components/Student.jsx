export default function Student({name,age,location}){
    return <>
        {age > 10 ? <li>{name} {age} {location}</li>:""}
    </>
}