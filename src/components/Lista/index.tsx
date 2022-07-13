import React from "react";

function Lista() {
  const Tarefas = [
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "Javascipt",
      tempo: "01:00:00",
    },
    {
      tarefa: "Typescript",
      tempo: "03:00:00",
    },
  ];

  return (
    <aside>
      <h2> Estudos do dia </h2>
      <ul>
        {Tarefas.map((item, index) => (
          <li>
            <h3>{item.tarefa}</h3>
            <span>{item.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
