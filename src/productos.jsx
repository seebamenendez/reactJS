export const productos = [
    {
        precio: 2690,
        id: "1",
        titulo: "Campera ORIGEN",
        foto: "multimedia/newIn/IMG_001.JPG"
    },
    {
        precio: 2400,
        id: "2",
        titulo: "Vestido NATIVO",
        foto: "multimedia/newIn/IMG_003.JPG"
    },
    {
        precio: 1990,
        id: "3",
        titulo: "Camisa OVER",
        foto: "multimedia/newIn/IMG_004.JPG"
    },
    {
        precio: 1700,
        id: "4",
        titulo: "Básica Algodón",
        foto: "multimedia/newIn/IMG_005.JPG"
    },
    {
        precio: 2390,
        id: "5",
        titulo: "Sobrecamisa - PANTS",
        foto: "multimedia/newIn/IMG_006.JPG"
    },
    {
        precio: 2690,
        id: "6",
        titulo: "Campera ORIGEN",
        foto: "multimedia/newIn/IMG_002.JPG"
    },
    {
        precio: 2390,
        id: "7",
        titulo: "Sobrecamisa - PANTS",
        foto: "multimedia/newIn/IMG_007.JPG"
    },
    {
        precio: 2100,
        id: "8",
        titulo: "Sobrecamisa GALOPE",
        foto: "multimedia/newIn/IMG_008.JPG"
    },
    {
        precio: 2390,
        id: "9",
        titulo: "Pantalón ORION",
        foto: "multimedia/newIn/IMG_009.JPG"
    },
    {
        precio: 2690,
        id: "14",
        titulo: "Campera ORIGEN",
        foto: "multimedia/newIn/IMG_001.JPG"
    },
    {
        precio: 2690,
        id: "10",
        titulo: "Campera ORIGEN",
        foto: "multimedia/newIn/IMG_002.JPG"
    },
    {
        precio: 2400,
        id: "12",
        titulo: "Vestido NATIVO",
        foto: "multimedia/newIn/IMG_003.JPG"
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
