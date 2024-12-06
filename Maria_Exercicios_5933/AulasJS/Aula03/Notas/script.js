const alunos = [
    {nome:'Ana', notas: [8, 9, 7]},
    {nome:'João', notas:[6, 8, 5]}
];

alunos.forEach(aluno => {
    aluno.media = aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length;
  });

  const aprovados = alunos.filter(aluno => aluno.media >= 7);
  console.log(aprovados);
    
const alunosMedia = alunos.map(aluno => {
    return{
        ...aluno, 
        media:aluno.notas.reduce((acc, nota) => acc + nota, 0)/ aluno.notas.length
    }})
