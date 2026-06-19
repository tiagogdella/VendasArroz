<script setup lang="ts">
    import {inject} from 'vue'
    import { useCalculoCompra } from '../composables/useCalculoCompra';

    const { valorInicial, funrural, commissaoCompra, freteCompra, CDO } = inject<ReturnType<typeof useCalculoCompra>>('calculoCompra')!
</script>

<template>
    <form class="formulario">
        <label>Casca em casa</label>
        <input type="number" v-model="valorInicial" />

        <label>Funrural em %</label>
        <input type="number" v-model="funrural" />
        
        <label>CDO</label>
        <input :value="CDO" readonly />

        <label>Commissão em %</label>
        <input type="number" v-model="commissaoCompra" />
        
        <label>Frete</label>
        <input type="number" v-model="freteCompra" />
    </form>
</template>

<style>
.formulario{
    margin-top: 50px;
    margin-bottom: 50px;
    text-align: center;
    background-color: rgb(165, 165, 165);
    width: 500px;
    height: 400px;
    display: grid;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    font-size: 20px;
}

@media (max-width: 768px) {
  .formulario {
    width: 47vw;
    height: auto;
    min-height: 300px;
    font-size: 12px;
    grid-template-columns: 1fr
  }
  .formulario input {
    width: 80%;
    display: block;
    margin: 0 auto;
  }
}

</style>




