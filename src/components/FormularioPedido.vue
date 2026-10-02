<script setup lang="ts">
import { inject } from 'vue'
import { usePedido } from '../composables/usePedido'

const { cliente, itens, placa, transportadora, observacao, adicionarItem, removerItem } = inject<ReturnType<typeof usePedido>>('pedido')!

</script>

<template>
    <form class="formulario formularioPedido">
        <label>Cliente</label>
        <input type="text" v-model="cliente" />

        <label>Produtos</label>
        <div v-for="(item, index) in itens" :key="index" class="itemPedido">
            <input type="text" v-model="item.produto" placeholder="Produto" />
            <input type="number" v-model="item.quantidade" placeholder="Qtd" />
            <input type="number" v-model="item.preco" placeholder="Preço" />
            <button type="button" @click="removerItem(index)">✕</button>
        </div>
        <button type="button" @click="adicionarItem">+ Produto</button>

        <label>Placa</label>
        <input type="text" v-model="placa" />

        <label>Transportadora</label>
        <input type="text" v-model="transportadora" />

        <label>Observação</label>
        <textarea v-model="observacao" rows="3"></textarea>
    </form>
</template>

<style>
.formularioPedido{
    height: auto;
    padding: 20px 0;
}

.itemPedido{
    display: flex;
    gap: 4px;
    margin-bottom: 4px;
}
.itemPedido input{
    width: 100px;
}
</style>