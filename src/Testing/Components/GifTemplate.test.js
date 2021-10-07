import React from 'react'
import {shallow} from 'enzyme'
import { GifTemplate } from '../../Components/GifTemplate'


describe('Debe de mostrar el <GifTemplate/>', () => {

    const title = 'Esto es un título';
    const url = 'https://apolo.com/img.jpg'

    const wrapper = shallow(<GifTemplate title={title} url={url}/>);

    test('Mostrar el componente correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de tener Animate', () => {
        
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes('animate__fadeInDown')).toBe(true);
    })
    

})
