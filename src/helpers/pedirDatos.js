import { productos } from "../data/mock_data"


export  const pedirDatos=()=>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(productos)


        },2000)



    })
}