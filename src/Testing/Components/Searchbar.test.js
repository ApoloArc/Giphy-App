import {shallow} from 'enzyme'
import { SearchBar } from '../../Components/SearchBar';

describe('Probando el SearchBar', () => {
    

    const setCategories = jest.fn();
        
    let wrapper = shallow(<SearchBar setCategories={setCategories}/>);

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<SearchBar setCategories={setCategories}/>);
    })

    test('Aprobar la funcion SetCategory', () => {

        expect(wrapper).toMatchSnapshot();
    })

    test('debe de funcionar el input', () => {
        
        const input = wrapper.find('input');

        const value = 'Hola giles';

        input.simulate('change', {target: {value}})
    
    })
    
    test('No debe ser llamado el input ni una vez', () => {
        
        wrapper.find('form').simulate('submit', {preventDefault(){}})

        expect(setCategories).not.toHaveBeenCalled();

    })
    
    test('debe de llamar el SetCategories y limpiar la caja', () => {
        
        const input = wrapper.find('input');

        const value = 'Hola Mundo';       
        input.simulate('change', {target: {value}})
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(wrapper.find('input').prop('value')).toBe('');
    })
    
})
