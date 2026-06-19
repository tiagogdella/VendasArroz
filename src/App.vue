<script setup lang="ts">
import { useCalculo } from './composables/useCalculo';
import FormularioPreco from './components/FormularioPreco.vue';
import ResultadoPreco from  './components/ResultadoPreco.vue'
import { provide, ref } from  'vue';
import { useCalculoCompra } from './composables/useCalculoCompra.ts';
import FormularioCompra from './components/FormularioCompra.vue';
import ResultadoCompra from './components/ResultadoCompra.vue';

const tela = ref<'venda' | 'compra'>('venda')

const calculo = useCalculo()
provide('calculo', calculo)

const calculoCompra = useCalculoCompra()
provide('calculoCompra', calculoCompra)

const { precoFinal, icmsBruto, financeiroBruto, commissaoBruto, frete, embalagem, } = calculo
const { valorCompra, valorInicial, freteCompra, funruralBruto, commissaoBruto: commissaoBrutoCompra } = calculoCompra
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
  } else {
    const linhas = [
      `🛒 *Compra Casca*\n`,
      `Valor de Compra →  R$ ${valorCompra.value?.toFixed(2)}`,
      funruralBruto.value ? `Funrural        →  R$ ${funruralBruto.value.toFixed(2)}` : '',
      commissaoBrutoCompra.value ? `Comissão        →  R$ ${commissaoBrutoCompra.value.toFixed(2)}` : '',
      freteCompra.value ? `Frete           →  R$ ${freteCompra.value.toFixed(2)}` : '',
      valorInicial.value ? `Valor Bruto       →  R$${valorInicial.value.toFixed(2)}` : '',
    ]
    navigator.clipboard.writeText(linhas.filter(l => l !== '').join('\n'))
  }
  copiado.value = true
  setTimeout(() => copiado.value = false, 2000)
}
</script>

<template>
  <h1>{{ tela === 'venda' ? 'Cálculo de Venda' : 'Compra Casca' }}</h1>
  <div class="contFat">
    <div v-if="tela==='venda'" style="display: flex; gap: 4px">
      <FormularioPreco />
      <ResultadoPreco />
    </div>
    <div v-if="tela ==='compra'" style="display: flex; gap: 4px">
      <FormularioCompra />
      <ResultadoCompra />
    </div>
  </div>
  <div class="buttons">
    <div class="button" v-if="tela === 'compra'">
      <button @click="tela = 'venda'">VENDA</button>
    </div>
    <div class="button" v-if="tela === 'venda'">
      <button @click="tela = 'compra'">COMPRA CASCA</button>
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
</style>
