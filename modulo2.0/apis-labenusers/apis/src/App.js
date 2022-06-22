import React from 'react';
import axios from 'axios';
import telacadastro from './components/telacadastro';
import telalistauser from './components/telalistauser'


export default class App extends React.Component() {
  state = {
    telaAtual: 'cadastro',
  }

  escolheTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <telacadastro irParaLista={this.irParaLista} />
      case "lista":
        return <telalistauser irParaCadastro={this.irParaCadastro} />
      default:
        return <div>Erro! Página não encontrada.</div>
    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }

  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }

  render() {
    return (
      <div>
        {this.escolheTela()}
      </div>

    )
  }
}