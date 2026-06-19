<script setup lang="ts">
import { inject } from 'vue';
import { useCalculoCompra } from '../composables/useCalculoCompra';

const { valorCompra, valorInicial, funruralBruto, commissaoBruto, freteCompra, CDO } = inject<ReturnType<typeof useCalculoCompra>>('calculoCompra')!
</script>

<template>
    <div class="resultsBanner">
        <table>
            <tbody>
                <tr>
                    <td>CASCA</td>
                    <td>R${{ valorCompra?.toFixed(2) }}</td>
                </tr>
                <tr v-if="funruralBruto">
                    <td>Funrual</td>
                    <td>R$:{{ funruralBruto?.toFixed(2)}}</td>
                </tr>
                <tr v-if="commissaoBruto">
                    <td>Comissão</td>
                    <td>R$:{{ commissaoBruto?.toFixed(2) }}</td>
                </tr>
                <tr v-if="freteCompra">
                    <td>Frete</td>
                    <td>R$:{{ freteCompra?.toFixed(2) }}</td>
                </tr>
                <tr v-if="CDO">
                    <td>CDO</td>
                    <td>R$:{{ CDO?.toFixed(2) }}</td>
                </tr>
                <tr>
                    <td>Casca final</td>
                    <td>R$:{{ valorInicial?.toFixed(2) }}</td>
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
    font-size: 20px;
    color: white
}

@media (max-width: 768px) {
  .resultsBanner {
    width: 47vw;
    height: auto;
    min-height: 300px;
    font-size: 12px;
  }
}

</style>