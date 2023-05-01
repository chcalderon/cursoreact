import { render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples";

describe('Pruebas en <MultipleCustomHooks />', () =>  {
    test('Debe de mostrar el componente por defecto', () => {
        
        render(<MultipleCustomHooks />);
        screen.debug();

        expect( screen.getByText('Loading...'));
        expect( screen.getByText('BreakingBad Quotes'));

        const nexButton = screen.getByRole('button',{ name: 'Next quote' });
        expect( nexButton.disabled).toBeTruthy();
        
    });    
});