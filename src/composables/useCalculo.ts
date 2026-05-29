import { ref, computed } from 'vue'


export function useCalculo() {
    const custoCasca= ref<number | null>(null)
    const financeiro = ref<number | null>(null)
    const icms = ref<number | null>(null)
    const embalagem = ref<number | null>(null)
    const commissao = ref<number | null>(null)
    const frete = ref<number | null>(null)

    const precoFinal = computed(() => {
        const bruto = custoCasca.value+embalagem.value+frete.value;
        const percentuais = 100 - (icms.value+financeiro.value+commissao.value);
        return ((100*bruto)/percentuais)
    })

    const commissaoBruto = computed(() => ((commissao.value / 100) * precoFinal.value))
    const icmsBruto = computed(() => ((icms.value / 100) * precoFinal.value))
    const financeiroBruto = computed(() => ((financeiro.value / 100) * precoFinal.value))
    

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