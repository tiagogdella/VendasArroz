# CalculoVenda — Calculadora de Preço de Venda

Ferramenta web desenvolvida para calcular o preço de venda do arroz, considerando custos fixos e percentuais de encargos. Nasceu de uma necessidade real dentro da empresa: agilizar o processo de precificação sem depender de planilhas manuais sujeitas a erros.

A aplicação permite informar o custo da mercadoria, frete, embalagem e os percentuais de ICMS, financeiro e comissão — e retorna automaticamente o preço de venda ideal e o valor bruto de cada encargo. O resultado pode ser copiado em formato de texto para compartilhamento direto via WhatsApp.

## Tecnologias

- **Vue 3** — framework principal, com arquitetura de componentes e Composition API
- **TypeScript** — tipagem estática para maior segurança e clareza no código
- **Vite** — bundler e servidor de desenvolvimento
- **CSS puro** — estilização sem dependências externas

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse em `http://localhost:5173`

## Como fazer o build

```bash
npm run build
```

---

# CalculoVenda — Sale Price Calculator

A web tool developed to calculate the ideal sale price for rice, taking into account fixed costs and percentage-based charges. This project was born out of a real business need: to speed up the pricing process and eliminate manual spreadsheet errors within the company.

The user inputs the product cost, freight, packaging, and the percentages for ICMS (state tax), financial fees, and sales commission. The app instantly returns the ideal sale price and the gross value of each charge. The result can be copied as formatted text and shared directly via WhatsApp.

## Tech Stack

- **Vue 3** — main framework, using component architecture and Composition API
- **TypeScript** — static typing for safer and more maintainable code
- **Vite** — build tool and development server
- **Plain CSS** — styling with no external dependencies

## Running locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Build for production

```bash
npm run build
```
