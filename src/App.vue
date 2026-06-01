<script setup lang="ts">
import { useCalculo } from './composables/useCalculo';
import FormularioPreco from './components/FormularioPreco.vue';
import ResultadoPreco from  './components/ResultadoPreco.vue'
import { provide, ref } from  'vue';

const calculo = useCalculo()
provide('calculo', calculo)

const { precoFinal, icmsBruto, financeiroBruto, commissaoBruto, frete, embalagem, } = calculo
const copiado = ref(false)

function copiar() {
  const linhas = [
    `📊 *Cálculo de Venda*\n`,
    `Preço de Venda  →  R$ ${precoFinal.value?.toFixed(2)}`,
    icmsBruto.value ? `ICMS            →  R$ ${icmsBruto.value.toFixed(2)}` : '',
    financeiroBruto.value ? `Financeiro      →  R$ ${financeiroBruto.value.toFixed(2)}` : '',
    frete.value ? `Frete           →  R$ ${frete.value.toFixed(2)}` : '',
    commissaoBruto.value ? `Comissão        →  R$ ${commissaoBruto.value.toFixed(2)}` : '',
    embalagem.value ? `Embalagem       →  R$ ${embalagem.value.toFixed(2)}` : '',
  ]
  const texto = linhas.filter(l => l !== '').join('\n')
  navigator.clipboard.writeText(texto)
  copiado.value = true
  setTimeout(() => copiado.value = false, 2000)
}
</script>

<template>
  <div class="contFat">
    <FormularioPreco />
    <ResultadoPreco />
  </div>
  <div class="button">
    <button @click="copiar">COPIAR TABELA</button>
    <div v-if="copiado" class="popup">Copiado!</div>
  </div>
</template>

<style>
.contFat{
  margin-top: 50px;
  background-color: rgb(66, 66, 66);
  display: flex;
  align-items: center;
  justify-content: center;

}
button{
  margin-top: 3px;
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
