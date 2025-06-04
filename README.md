# Todo List App 📝

[![Website](https://img.shields.io/badge/🌍&nbsp;&nbsp;Visite-Website-4285f4?style=flat-square&logo=globe)](https://staging.d3drvlzroj12nd.amplifyapp.com/)

Aplicação web moderna desenvolvida com Angular para gerenciamento de tarefas, oferecendo uma experiência de usuário intuitiva e responsiva.

link da aplicação: [CLIQUE AQUI](https://staging.d3drvlzroj12nd.amplifyapp.com/)

## 👥 Integrantes do Grupo

- Davi Cardoso Rhee
- Douglas Rodrigues Toledo
- João Pedro de Novais Sombra
- Luiz Felipe Correa Soares
- Thiago da Silveira Gentil

## 📝 Descrição do Projeto

Este projeto é uma aplicação web moderna para gerenciamento de tarefas (Todo List) que permite aos usuários:

- Criar, editar, completar e excluir tarefas
- Adicionar descrições detalhadas usando Markdown
- Adicionar comentários em tarefas
- Reordenar tarefas através de drag and drop
- Alternar entre temas claro e escuro
- Persistência de dados no localStorage

## 🛠️ Tecnologias Utilizadas

- **Framework:** Angular 20.0.0
- **Node:** 22.13.1
- **Package Manager:** NPM 11.1.0
- **Estilização:** SCSS
- **Drag and Drop:** @angular/cdk
- **Markdown:** ngx-markdown
- **Persistência:** LocalStorage
- **Controle de Versão:** Git + GitHub

## ✨ Funcionalidades

### Gerenciamento de Tarefas

- Criação de novas tarefas
- Marcação de tarefas como concluídas
- Exclusão de tarefas
- Reordenação via drag and drop

### Sistema de Detalhes

- Modal de detalhes por tarefa
- Editor de descrição com suporte a Markdown
- Sistema de comentários
- Visualização formatada de Markdown

### Temas e Personalização

- Alternância entre tema claro e escuro
- Transições suaves entre estados
- Interface responsiva e moderna
- Feedback visual para todas as interações

### Persistência

- Salvamento automático no localStorage
- Recuperação do estado ao recarregar
- Persistência de:
  - Lista de tarefas
  - Estado de conclusão
  - Descrições
  - Comentários
  - Ordem das tarefas
  - Preferência de tema

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- NPM (Node Package Manager)
- Angular CLI

### Passo a Passo

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Tgentil/todo-list.git
   ```

2. **Instale as dependências:**

   ```bash
   cd todo-list
   npm install
   ```

3. **Execute o projeto:**

   ```bash
   ng serve
   ```

4. **Acesse a aplicação:**
   - Abra o navegador e acesse `http://localhost:4200`

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── todo-list/
│   │   ├── todo-item/
│   │   └── todo-detail-modal/
│   ├── services/
│   │   ├── todo.service.ts
│   │   └── theme.service.ts
│   ├── models/
│   │   └── todo.model.ts
│   └── app.ts
```

## 💡 Funcionalidades do Markdown

O sistema suporta formatação Markdown nas descrições e comentários:

- `**texto**` para negrito
- `*texto*` para itálico
- `# Título` para títulos
- `- item` para listas
- `` `código` `` para código inline
- \```código\``` para blocos de código
- `[link](url)` para links

## 🎨 Temas

### Tema Claro

- Fundo claro e limpo
- Cores suaves e profissionais
- Alta legibilidade

### Tema Escuro

- Fundo escuro confortável
- Contraste otimizado
- Redução de fadiga visual

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
