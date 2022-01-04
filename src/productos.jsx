export const productos = [
    {
        precio: 2690,
        id: 1,
        title: "Campera ORIGEN",
        thumbnailUrl: "multimedia/newIn/IMG_001.JPG"
    },
    {
        precio: 2400,
        id: 2,
        title: "Vestido NATIVO",
        thumbnailUrl: "multimedia/newIn/IMG_003.JPG"
    },
    {
        precio: 1990,
        id: 3,
        title: "Camisa OVER",
        thumbnailUrl: "multimedia/newIn/IMG_004.JPG"
    },
    {
        precio: 1700,
        id: 4,
        title: "Básica Algodón",
        thumbnailUrl: "multimedia/newIn/IMG_005.JPG"
    },
    {
        precio: 2390,
        id: 5,
        title: "Sobrecamisa - PANTS",
        thumbnailUrl: "multimedia/newIn/IMG_006.JPG"
    },
    {
        precio: 2690,
        id: 6,
        title: "Campera ORIGEN",
        thumbnailUrl: "multimedia/newIn/IMG_002.JPG"
    },
    {
        precio: 2390,
        id: 7,
        title: "Sobrecamisa - PANTS",
        thumbnailUrl: "multimedia/newIn/IMG_007.JPG"
    },
    {
        precio: 2100,
        id: 8,
        title: "Sobrecamisa GALOPE",
        thumbnailUrl: "multimedia/newIn/IMG_008.JPG"
    },
    {
        precio: 2390,
        id: 9,
        title: "Pantalón ORION",
        thumbnailUrl: "multimedia/newIn/IMG_009.JPG"
    },
    {
        precio: 2690,
        id: 14,
        title: "Campera ORIGEN",
        thumbnailUrl: "multimedia/newIn/IMG_001.JPG"
    },
    {
        precio: 2690,
        id: 10,
        title: "Campera ORIGEN",
        thumbnailUrl: "multimedia/newIn/IMG_002.JPG"
    },
    {
        precio: 2400,
        id: 12,
        title: "Vestido NATIVO",
        thumbnailUrl: "multimedia/newIn/IMG_003.JPG"
    }
]

export const traerProductos = new Promise ((resolve, reject) =>{
    setTimeout(() => {
        resolve(productos);
    }, 2000);
});