import React, { useEffect, useState } from "react";
import { FormGroup } from "reactstrap";
import { Col, Form, Label, Input, Button } from "reactstrap";
import firebase from "../../Lib/firebase";

const Create = () => {
    // crear función para obtener la información del formulario a través de un estado.
    const [ informacionFormulario, setInformacionFormulario] = useState({})
    // varibales que contiene la conexión de la base de datos y la referencia con la colección creada
    const basedatos = firebase.database()
    const refEntradas = basedatos.ref('/Entradas')
    // Usar función del estado useEffect para generar conexión con la base de datos.
    useEffect( () => {
        console.log("componente cargado")
        refEntradas.on('value', snapshot => {
            console.log( snapshot.val())
        })
    }, [])


    // crear función que manipula a través de evento el cambio de información de un input.
    const changeHandler = event => {
        const atributo = event.target.name 
        const valor = event.target.value
        console.log (atributo, valor)
        setInformacionFormulario({...informacionFormulario,[atributo]:valor})
        
    }
    const guardarInformacion = () =>{
        console.log(informacionFormulario)
        refEntradas.push(informacionFormulario)
    }
  return (
    <Col xs="12">
      <h1>Crear</h1>
      <Form className="bg-dark my-3 rounded text-white p-3">
        <FormGroup>
          <label>Título</label>
          <Input name="titulo" onChange={ changeHandler }/>
        </FormGroup>
        <FormGroup>
          <label>Contenido</label>
          <Input name="contenido" onChange={ changeHandler }/>
        </FormGroup>
        <FormGroup>
          <label>Imagen</label>
          <Input name="imagen" onChange={ changeHandler }/>
        </FormGroup>
        <Button type="button" color="light" className="mt-3" onClick={ guardarInformacion }>Guardar</Button>
      </Form>
    </Col>
  );
};
export default Create;
