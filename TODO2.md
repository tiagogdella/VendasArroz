# Pedidos — Passagem de pedidos fechados ao time

Nova tela (ao lado de Venda e Compra Casca) para registrar pedidos fechados com
clientes e copiar o resumo para enviar ao time. Continua stateless: nada é salvo.

Regra geral: **campo não preenchido é ignorado** (não aparece no resultado nem no texto copiado).

---

## Campos

| Campo | Observação |
|-------|-----------|
| Nome do cliente | Texto |
| Produtos | Lista dinâmica — cada item com produto, quantidade e preço. Botão para adicionar/remover itens |
| Quantidade total | Soma das quantidades — **só aparece com mais de um produto** |
| Valor total | Soma de quantidade × preço de cada item |
| Placa | Texto (convertido para maiúsculas) |
| Transportadora | Texto |
| Observação | Texto livre (várias linhas) |

---

## Tarefas

- [x] Composable `usePedido.ts` (estado do pedido, itens, totais)
- [x] Componente `FormularioPedido.vue` (formulário com lista dinâmica de produtos)
- [x] Componente `ResultadoPedido.vue` (resumo do pedido, ignorando campos vazios)
- [x] Navegação entre as três telas em `App.vue` (Venda / Compra Casca / Pedido)
- [x] "Copiar tabela" gerando o texto do pedido para WhatsApp
- [ ] Testar no celular (layout com vários produtos)
- [ ] Botão "Limpar pedido" para começar um novo
- [ ] Bug nas telas Venda e Compra: digitar um número e apagar deixa `''` no campo e a conta sai errada (corrigir com `Number(x) || 0`, igual ao `usePedido.ts`)
- [ ] Commit da funcionalidade de pedidos

---

## Em aberto (a decidir)

| Item | Status |
|------|--------|
| Preço é por item (cada produto com seu preço) | ✅ Definido — preço por item |
| Unidade da quantidade (sacos, fardos, kg) | A definir |
| Lista fixa de produtos (select) ou texto livre | Texto livre por enquanto |
