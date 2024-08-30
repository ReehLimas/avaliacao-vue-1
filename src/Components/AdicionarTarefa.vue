<script setup>
const model = defineModel()
</script>

<template>
    <section>
        <h2>Adicione uma nova tarefa</h2>
        <input type="text" v-model="model" @keyup.enter="$emit('adicionarTarefa')" />
        <button>Adicionar</button>
    </section>
</template>

<style scoped>
input {
    width: 50%;
    padding: 5px;
    margin: 5px 0;
}

button {
    padding: 5px;
    margin: 5px 0;
}
</style>