<script setup lang="ts">
    const cart = {
        
    }
</script>

<template>
    <div class="fly-out">
        <h3 class="title is-3">Cart</h3>
        <button class="button is-danger" @click="closeCart">Close</button>
    </div>
    <div class="fly-out-body">

    </div>
</template>

<style scoped>
    .fly-out {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        width: 20mm;
        background-color: aliceblue;
        border-left: 1px solid black;

    }
</style>