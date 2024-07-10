export default defineEventHandler(async (event) => {
    //Handle query params
    //const {name} = getQuery(event)

    //Handle post data
    //const {age} = await readBody(event);

    const {currencyKey} = useRuntimeConfig()

    //Api call with private key
    const {data} = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=${currencyKey}`)

    /*return {
        message: `Hello, ${name} of age ${age}`
    }*/
   return data
})