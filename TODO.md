# CalculoVenda — Calculadora de Preço de Arroz

Ferramenta web simples para calcular o preço de venda do arroz.
Stack: Vue 3 + TypeScript + Vite.

---

## Fases do projeto

### FASE 1 — Setup do projeto
- [x] Criar projeto com `npm create vite@latest` (Vue + TypeScript)
- [x] Instalar dependências base
- [x] Configurar estrutura de pastas conforme definido (`components/`, `composables/`, `services/`)
- [ ] Commit inicial

---

### FASE 2 — Regra de negócio (`useCalculo.ts`)
> **A definir pelo dono do projeto.** Deixar em aberto os detalhes de cálculo.

- [x] Definir quais são os **dados de entrada** necessários
  - custoCasca, financeiro, icms, embalagem, commissao, frete
- [x] Definir a **fórmula de cálculo** do preço de venda
- [ ] Definir se haverá **múltiplos cenários** de venda (atacado, varejo, etc.)
- [x] Implementar o composable `useCalculo.ts` com a lógica definida
- [ ] Adicionar validações nos campos de entrada

---

### FASE 3 — Interface (`FormularioPreco.vue`)
> Os campos do formulário dependem da regra de negócio definida na Fase 2.

- [ ] Criar campos de entrada conforme dados definidos
- [ ] Adicionar máscaras de moeda (R$) nos campos relevantes
- [ ] Validação visual de campos obrigatórios
- [ ] Botão de calcular

---

### FASE 4 — Exibição do resultado (`ResultadoPreco.vue`)
> O que mostrar depende do que for definido na regra de negócio.

- [ ] Exibir preço de venda calculado
- [ ] Definir se exibe breakdown do cálculo (detalhamento parcial)
- [ ] Definir se exibe múltiplos resultados (ex: mínimo, ideal, máximo)
- [ ] Estilização clara e legível (prioridade: facilidade de leitura no celular)

---

### FASE 5 — Layout e UX (`App.vue`)
- [ ] Layout responsivo (mobile-first, já que pode ser acessado pelo celular)
- [ ] Definir se haverá tema claro/escuro
- [ ] Feedback visual ao calcular (loading, animação, etc.)
- [ ] Tratar estado vazio (antes do primeiro cálculo)

---

### FASE 6 — Geração de PDF (`BotaoPDF.vue` + `pdfService.ts`)
> Para implementar no futuro.

- [ ] Escolher biblioteca de PDF (sugestão: `jsPDF` ou `pdfmake`)
- [ ] Definir o que deve constar no PDF (campos, resultado, logo, data, etc.)
- [ ] Implementar `pdfService.ts`
- [ ] Criar botão de exportar que só aparece após calcular

---

### FASE 7 — Deploy (acesso via web)
- [ ] Definir plataforma de hospedagem (sugestões: Vercel, Netlify, GitHub Pages — todas gratuitas)
- [ ] Configurar build (`npm run build`)
- [ ] Fazer deploy e testar acesso pelo celular
- [ ] Definir se precisa de domínio customizado ou URL gerada serve

---

## Em aberto (a decidir)

| Item | Status |
|------|--------|
| Fórmula de cálculo do preço de venda | ✅ Definido |
| Quais campos de entrada são necessários | ✅ Definido |
| Se haverá mais de um tipo de venda (ex: saco, kg, fardo) | A definir |
| Se salva histórico de cálculos | A definir |
| Quais dados aparecem no PDF | A definir (Fase 6) |
| Plataforma de hospedagem | A definir |

---

## Dependências previstas

| Pacote | Finalidade | Status |
|--------|-----------|--------|
| Vue 3 + Vite | Framework + bundler | Obrigatório |
| TypeScript | Tipagem | Obrigatório |
| jsPDF ou pdfmake | Geração de PDF | Futuro (Fase 6) |
| Biblioteca de máscaras | Formatação de moeda nos inputs | A avaliar |
