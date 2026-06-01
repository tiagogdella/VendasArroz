import { ref, computed } from 'vue'


export function useCalculo() {
    const custoCasca= ref<number | null>(null)
    const financeiro = ref<number | null>(null)
    const icms = ref<number | null>(null)
    const embalagem = ref<number | null>(null)
    const commissao = ref<number | null>(null)
    const frete = ref<number | null>(null)

    const precoFinal = computed(() => {
        const bruto = (custoCasca.value ?? 0) + (embalagem.value ?? 0) + (frete.value ?? 0)
        const percentuais = 100 - ((icms.value ?? 0) + (financeiro.value ?? 0) + (commissao.value ?? 0))
        return ((100 * bruto) / percentuais)
    })

    const commissaoBruto = computed(() => ((commissao.value ?? 0) / 100) * precoFinal.value)
    const icmsBruto = computed(() => ((icms.value ?? 0) / 100) * precoFinal.value)
    const financeiroBruto = computed(() => ((financeiro.value ?? 0) / 100) * precoFinal.value)
    

    return {
        custoCasca,
        financeiro,
        icms,
        embalagem,
        commissao,
        frete,
        precoFinal,
        icmsBruto,
        financeiroBruto,
        commissaoBruto
    }
}