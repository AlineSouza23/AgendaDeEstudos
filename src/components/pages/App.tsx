import React, { useState } from 'react';
import { ITarefas } from '../../types/Tarefas';
import Botao from '../Botao';
import { Cronometro } from '../Cronometro';
import Formulario from '../Formulario';
import Lista from '../Lista';
import style from './app.module.scss'



function App() {
  const [tarefas, setTarefas] = useState <ITarefas[]>([])
  const [selecionado,setSelecionado] = useState<ITarefas>()

  function selecionaTarefa(tarefaSelecionada:ITarefas){
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa, 
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    
    })))
  }

  return (
    <div className={style.AppStyle}>
     <Formulario setTarefas = {setTarefas}/>
     <Lista tarefas={tarefas}
     selecionaTarefa={selecionaTarefa}/>
     <Cronometro
      selecionado = {selecionado}
     />
     <h1>Olá seus linduuusss</h1>
    </div>
  );
}

export default App;

