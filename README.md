# InfluencerHub - Assessoria de Influenciadores

Um site estático para gerenciar e exibir um portfólio de influenciadores digitais.

## 🚀 Como hospedar no GitHub Pages

### Passo a passo:

1. **Crie um novo repositório no GitHub**
   - Clique em "New repository"
   - Nome: `influencer-hub` (ou qualquer nome)
   - Marque como "Public"
   - Clique em "Create repository"

2. **Faça upload dos arquivos**
   - Clique em "uploading an existing file"
   - Arraste todos os arquivos:
     - `index.html`
     - `admin.html`
     - `styles.css`
     - `README.md`
   - Commit as mudanças

3. **Ative o GitHub Pages**
   - Vá em "Settings" do repositório
   - Role até "Pages" no menu lateral
   - Em "Source", selecione "Deploy from a branch"
   - Branch: "main"
   - Folder: "/ (root)"
   - Clique em "Save"

4. **Acesse seu site**
   - Aguarde alguns minutos
   - Seu site estará em: `https://seuusuario.github.io/nome-do-repositorio`

## ✨ Funcionalidades

### 🏠 Página Principal
- ✅ 12 influenciadores pré-cadastrados
- ✅ Cards clicáveis com modal de detalhes
- ✅ Contatos diretos (email, telefone, WhatsApp)
- ✅ Design responsivo

### ⚙️ Página de Administração
- ✅ Adicionar novos influenciadores
- ✅ Remover influenciadores existentes
- ✅ Formulário com validação
- ✅ Lista de gerenciamento

### 💾 Persistência de Dados
- ✅ LocalStorage para salvar dados
- ✅ Dados mantidos entre sessões
- ✅ Biblioteca inicial carregada automaticamente

### 🔍 Modal de Detalhes
- ✅ Foto em tamanho grande
- ✅ Descrição completa
- ✅ Botões de contato direto
- ✅ Animações suaves

## 🎨 Características Técnicas

- **HTML5** semântico
- **CSS3** com Flexbox e Grid
- **JavaScript ES6+** vanilla
- **Font Awesome** para ícones
- **Unsplash** para fotos de exemplo
- **Totalmente responsivo**
- **Sem dependências externas**

## 📱 Compatibilidade

- ✅ Chrome, Firefox, Safari, Edge
- ✅ iOS Safari, Chrome Mobile
- ✅ Funciona offline após primeiro carregamento
- ✅ Responsivo em todos os dispositivos

## 🔧 Personalização

### Alterar cores:
Edite as variáveis CSS em `styles.css`:
\`\`\`css
/* Cor principal */
background: #7c3aed; /* Roxo */

/* Gradiente de fundo */
background: linear-gradient(135deg, #f3e8ff 0%, #dbeafe 100%);
\`\`\`

### Adicionar mais influenciadores:
Edite o array `initializeExampleData()` nos arquivos HTML.

## 📞 Funcionalidades de Contato

- **📧 Email**: Abre cliente de email padrão
- **📱 Telefone**: Inicia chamada no mobile
- **💬 WhatsApp**: Abre conversa direta (mobile/desktop)

## 🐛 Solução de Problemas

### Site não carrega no GitHub Pages:
1. Verifique se os arquivos estão na raiz do repositório
2. Aguarde até 10 minutos para propagação
3. Verifique se o repositório é público
4. Confirme se o GitHub Pages está ativado

### Dados não persistem:
- Os dados são salvos no localStorage do navegador
- Limpar cache/cookies remove os dados
- Dados são específicos por domínio

### Modal não abre:
- Verifique se o JavaScript está carregando
- Abra o console do navegador (F12) para ver erros
- Certifique-se de que não há bloqueadores de script

## 📈 Próximos Passos

- [ ] Sistema de categorias/filtros
- [ ] Busca por nome/especialidade
- [ ] Export/import de dados
- [ ] Estatísticas de visualização
- [ ] Integração com redes sociais

---

**Desenvolvido com ❤️ para facilitar a gestão de influenciadores digitais**
