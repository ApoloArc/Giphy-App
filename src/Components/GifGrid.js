import { GifTemplate } from './GifTemplate';
import { useFetchGifs } from './Hooks/useFetchsGifs';
import PropTypes from 'prop-types';


const GifGrid = ({category}) => {
    
    const {data:images, loading} = useFetchGifs(category);

    return (
        <div>
            <h3 className='titulo-category'>{category}</h3>
            {loading && <p className='animate__animated animate__fadeInDown'>Cargando, espera compare...</p>}
            <div className='grid'>
            {
               images.map(img => <GifTemplate key={img.id} {...img}/>)
            }
            </div>
        </div>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid
