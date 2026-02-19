# 🐦 Mini Twitter: CRUD Lógico no Console

Este projeto é um exercício prático focado estritamente na lógica de programação utilizando JavaScript puro (Vanilla JS). Ao contrário de aplicações visuais, este código não possui interface gráfica (HTML/CSS) e funciona manipulando dados diretamente no console/terminal.

## 🎯 Objetivo do Estudo

O objetivo principal foi compreender a estrutura de dados e as operações de CRUD "por trás dos panos" (simulando um comportamento de Back-end), sem a distração da manipulação de telas (DOM). A ideia base foi criar um sistema simplificado de postagens de um mini Twitter.

## 💡 Destaques e Aprendizados

* **Estrutura de Dados em Objetos:** Uso de um objeto complexo (`miniTwitter`) contendo arrays internos (`usuarios` e `posts`) para simular um banco de dados relacional simples.
* **Manipulação de Arrays (JS Básico):**
  * Criação automática de IDs baseada no tamanho do array (`miniTwitter.posts.length + 1`).
  * Busca de elementos específicos usando o método `.find()`.
  * Exclusão de elementos recriando o array com o método `.filter()`.
* **Separação de Responsabilidades:** Criação de funções isoladas e claras para cada etapa do CRUD (`criarPost`, `pegaPosts`, `atualizaContentDoPost`, `apagaPost`).

## 🛠️ Tecnologias Utilizadas

* JavaScript (ES6+)
* Lógica Pura (Node.js / Browser Console)

## 🚀 Como executar

Como este código não possui tela, você tem duas opções para ver os resultados dos `console.log`:

**Opção 1: Usando o Node.js (Recomendado)**
1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado na sua máquina.
2. Abra o terminal (ou prompt de comando) dentro da pasta deste projeto.
3. Execute o comando: `node app.js` (ou o nome que você deu ao arquivo).
4. O resultado das operações aparecerá diretamente no seu terminal.

**Opção 2: Usando o Navegador**
1. Crie um arquivo `index.html` simples em branco nesta mesma pasta.
2. Adicione a tag `<script src="app.js"></script>` no HTML.
3. Abra o arquivo HTML no navegador, clique com o botão direito, vá em "Inspecionar" e abra a aba "Console" para ver os resultados.

## 🔗 Referências e Créditos
* Exercício inspirado nas aulas/conteúdos do Mario Souto (Dev Soutinho) - `#ConstruindoCRUDS`.