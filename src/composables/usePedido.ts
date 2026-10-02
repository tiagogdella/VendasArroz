import { ref, computed } from 'vue'

export interface ItemPedido {
    produto: string
    quantidade: number | null
    preco: number | null
}

function novoItem(): ItemPedido{
    return { produto: '', quantidade: null, preco: null }
}

export function usePedido() {
    const cliente = ref('')
    const itens = ref<ItemPedido[]>([novoItem()])
    const placa = ref('')
    const transportadora = ref('')
    const observacao = ref('')

    const itensPreenchidos = computed(() =>
        itens.value.filter(i => i.produto.trim() !== '' || i.quantidade || i.preco)    
    )

       const quantidadeTotal = computed(() =>
        itensPreenchidos.value.reduce((soma, i) => soma + (Number(i.quantidade) || 0), 0)
    )

    const valorTotal = computed(() =>
        itensPreenchidos.value.reduce((soma, i) => soma + (Number(i.quantidade) || 0) * (Number(i.preco) || 0), 0)
    )

    const mostrarQuantidadeTotal = computed(() => itensPreenchidos.value.length > 1)
    
    function adicionarItem() {
        itens.value.push(novoItem())
    }

    function removerItem(index: number) {
        itens.value.splice(index, 1)
        if (itens.value.length === 0) itens.value.push(novoItem())
    }

    return { cliente, itens, placa, transportadora, observacao, itensPreenchidos, quantidadeTotal, valorTotal, mostrarQuantidadeTotal, adicionarItem, removerItem }
}

