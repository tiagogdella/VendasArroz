# CalculoVenda — Calculadora de Preço de Venda e Compra

Ferramenta web desenvolvida para calcular o preço de venda do arroz e o custo de compra do arroz em casca, considerando custos fixos e percentuais de encargos. Nasceu de uma necessidade real dentro da empresa: agilizar o processo de precificação sem depender de planilhas manuais sujeitas a erros.

A aplicação possui dois módulos de cálculo:

- **Venda**: informe o custo da mercadoria, frete, embalagem e os percentuais de ICMS, financeiro e comissão — e a ferramenta retorna automaticamente o preço de venda ideal e o valor bruto de cada encargo.
- **Compra de arroz em casca**: calcula o custo de aquisição do arroz em casca, considerando os parâmetros específicos dessa operação.

Em ambos os casos, o resultado pode ser copiado em formato de texto para compartilhamento direto via WhatsApp.

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

# CalculoVenda — Sale and Purchase Price Calculator

A web tool developed to calculate the ideal sale price for rice and the purchase cost of rice in husk, taking into account fixed costs and percentage-based charges. This project was born out of a real business need: to speed up the pricing process and eliminate manual spreadsheet errors within the company.

The application has two calculation modules:

- **Sale**: input the product cost, freight, packaging, and the percentages for ICMS (state tax), financial fees, and sales commission — the app instantly returns the ideal sale price and the gross value of each charge.
- **Rice-in-husk purchase**: calculates the acquisition cost for rice in husk, based on the specific parameters of that operation.

In both cases, the result can be copied as formatted text and shared directly via WhatsApp.

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
