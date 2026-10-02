<script setup lang="ts">
import { inject } from 'vue'
import { usePedido, type ItemPedido } from '../composables/usePedido'

const { cliente, itensPreenchidos, quantidadeTotal, valorTotal, mostrarQuantidadeTotal, placa, transportadora, observacao } = inject<ReturnType<typeof usePedido>>('pedido')!

function descricaoItem(item: ItemPedido) {
    const partes = []
    if (item.quantidade) partes.push(`${item.quantidade}`)
    if (item.preco) partes.push(`R$ ${Number(item.preco).toFixed(2)}`)
    return partes.join(' x ')
}
</script>

<template>
    <div class="resultsBanner resultadoPedido">
        <table>
            <tbody>
                <tr v-if="cliente.trim()">
                    <td>Cliente</td>
                    <td>{{ cliente }}</td>
                </tr>
                <tr v-for="(item, index) in itensPreenchidos" :key="index">
                    <td>{{ item.produto || 'Produto' }}</td>
                    <td>{{ descricaoItem(item) }}</td>
                </tr>
                <tr v-if="mostrarQuantidadeTotal">
                    <td>Quantidade total</td>
                    <td>{{ quantidadeTotal }}</td>
                </tr>
                <tr v-if="valorTotal">
                    <td>Valor total</td>
                    <td>R$ {{ valorTotal.toFixed(2) }}</td>
                </tr>
                <tr v-if="placa.trim()">
                    <td>Placa</td>
                    <td>{{ placa.toUpperCase() }}</td>
                </tr>
                <tr v-if="transportadora.trim()">
                    <td>Transportadora</td>
                    <td>{{ transportadora }}</td>
                </tr>
                <tr v-if="observacao.trim()">
                    <td>Observação</td>
                    <td>{{ observacao }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style>
.resultadoPedido{
    height: auto;
    padding: 20px;
}
</style>
