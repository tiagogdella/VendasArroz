<script setup lang="ts">
import { inject } from 'vue';

const { precoFinal, icmsBruto, embalagem, financeiroBruto, frete,  commissaoBruto } = inject('calculo')
</script>

<template>
    <div class="resultsBanner">
        <table>
            <tbody>
                <tr>
                    <td>Preço de venda</td>
                    <td>R${{ precoFinal?.toFixed(2) }}</td>
                </tr>
                <tr v-if="icmsBruto">
                    <td>ICMS</td>
                    <td>R$:{{ icmsBruto?.toFixed(2)}}</td>
                </tr>
                <tr v-if="financeiroBruto">
                    <td>Financeiro</td>
                    <td>R$:{{ financeiroBruto?.toFixed(2) }}</td>
                </tr>
                <tr v-if="frete">
                    <td>Frete</td>
                    <td>R$:{{ frete?.toFixed(2) }}</td>
                </tr>
                <tr v-if="commissaoBruto">
                    <td>Comissão</td>
                    <td>R$:{{ commissaoBruto?.toFixed(2) }}</td>
                </tr>
                <tr v-if="embalagem">
                    <td>Embalagem</td>
                    <td>R$:{{ embalagem?.toFixed(2) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style>
.resultsBanner{
    margin-bottom: 50px;
    margin-top: 50px;
    text-align: center;
    background-color: rgb(90, 141, 120);
    border-radius: 10px;
    width: 500px;
    height: 400px;
    display: grid;
    justify-content: center;
    align-items: center;
}
</style>