<template>
    <div>
        <div>
        <header class="shadow-sm bg-white">
          <nav class="container mx-auto p-4 flex justify-between">
            <NuxtLink to="/" class="font-bold">Main icon</NuxtLink>
            <ul class="flex gap-4">
              <li><NuxtLink to="/">Home</NuxtLink></li>
              <li><NuxtLink to="/products">Products</NuxtLink></li>
              <li><NuxtLink to="/about">About</NuxtLink></li>
            </ul>
          </nav>
        </header>

        <div>
            <ul>
                <li>Side</li>
                <li>Bar</li>
                <li>Content</li>
            </ul>
        </div>

        <!-- Output -->
         <div class="container mx-auto p-4">
            <slot />
         </div>

         <footer class="container mx-auto p-4 flex justify-between border-t-2">A footer</footer>
    </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>