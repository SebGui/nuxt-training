<template>
    <div>
        <!-- Update Head Elements -->
        <Head>
            <Title>Nuxt Training | {{ product.title }}</Title>
            <Meta name="description" :content="product.description" />
        </Head>

        <ProductDetails :product="product"/>
    </div>
</template>

<script setup>
    //Get id from route
    const {id} = useRoute().params;

    definePageMeta({layout:'products-sidebar'})

    // Fetch product from fakeApi
    const { data:product } = await useFetch('https://fakestoreapi.com/products/'+id)

    // Throw custom error
    if (!product.value) {
        throw createError({
            statusCode : 404,
            statusMessage: 'Product not found',
            fatal: true
        })
    }
</script>

<style lang="scss" scoped>

</style>