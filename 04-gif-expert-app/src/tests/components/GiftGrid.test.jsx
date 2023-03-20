import { render, screen } from "@testing-library/react";
import { GiftGrid } from "../../components";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe('Oruebas en <GiftGrid />', () => { 
    
    const category = 'One Punch';
    
    test('debe de mostrar el loading inicialmente', () => { 
        
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render( <GiftGrid category={category}/> );
        expect(screen.getByText('...cargando'));
        expect(screen.getByText(category));

        // screen.debug();
     });

    test('debe de mostrar items cuando se cargan las imagenes mediante useFetchGifs', () => { 
        
        const gifs = [{
            id:'ABC',
            title:'Saitama',
            url: 'https://saitama.jpg'
        },
        {
            id:'123',
            title:'Goku',
            url: 'https://goku.jpg'
        }]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        render( <GiftGrid category={category}/> );

        expect( screen.getAllByRole('img').length ).toBe(2);
        
     })

 });