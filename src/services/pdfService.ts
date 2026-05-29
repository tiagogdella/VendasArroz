import { ref, computed } from 'vue'

export function useCalculo() {
    const custoCasca: number = ref()
    const financeiro: number = ref()
    const icms: number= ref()
    const embalagem: number = ref()
    const commisao: number = ref()
    const frete: number = ref()

    const precoFinal = computed(() => {
        const bruto = custoCasca+embalagem+frete;
        const percentuais = (icms+financeiro+commisao)-100;
        return (100*bruto)/percentuais
    })

    return {
        precoFinal
    }
}