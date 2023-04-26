import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"

describe('Pruebas en el useCounter', () => { 
    
    test('should retornar los valores por defecto', () => { 
        
        const { result } = renderHook( () => useCounter() );
        // console.log(result);
        const { counter, decrement, increment, reset } = result.current;

        expect( counter ).toBe(10);
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( increment ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );

     });

     test('should generar el counter con el valor de 100', () => { 
        
        const { result } = renderHook( () => useCounter(100) );
        // console.log(result);
        const { counter, decrement, increment, reset } = result.current;

        expect( counter ).toBe(100);
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( increment ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );

     })

     test('should incrementar el contador', () => { 
        const { result } = renderHook( () => useCounter(100) );
        // console.log(result);
        const { counter, increment } = result.current;
        
        act( () => {
            increment();
            increment(2);
        } );

        expect(result.current.counter).toBe(103);

      })


      test('should decrementar el contador', () => { 
        const { result } = renderHook( () => useCounter(100) );
        // console.log(result);
        const { counter, decrement } = result.current;
        
        act( () => {
            decrement();
            // decrement(2);
        } );

        expect(result.current.counter).toBe(99);

      })

      test('should reset el contador', () => { 
        const { result } = renderHook( () => useCounter(100) );
        // console.log(result);
        const { counter, reset } = result.current;
        
        act( () => {
            reset();
            // decrement(2);
        } );

        expect(result.current.counter).toBe(100);

      })
 })