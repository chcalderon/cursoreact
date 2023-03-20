import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../components"

describe('Pruebas en <AddCategory/>', () => { 
    test('should change value of textbox', () => { 
            render( <AddCategory onNewCategory={ ()=>{}}/>);
            const input =screen.getByRole('textbox');
            fireEvent.input( input, { target: { value: 'Saitama'} } );
            
            expect( input.value ).toBe('Saitama');
            // screen.debug();

        });

    test('should llamar onNewCategory si el input tiene un valor ', () => { 
        
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();
        
        
        render( <AddCategory onNewCategory={ onNewCategory }/>);
        
        const input =screen.getByRole('textbox');
        const form =screen.getByRole('form');
        
        fireEvent.input( input, { target: { value: inputValue } } );

        fireEvent.submit( form );

        expect(input.value).toBe('');

        // screen.debug();

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

     });

     test('debe de llamar el onNewCategory si el input esta vacio', () => { 
        
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory }/>);
        
        const form =screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();
        
        
      })

 })