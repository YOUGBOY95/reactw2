import React, { useState } from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { accountService } from "./account.service";

export const Connexion = (props) => {
    let navigate = useNavigate()
   // const [id, setid] = useState('');
   // const [pass, setPass] = useState('');
   const [credentials, setCredentials] = useState({
    email: 'test@gmail.com',
    pass: 'test'

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
        axios.post('https://reqres.in/api/connexion', credentials)
        .then(res => {
            console.log(res)
            accountService.saveToken(res.data.acces_token)
            Navigate('/New')
            
        })

        .catch(error => console.log(error))
        
    }

    return (
        <div className="auth-form-container">
            <h2>Connexion</h2>
            <form className="connexion-form" onSubmit={onSubmit}>

                <label htmlfor="id">Nom d'utilisateur :</label>
            <input value={credentials.email} onChange={onChange} type="id" placeholder=""  name="email" />
            <label htmlfor="password">Mot de passe :</label>
            <input value={credentials.pass} onChange={onChange} type="password" placeholder="" id="password" name="password" />
            <div className="link-btn"></div>
            <button>Connexion</button>
            </form>
            
                <header>
            <nav>
             <ul>
                <li><Link to="/Enregistrement">Vous n'avez pas de compte ? Inscrivez - vous ici.</Link></li>
             </ul>
            </nav>
            </header>
            </div>
         
    )
}