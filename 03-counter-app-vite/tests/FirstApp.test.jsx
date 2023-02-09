import {render} from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('pruebas en FirstApp', () => { 
    // test('debe hacer match con el snapshot', () => { 
    //     const title = 'Hola, soy Goku';
    //     const {container, getByText} = render( <FirstApp title={title} /> );
    //     // console.log(container); 
    //     expect(container).toMatchSnapshot();
        
    //  })

    //  test('debe hacer match con el h1', () => { 
    //     const title = 'Hola, soy Goku';
    //     const {container, getByText} = render( <FirstApp title={title} /> );
    //     // console.log(container); 
    //     expect(getByText(title)).toBeTruthy();

    //     const h1 = container.querySelector('h1');
    //     //Se busca que contenga el texto, ya que puede venir con espacios
    //     expect(h1.innerHTML).toContain(title);

    //  })

     test('debe hacer match con el h1', () => { 
        const title = 'Hola, soy Goku';
        const {container, getByText, getByTestId} = render( <FirstApp title={title} /> );
        expect(getByText(title)).toBeTruthy();

        // const h1 = container.querySelector('h1');
        
        expect(getByTestId('test-title').innerHTML).toContain(title);

     })

     test('debe de mostrar el subtitulo enviado por props', () => { 
        const title = 'Hola, soy Goku';
        const subTitle = 'Soy un subtitulo';
        const { getAllByText } = render( 
            <FirstApp
                title={title} 
                subTitle= {subTitle}
            /> 
        );
        // expect(getAllByText(subTitle)).toBeTruthy();
        expect(getAllByText(subTitle).length).toBe(2);

     })
     
 })