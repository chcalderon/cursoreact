

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New york',
        zip: 5553213,
        lat: 14.32345,
        long: 34.9877876
    }
};
//console.table(persona);

const persona2= {...persona};
persona2.nombre= 'Peter';

console.log(persona);
console.log(persona2);