export default defineEventHandler(async (event) => {

    // api call with private key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_DEpKX2yiLt7bpHObgAnvdhAYCbPWLeyaATg4Ctm4&currencies=EUR%2CUSD%2CCAD')

    return data

})