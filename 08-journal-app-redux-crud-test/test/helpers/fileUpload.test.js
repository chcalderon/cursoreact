import { fileUpload } from '../../src/helpers/fileUpload';
import { v2 as cloudinary } from 'cloudinary';


cloudinary.config({
    cloud_name: 'dwcxg4mmx',
    api_key: '441656473168463',
    api_secret: 'MuhFVnFzhifstH8DhqMJJjLwQKU',
    secure: true
})

describe('Pruebas en fileUpload', () => { 
    
    test('debe de subir el archivo correctamente', async() => {
        const imageUrl = 'https://images.unsplash.com/photo-1533450718592-29d45635f0a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';

        const resp = await fetch( imageUrl );
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');
        
        const url = await fileUpload ( file );
        expect ( typeof url ).toBe('string');
        // expect ( typeof imageUrl ).toBe('string');
        
        // console.log(url);
        const segments = url.split('/');
        const imageId = segments[segments.length-1].split('.')[0];
        await cloudinary.api.delete_resources([ 'journal/' + imageId ], {
            resource_type: 'image'
        });
        
    });

    test('debe de retornar null', async() => {
        const file = new File([], 'foto.jpg');
        const url = await fileUpload ( file );
        expect ( url ).toBe(null);
    });

 });