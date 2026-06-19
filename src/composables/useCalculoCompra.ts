import { ref, computed } from 'vue'

const CDO = 0.93

export function useCalculoCompra(){
    const valorInicial = ref<number | null>(null)
    const funrural = ref<number | null>(null)
    const commissaoCompra = ref<number | null>(null)
    const freteCompra = ref<number | null>(null)

    const valorCompra = computed(() => {
        const base = (valorInicial.value ?? 0) - CDO - (freteCompra.value ?? 0)
        const percentuais = 1 + ((funrural.value ?? 0) + (commissaoCompra.value ?? 0)) /100
        return base / percentuais
    })

    const funruralBruto = computed(() => ((funrural.value ?? 0) / 100) * valorCompra.value)
    const commissaoBruto = computed(() => ((commissaoCompra.value ?? 0) /100) * valorCompra.value)

    return { valorInicial, funrural, commissaoCompra, freteCompra, valorCompra, funruralBruto, commissaoBruto, CDO}
}