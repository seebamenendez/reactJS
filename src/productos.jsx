export const productos = [
    {
        precio: 2690,
        id: "1",
        nombre: "Campera ORIGEN",
        foto: "./multimedia/newIn/IMG_001.JPG",
        stock: "9",
        coleccion: "Lucida"
    },
    {
        precio: 2400,
        id: "2",
        nombre: "Vestido NATIVO",
        foto: "./multimedia/newIn/IMG_003.JPG",
        stock: "9",
        coleccion: "Lucida"
    },
    {
        precio: 1990,
        id: "3",
        nombre: "Camisa OVER",
        foto: "./multimedia/newIn/IMG_004.JPG",
        stock: "9",
        coleccion: "Lucida"
    },
    {
        precio: 1700,
        id: "4",
        nombre: "Básica Algodón",
        foto: "./multimedia/newIn/IMG_005.JPG",
        stock: "9",
        coleccion: "Lucida"
    },
    {
        precio: 2390,
        id: "5",
        nombre: "Sobrecamisa - PANTS",
        foto: "./multimedia/newIn/IMG_006.JPG",
        stock: "9",
        coleccion: "Lucida"
    },
    {
        precio: 2690,
        id: "6",
        nombre: "Campera ORIGEN",
        foto: "./multimedia/newIn/IMG_002.JPG",
        stock: "9",
        coleccion: "Lucida"
    },
    {
        precio: 2390,
        id: "7",
        nombre: "Sobrecamisa - PANTS",
        foto: "./multimedia/newIn/IMG_007.JPG",
        stock: "9",
        coleccion: "Origen"
    },
    {
        precio: 2100,
        id: "8",
        nombre: "Sobrecamisa GALOPE",
        foto: "./multimedia/newIn/IMG_008.JPG",
        stock: "9",
        coleccion: "Origen"
    },
    {
        precio: 2390,
        id: "9",
        nombre: "Pantalón ORION",
        foto: "./multimedia/newIn/IMG_009.JPG",
        stock: "9",
        coleccion: "Transitar"
    },
    {
        precio: 2690,
        id: "14",
        nombre: "Campera ORIGEN",
        foto: "./multimedia/newIn/IMG_001.JPG",
        stock: "9",
        coleccion: "Origen"
    },
    {
        precio: 2690,
        id: "10",
        nombre: "Campera ORIGEN",
        foto: "./multimedia/newIn/IMG_002.JPG",
        stock: "9",
        coleccion: "Transitar"
    },
    {
        precio: 2400,
        id: "12",
        nombre: "Vestido NATIVO",
        foto: "./multimedia/newIn/IMG_003.JPG",
        stock: "9",
        coleccion: "Transitar"
    }
]

export const getFetch = new Promise((resolve, reject)=>{
    // acciones
    let condicion = true
    if(condicion){
        setTimeout(()=>{
            resolve(productos)
        }, 3000)
    }else{
        reject('error')
    }
})
