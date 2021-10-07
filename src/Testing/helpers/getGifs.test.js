import { getGifs } from "../../Components/Helpers/GetGifs";

describe('recibe el parametro category', () => {
    
    test('debe de traer 15 gifs a la pantalla', async() => {
        
        const gif = await getGifs('One Punch');
        expect(gif.length).toBe(15);

    })
    
})
