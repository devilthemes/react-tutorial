export const getAllProducts = ()=>{
    return fetch('https://fakestoreapi.com/products?limit=9')
            .then(res=>res.json())
}