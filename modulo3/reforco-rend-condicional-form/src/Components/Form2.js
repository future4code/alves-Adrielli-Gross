import React from "react";
import { useState } from "react";
import styled from 'styled-components'

const TextStyle = styled.div`

`

export default function Form2() {
  return (
    <>
        <TextStyle>Etapa 2 - Informações do ensino superior</TextStyle>
        <p>Qual o curso?</p>
        <input placeholder='Curso'/>
        <p>Qual a unidade de ensino?</p>
        <input placeholder='Nome da faculdade'/>
        <br/>
        <br/>
        <button>Próxima página</button>
    </>
  )
}
