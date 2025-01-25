import { useParams } from "react-router-dom"

export default function Product(){
    const {id,slug} = useParams();
    return <>
    Product list id : {id} {slug}
    </>
}