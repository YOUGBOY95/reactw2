import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Enregistrement = (props) => {
    //const [id, setid] = useState('');
    //const [pass, setPass] = useState('');
    //const [name, setName] = useState('');

    const [credentials, setCredentials] = useState({
        email: '',
        pass: ''
    
       })

       const onChange = (e) => {
        setCredentials({
          ...credentials,
          [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(credentials);
        axios.post('https://reqres.in/api/enregistrement', credentials)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }
        
    return (
        
    <div className="auth-form-container">
        <h2>Enregistrement</h2>
        <form className="enregistrement-form" onSubmit={onSubmit}>
            <label htmlfor="name">Nom complet :</label>
            <input value={credentials.name}  onChange={onChange} name="name" id="name" placeholder="" />
            <label htmlfor="id">Nom d'utilisateur :</label>
        <input value={credentials.id}  onChange={onChange} type="id" placeholder="" id="id" name="id" />
        <label htmlfor="password">Mot de passe :</label>
        <input value={credentials.pass}  onChange={onChange} type="password" placeholde="" id="password" name="password" />
        <button type="submit">Connexion</button>
        </form>
        <div className="link-btn">
                <header>
            <nav>
             <ul>
                <li><Link to="/Connexion">Vous avez un compte ? Connecter vous.</Link></li>
             </ul>
            </nav>
            </header>
            </div>
    </div>

    )
}