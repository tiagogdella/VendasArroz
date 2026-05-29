<script setup lang="ts">
import { inject } from 'vue'

const {custoCasca, financeiro, icms, embalagem, commissao, frete } = inject('calculo')
</script>

<template>
    <form class="formulario">
        <label>Custo Arroz</label>
        <input type="number" v-model="custoCasca" />

        <label>ICMS em %</label>
        <input type="number" v-model="icms" />
        
        <label>Financeiro em %</label>
        <input type="number" v-model="financeiro" />
        
        <label>Frete</label>
        <input type="number" v-model="frete" />
       
        <label>Commissão em %</label>
        <input type="number" v-model="commissao" />
        
        <label>embalagem</label>
        <input type="number" v-model="embalagem" />
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
}
</style>

