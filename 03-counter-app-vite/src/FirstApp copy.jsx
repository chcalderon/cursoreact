// const newMessage = {
//     message: 'Hola Mundo',
//     title: 'Fernando'
// };
export const FirstApp = () => {
    
    const getResult = (a,b) => {
        return a + b;
    }

    
    return (
    <>
    <h1>{getResult(1,10)}</h1>
    {/* <code>{ JSON.stringify( newMessage )}</code> */}
    <p>Soy un subtitulo</p>
    </>
  )
}
export default FirstApp;