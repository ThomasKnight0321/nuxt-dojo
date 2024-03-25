<template>
    <div>
        <p>Product details for {{ id }}</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Animi incidunt ullam voluptas labore dicta autem nemo eius aut recusandae in.</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params;

    definePageMeta({
        layout: 'products'
    })
</script>

<style scoped>

</style>