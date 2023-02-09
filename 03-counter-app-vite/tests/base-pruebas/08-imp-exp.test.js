import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroeById debe retornar un heroe por ID', () => { 
        // const id= 1;
        // const hero = getHeroeById(id);
        // console.log(hero);
        // expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
        const id= 100;
        const hero = getHeroeById(id);
        
        expect( hero ).toBeFalsy(); // evalua nulo undefined y false
     })

     test('getHeroesByOwner debe retornar un arreglo con los héroes de DC', () => { 
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        console.log(heroes);
        expect( heroes.length ).toBe(3);
        expect( heroes ).toEqual(heroes.filter((heroe)=> heroe.owner === owner));
      })

      test('getHeroesByOwner debe retornar un arreglo con los héroes de Marvel', () => { 
        const heroes = getHeroesByOwner('Marvel');
        
        expect( heroes.length ).toBe(2);
      })
 })