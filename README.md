# 🏅 Sistema de Avaliação de Ginástica Artística

## 📋 Descrição do Projeto

Aplicação desenvolvida em JavaScript para calcular a média de notas de atletas em competições de ginástica artística. O sistema processa as avaliações de cinco jurados, desconsiderando a maior e menor nota para garantir uma avaliação justa e equilibrada.

## 🎯 Objetivo

Automatizar o cálculo de médias em competições de ginástica artística, seguindo as regras oficiais da competição onde cada atleta é avaliado por cinco jurados em diferentes critérios.

## 📐 Regras da Competição

1. **Avaliação**: Cada jurado fornece uma nota de 1 a 10
2. **Critérios avaliados**:
   - Tempo de duração da apresentação
   - Originalidade da coreografia
   - Postura do atleta
   - Dificuldade das acrobacias
   - Sincronismo

3. **Cálculo da média**: 
   - Desconsidera a maior nota
   - Desconsidera a menor nota
   - Calcula a média com as três notas restantes

## 🚀 Funcionalidades

- ✅ Recebe nome e notas de múltiplos atletas
- ✅ Ordena as notas automaticamente
- ✅ Remove a maior e menor nota
- ✅ Calcula a média válida
- ✅ Exibe resultados formatados no console

## 💻 Tecnologias Utilizadas

- JavaScript (ES6+)
- Node.js (para execução)

## 📦 Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/sistema-avaliacao-ginastica.git
```

2. Navegue até o diretório do projeto:
```bash
cd sistema-avaliacao-ginastica
```

3. Execute o arquivo JavaScript:
```bash
node notas-atletas.js
```

## 📝 Estrutura de Dados

```javascript
let atletas = [
  {
    nome: "Nome do Atleta",
    notas: [nota1, nota2, nota3, nota4, nota5]
  }
];
```

## 🔍 Exemplo de Uso

**Entrada:**
```javascript
let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  }
];
```

**Saída:**
```
Atleta: Cesar Abascal
Notas Obtidas: 10,9.34,8.42,10,7.88
Média Válida: 9.253333333333334
```

## 🛠️ Métodos JavaScript Utilizados

- `for` - Iteração sobre array de atletas
- `.slice()` - Cópia e seleção de elementos do array
- `.sort()` - Ordenação de notas
- `.forEach()` - Cálculo da soma das notas
- `.join()` - Formatação de saída
- `console.log()` - Exibição de resultados

## 📊 Lógica de Cálculo

1. Recebe as 5 notas do atleta
2. Ordena as notas em ordem crescente
3. Remove a primeira nota (menor) e a última nota (maior)
4. Calcula a média das 3 notas restantes
5. Exibe o resultado formatado

## 🎓 Aprendizados

Este projeto demonstra:
- Manipulação de arrays e objetos em JavaScript
- Uso de métodos nativos do JavaScript
- Lógica de programação aplicada
- Estruturação de dados
- Formatação de saída para o usuário

## 👨‍💻 Autor

Desenvolvido como parte de um desafio de programação.

## 📄 Licença

Este projeto está sob a licença MIT.

---

⭐ Desenvolvido com JavaScript
