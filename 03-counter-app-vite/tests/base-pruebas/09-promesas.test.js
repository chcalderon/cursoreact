import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => { 
    test('getHeroeByIdAsync debe de retornar un Héroe', (done) => { 
        const id = 1;
        const heroeAsync = getHeroeByIdAsync( id )
                               .then(hero => {
                                    expect(hero).toEqual({
                                        id: 1,
                                        name: 'Batman',
                                        owner: 'DC'
                                    });
                                    done();
        })


     })

     test('getHeroeByIdAsync debe de retornar un Error si heroe no existe', (done) => { 
        const id = 100;
        const heroeAsync = getHeroeByIdAsync( id )
                                .catch( error => {
                                    console.log(error);
                                    done();
                                })
                               


     })
 })