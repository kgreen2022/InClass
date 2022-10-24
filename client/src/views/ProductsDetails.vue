<script setup lang="ts">
    import { reactive } from "vue";
    import { getProducts } from "../stores/products";

    const products = reactive(getProducts());
</script>
<template>
    <div>
        <div class="product" v-for="product in products" :key="product.id">
            <img :src="product.thumbnail" :all="product.title" />
        </div>
        <div class="product.info">

        </div>
    </div>
</template>
<style scoped>
    .products {
        display: flex;
        flex-wrap: wrap;
        background-color: blue;
    }
    .product{
        flex-basis: 10px;
        margin: 1em;
        border: 1px solid black;
        border-radius: 

    }

</style>
