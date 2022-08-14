export const List = () => {
  const tarefas = [{
    tarefa: 'React',
    tempo: '02:00:00'
  }, {
    tarefa: 'TypeScript',
    tempo: '01:00:00'
  }, {
    tarefa: 'JavaScript',
    tempo: '03:00:00'
  }]

  return(
    <aside>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            <h3>
              {tarefa.tarefa}
            </h3>
            <span>
              {tarefa.tempo}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  )
}