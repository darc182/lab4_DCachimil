//laboratorio 4
//Pagina Fybeca

//Objetos
const registroCliente = {
    cedula: 1752586,
    nombres: 'Darwin Fabian',
    apellidos: 'Cachimil Chancusig',
    movil: '09535575',
    genero: 'hombre',
    password: '*******',
    correo: 'darwin@email.com'

}

console.log(registroCliente.nombres);
console.log(registroCliente.cedula);

const {cedula, nombres, correo} = registroCliente
console.log(cedula);
console.log(nombres);

registroCliente.foto = 'user1.jpg'
console.log(registroCliente);

delete registroCliente.genero

Object.values(registroCliente).includes("") ? console.log('Error'): console.log('OK');



const med1 = {
    nombre: 'avodart.caps',
    precio: 37.20
}

const med2 = {
    nombre: 'arados caja x',
    precio: 11.40
}

const ordenes = {...med1, ...med2}
console.log(ordenes);



//Arrays

const bolsa = [
    {
        imagen: 'foto1.jpg',
        nombreProducto: 'Avodart .Caps',
        descripcion: '0.5Mg / 30 caja',
        costo: 37.50
    },

    {
        imagen: 'foto2.jpg',
        nombreProducto: 'Urex .tabs',
        descripcion: '200mg / 20 caja',
        costo: 37.50 
    },
    
    {
        imagen: 'foto3.jpg',
        nombreProducto: 'Gel limpiador',
        descripcion: '400 ml  unidad',
        costo: 33.16
    },

    {
        imagen: 'foto4.jpg',
        nombreProducto: 'Arados caja x',
        descripcion: '50Mg / 30 caja',
        costo: 11.40
    }
]


bolsa.forEach((a,i)=>{console.log(`${i + 1} - ${a}`)})
bolsa.forEach((a, i)=>{console.log(`${i + 1} ${a.nombreProducto} ${a.precio}`);})


const orden = bolsa.map((a)=>{ 
    return{
        nombre: a.nombreProducto,
        costo: a.costo
    }
})



const [orden1 , orden2, orden3] = bolsa

const ordenNueva1 = {
        imagen: 'foto5.jpg',
        nombreProducto: 'Eucerin sun kids',
        descripcion: 'spf 50 200ml',
        costo: 38.20
}


const ordenNueva2 = {
    imagen: 'foto6.jpg',
    nombreProducto: 'Serum effaclar ultra',
    descripcion: 'piel grasa 30ml',
    costo: 42.77
}

bolsa.push(ordenNueva1)


const todasLasOrdenes = [...bolsa, ...ordenNueva2]
