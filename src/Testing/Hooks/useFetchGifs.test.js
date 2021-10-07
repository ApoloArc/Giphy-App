import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from '../../Components/Hooks/useFetchsGifs'

describe('Probando el useFetchGifs', () => {
    
    test('Prueba en el contenido del custom hook', () => {
        
        const {result} = renderHook(()=> useFetchGifs('One Punch'));

        const{data, loading} = result.current;
        expect(data).toEqual([]);
        expect(loading).toBe(true);

    })
    
})
