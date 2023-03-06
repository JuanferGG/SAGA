import React from 'react';
import './styles/styleForm.css';
import logo_sena from '../img/logo-SENA.png'



const Form = () => {
    return (
        <form>
            <div className='c-left'></div>
            <label>
            <img src={logo_sena}></img>
                <span>Nombre:</span>
                <input type="text" name="name" id='name' placeholder='Nombre'/>
                <span id='password'>Contraseña:</span>
                <input type="password" name="password" placeholder='Contraseña'/>
                
                <input type="submit" value="Submit" className='submit' />
            </label>
        </form>
    );
}

export default Form;