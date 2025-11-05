let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

function calcularMediaAtletas(atletas) {
  for (let i = 0; i < atletas.length; i++) {
    let atleta = atletas[i];
    let notas = atleta.notas;
    
    // Ordena as notas em ordem crescente
    let notasOrdenadas = notas.slice().sort((a, b) => a - b);
    
    // Remove a menor e a maior nota (primeira e última após ordenação)
    let notasComputadas = notasOrdenadas.slice(1, 4);
    
    // Calcula a soma das notas válidas
    let soma = 0;
    notasComputadas.forEach(function(nota) {
      soma = soma + nota;
    });
    
    // Calcula a média
    let media = soma / notasComputadas.length;
    
    // Exibe os resultados
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${notas.join(',')}`);
    console.log(`Média Válida: ${media}`);
    console.log('');
  }
}

// Executa a função
calcularMediaAtletas(atletas);