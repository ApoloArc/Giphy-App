import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const SearchBar = ({setCategories}) => {

    const [busqueda, setBusqueda] = useState('');
    
    const cambioBusqueda = (e)=>{
        setBusqueda(e.target.value);
    }

    const sinRefresh = e =>{
        e.preventDefault();
        
        setCategories(e=>[busqueda, ...e]);
        setBusqueda('');
    }

    return (
        <form onSubmit={sinRefresh}>
            <input
            type='text'
            placeholder='Busca algo'
            value={busqueda}
            onChange={cambioBusqueda}
            >
            </input>
        </form>
    )
}

SearchBar.propTypes= {
    setCategories: PropTypes.func.isRequired,
}