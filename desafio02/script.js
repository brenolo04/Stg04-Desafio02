  const students = [
    {
      name: 'Breno',
      score1: 9,
      score2: 4
    },
    {
      name: 'Eduardo',
      score1: 3,
      score2: 5
    },
    {
      name: 'Angela',
      score1: 7,
      score2: 8
    },
    {
      name: 'Giovana',
      score1: 7,
      score2: 9
    },

  ]

  // Separa cada aluno em objeto da array
  // Vai fazer um alert para cada aluno
  for(let student of students) { 
    
    //calcula a média
    function Avarage (score1, score2) {
      let total = 0
        total = (score1 + score2) / 2
      return total
    }
    
    //Recebe o dado da função
    let calcAvarage = Avarage(student.score1, student.score2).toFixed(1)

    // Mensagem padrão do sistema
    let msgAvarage = 'A média do(a) aluno(a) ' + student.name + ' foi: ' + calcAvarage   
    

    // Controle de fluxo para média
    if(calcAvarage >= 7){
      alert(`${msgAvarage}
    Parábens ${student.name}! Você foi aprovado(a) no curso!
      `)
    }
    else{
      alert(`${msgAvarage}
    Não foi dessa vez ${student.name}! Tente novamente!
      `)
    }
  }