import React, { useState } from 'react';
import './styles/styleForm.css';
import logo_sena from '../img/logo-SENA.png';
import axios from 'axios';

const Form = () => {
	const [body, setBody] = useState({ user: '', password: '' });
	const inputChange = ({ target }) => {
		const { name, value } = target;
		setBody({
			...body,
			[name]: value,
		});
	};

	const onSubmit = () => {
		axios
			.post('http://localhost:3000/api/login', body)
			.then(({ data }) => {
				console.log(data);
			})
			.catch(({ response }) => {
				console.log(response);
			});
	};

	return (
		<form action='/login' method='get'>
			<div className="c-left"></div>
			<label>
				<img src={logo_sena}></img>
				<span>Usuario:</span>
				<div className="container">
					<input
						type="text"
						name="user"
						id="name"
						placeholder="Nombre"
						value={body.user}
						onChange={inputChange}
					/>
					<i className="bi bi-person-circle"></i>
				</div>

				<span id="password">Contraseña:</span>
				<div className="container">
					<input
						type="password"
						name="password"
						placeholder="Contraseña"
						value={body.password}
						onChange={inputChange}
					/>
					<i className="bi bi-key"></i>
				</div>
				<input type="text" onClick={onSubmit} />

				<button
					type="submit"
					value="Submit"
					onClick={onSubmit}
					className="submit"
				>
					Ingresar
				</button>
			</label>
		</form>
	);
};

export default Form;
