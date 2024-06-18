import { useParams } from "react-router-dom";
export const DynamicProduct = (props)=>{
    const {id} = useParams();
   
return <>
    <h1>Fruits :{id}</h1>    
    <p>
        
    </p>
</> 
}
   