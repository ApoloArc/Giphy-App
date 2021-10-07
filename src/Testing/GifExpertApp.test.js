import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Haciendo pruebas en el Expert App', () => {
    
    const wrapper = shallow(<GifExpertApp/>)

    test('Tomar el snapshot', () => {
        
        expect(wrapper).toMatchSnapshot();

    })
    
    test('Debe de pasar las categories que se le manden', () => {
        
        const categories = ['Dragon Ball', 'El Chavo del 8'];
        const wrapper = shallow(<GifExpertApp defaultCategories = {categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    })
    

})
