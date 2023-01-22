import React from "react"
import { useState } from "react"
import '../componentes/Formulario.css'
import './Lista/Planilla.css'


const Formulario = () => {

  const [nombre, setNombre] = useState ("");
  const [apellido, setApellido] = useState ("");
  const [email, setEmail] = useState ("");
  const [password, setPassword] = useState ("");
  const [confirmPassword, setConfirmPassword] = useState ("");

  return (
    <>
    <form className="contenedor-formulario"  >
      <div className="Contenedor">
        <label htmlFor="nombre"> First Name  </label>
        <input type="text" value={nombre} onChange ={(e) =>  setNombre(e.target.value)} className="cuadro" placeholder="Search"/>
      </div>
      {
        nombre.length <2 && nombre.length !==0 ?
        <p className="errortexto">First Name must be least 2 charactes</p>
        :
        null
      }
    
      <div className="cuadroApellido">
        <label htmlFor="apellido">Last Name  </label>
        <input type="text" value={apellido} onChange ={(e) => setApellido(e.target.value)}  className="cuadro" placeholder="Search"/>
      </div>
      {
        apellido.length <2 && apellido.length !== 0?
        <p className="errortexto">First Name must be least 2 charactes</p>
        :
        null
      }
      <div className="Contenedor">
        <label htmlFor="email" className="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="cuadro"  placeholder="Search"/>
      </div>
      {
        email.length <2 && email.length !==0 ?
        <p className="errortexto">First Name must be least 2 charactes</p>
        :
        null
      }
      <div className="cuadrocontraseña">
        <label htmlFor="password" className="contraseña">Password</label>
        <input type="password" className="cuadro" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Search"/>
      </div>
      {
        password.length <8 && password.length !==0?
        <p className="errortexto">Password must be at least 8 characters </p>
        :
        null
      }
      <div className="cuadrocontraseña2">
        <label htmlFor="confirmPassword" className="texto">Confirm <hr/> Password</label>
        <input type="password" className="cuadro4" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Search"/>
      </div>
      {
        password !== confirmPassword ?
        <p className="errortexto">Incorrecto </p>
      :
        null
      }
    </form>
    <div className="imprimir">
    <h6 className="titulo"> Your Form Data</h6>
      <h6 className="planilla">First Name {nombre}</h6>
      <h6 className="planilla">Last Name {apellido}</h6>
      <h6 className="planilla">Email {email}</h6>
      <h6 className="planilla">Password {password}</h6>
      <h6 className="planilla" >Confirm <hr/> Password {confirmPassword}</h6>
    </div>

    </>
  )
}

export default Formulario