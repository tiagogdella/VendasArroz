<script setup lang="ts">
import { useCalculo } from './composables/useCalculo';
import FormularioPreco from './components/FormularioPreco.vue';
import ResultadoPreco from  './components/ResultadoPreco.vue'
import { provide, ref } from  'vue';
import { useCalculoCompra } from './composables/useCalculoCompra.ts';
import FormularioCompra from './components/FormularioCompra.vue';
import ResultadoCompra from './components/ResultadoCompra.vue';
import { usePedido } from './composables/usePedido';
import FormularioPedido from './components/FormularioPedido.vue';
import ResultadoPedido from './components/ResultadoPedido.vue';

const tela = ref<'venda' | 'compra' | 'pedido'>('venda')

const calculo = useCalculo()
provide('calculo', calculo)

const calculoCompra = useCalculoCompra()
provide('calculoCompra', calculoCompra)

const pedido = usePedido()
provide('pedido', pedido)

const { precoFinal, icmsBruto, financeiroBruto, commissaoBruto, frete, embalagem, } = calculo
const { valorCompra, valorInicial, freteCompra, funruralBruto, commissaoBruto: commissaoBrutoCompra } = calculoCompra
const { cliente, itensPreenchidos, quantidadeTotal, valorTotal, mostrarQuantidadeTotal, placa, transportadora, observacao } = pedido

const copiado = ref(false)

function copiar() {
  if (tela.value === 'venda') {
    const linhas = [
      `📊 *Cálculo de Venda*\n`,
      `Preço de Venda  →  R$ ${precoFinal.value?.toFixed(2)}`,
      icmsBruto.value ? `ICMS            →  R$ ${icmsBruto.value.toFixed(2)}` : '',
      financeiroBruto.value ? `Financeiro      →  R$ ${financeiroBruto.value.toFixed(2)}` : '',
      frete.value ? `Frete           →  R$ ${frete.value.toFixed(2)}` : '',
      commissaoBruto.value ? `Comissão        →  R$ ${commissaoBruto.value.toFixed(2)}` : '',
      embalagem.value ? `Embalagem       →  R$ ${embalagem.value.toFixed(2)}` : '',
    ]
    navigator.clipboard.writeText(linhas.filter(l => l !== '').join('\n'))
  } else if (tela.value === 'compra') {
    const linhas = [
      `🛒 *Compra Casca*\n`,
      `Valor de Compra →  R$ ${valorCompra.value?.toFixed(2)}`,
      funruralBruto.value ? `Funrural        →  R$ ${funruralBruto.value.toFixed(2)}` : '',
      commissaoBrutoCompra.value ? `Comissão        →  R$ ${commissaoBrutoCompra.value.toFixed(2)}` : '',
      freteCompra.value ? `Frete           →  R$ ${freteCompra.value.toFixed(2)}` : '',
      valorInicial.value ? `Valor Bruto       →  R$${valorInicial.value.toFixed(2)}` : '',
    ]
    navigator.clipboard.writeText(linhas.filter(l => l !== '').join('\n'))
  } else {
    const linhas = [
      `🌾 *Pedido*\n`,
      cliente.value.trim() ? `Cliente         →  ${cliente.value}` : '',
      ...itensPreenchidos.value.map(item => {
        const partes = []
        if (item.quantidade) partes.push(`${item.quantidade}`)
        if (item.preco) partes.push(`R$ ${Number(item.preco).toFixed(2)}`)
        return `${item.produto || 'Produto'}  →  ${partes.join(' x ')}`
      }),
      mostrarQuantidadeTotal.value ? `Quantidade Total →  ${quantidadeTotal.value}` : '',
      valorTotal.value ? `Valor Total     →  R$ ${valorTotal.value.toFixed(2)}` : '',
      placa.value.trim() ? `Placa           →  ${placa.value.toUpperCase()}` : '',
      transportadora.value.trim() ? `Transportadora  →  ${transportadora.value}` : '',
      observacao.value.trim() ? `Observação      →  ${observacao.value}` : '',
    ]
    navigator.clipboard.writeText(linhas.filter(l => l !== '').join('\n'))
  }

  copiado.value = true
  setTimeout(() => copiado.value = false, 2000)
}
</script>

<template>
  <h1>{{ tela === 'venda' ? 'Cálculo de Venda' : tela === 'compra' ? 'Compra Casca' : 'Pedido' }}</h1>
  
  <div class="contFat">
    <div v-if="tela==='venda'" style="display: flex; gap: 4px">
      <FormularioPreco />
      <ResultadoPreco />
    </div>
    <div v-if="tela ==='compra'" style="display: flex; gap: 4px">
      <FormularioCompra />
      <ResultadoCompra />
    </div>
    <div v-if="tela === 'pedido'" class="telaPedido">
      <FormularioPedido />
      <ResultadoPedido />
    </div>
  </div>

  <div class="buttons">
    <div class="button" v-if="tela !== 'venda'">
      <button @click="tela = 'venda'">VENDA</button>
    </div>
    <div class="button" v-if="tela !== 'compra'">
      <button @click="tela = 'compra'">COMPRA CASCA</button>
    </div>
    <div class="button" v-if="tela !== 'pedido'">
      <button @click="tela = 'pedido'">PEDIDO</button>
    </div>
    <div class="button">
      <button @click="copiar">COPIAR TABELA</button>
      <div v-if="copiado" class="popup">Copiado!</div>
    </div>
  </div>
</template>

<style>
.contFat{
  margin-top: 10px;
  background-color: rgb(66, 66, 66);
  display: flex;
  align-items: center;
  justify-content: center;

}

.buttons{
  display: flex;
  align-items: center;
  justify-content: center;
}

.button{
  margin-top: 3px;
  margin-left: 3px;
  font-size: large;
}

.popup{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 24px 40px;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.3);
  font-size: 18px;
  z-index: 999;
}

.telaPedido{
  display: flex;
  gap: 4px;
}

@media (max-width: 768px) {
  .telaPedido{
    flex-direction: column;
    align-items: center;
  }
  .telaPedido .formulario,
  .telaPedido .resultsBanner{
    width: 90vw;
    margin: 10px 0;
    box-sizing: border-box;
    padding: 20px 16px;
  }
}
</style>
