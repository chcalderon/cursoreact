import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en CounterApp', () => { 
    const maxValue= 100;
    const initialValue= 20;

    test('debe hacer match con el snapshot', () => {
        const { container } = render(
            <CounterApp value={ initialValue } />
        );
        expect(container).toMatchSnapshot();

    })

    test('debe de mostrar el valor inicial de 100', () => {
        render(
            <CounterApp value={ maxValue } />
        );
        // expect(screen.getByRole('heading', { level: 2 })
        //                      .innerHTML.trim()
        //       ).toBe('100');
        expect( screen.getByText( maxValue ) ).toBeTruthy();
    })

    test('debe de incrementar con el boton +1', () => {
        render(
            <CounterApp value={ initialValue } />
        );
        fireEvent.click( screen.getByText('+1') );
        expect(screen.getByText('21')).toBeTruthy();
    })

    test('debe de decrementar con el boton -1', () => {
        render(
            <CounterApp value={ initialValue } />
        );
        fireEvent.click( screen.getByText('-1') );
        // screen.debug();
        expect(screen.getByText('19')).toBeTruthy();
    })

    test('debe de funcionar el boton de reset', () => {
        render(
            <CounterApp value={ initialValue } />
        );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        // fireEvent.click( screen.getByText('Reset') );
        fireEvent.click(screen.getByRole('button',{ name: 'btn-reset'}));
        screen.debug();
        expect(screen.getByText(initialValue)).toBeTruthy();
    })

 })