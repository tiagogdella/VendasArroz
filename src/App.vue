<script setup lang="ts">
import { provide } from 'vue'
import { useCalculo } from './composables/useCalculo';
import FormularioPreco from './components/FormularioPreco.vue';
import ResultadoPreco from  './components/ResultadoPreco.vue'

provide('calculo', useCalculo())
</script>

<template>
  <div class="contFat">
    <FormularioPreco />
    <ResultadoPreco />
  </div>
  <div class="button">
    <button>Copiar tabela</button>
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
</style>
