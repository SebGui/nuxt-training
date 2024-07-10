<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="mt7 text-7x1 font-bold">{{ props.error.statusCode }}</p>
        <p class="my-7 text-6x1">Oops.</p>
        <p class="my-7">{{ props.error.message }}</p>

        <button class="btn my-7" @click="handleClearError">Go Home...</button>
    </div>
</template>

<script setup>
    const props = defineProps(['error']);

    const handleClearError = () => clearError({redirect: '/'})
</script>

<style lang="scss" scoped>
</style>