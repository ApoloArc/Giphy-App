import {shallow} from 'enzyme';
import GifGrid from '../../Components/GifGrid';
import { useFetchGifs } from '../../Components/Hooks/useFetchsGifs';
import '@testing-library/jest-dom'


describe('Pruebas para el GifGid', () => {
    
    const category = 'Hola Mundo';
    const wrapper = shallow(<GifGrid category={category}/>)

    test('debe de tomar el snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
})