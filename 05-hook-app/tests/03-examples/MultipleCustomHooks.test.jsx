import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () =>  {
    
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach( () => {
        jest.clearAllMocks();
    });
    
    test('Debe de mostrar el componente por defecto', () => {
        
        useFetch.mockReturnValue({data: null,
            isLoading: true,
            hasError: null});

        render(<MultipleCustomHooks />);
        // screen.debug();

        expect( screen.getByText('Loading...'));
        expect( screen.getByText('BreakingBad Quotes'));

        const nexButton = screen.getByRole('button',{ name: 'Next quote' });
        expect( nexButton.disabled).toBeTruthy();
        
    });    

    test('Debe de mostrar un Quote', () => { 
        
        useFetch.mockReturnValue({
            data: [{ author: 'Fernando', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        });
        
        render(<MultipleCustomHooks />);
        // screen.debug();
        expect( screen.getByText('Hola Mundo') ).toBeTruthy();
        expect( screen.getByText('Fernando') ).toBeTruthy();

        const nexButton = screen.getByRole('button',{ name: 'Next quote' });
        expect( nexButton.disabled).toBeFalsy();

     });

     test('debe de llamar la funcion incrementar', () => { 
        
        useFetch.mockReturnValue({
            data: [{ author: 'Fernando', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        });


        render(<MultipleCustomHooks />);
        const nexButton = screen.getByRole('button',{ name: 'Next quote' });
        fireEvent.click( nexButton );
        expect( mockIncrement ).toHaveBeenCalled();

      });

});