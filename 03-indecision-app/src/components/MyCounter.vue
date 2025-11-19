<template>
    <section>
        <h3>Counter: {{ counter }}</h3>
        <h3>Square: {{ squareCounter}}</h3>

        <div>
            <button class="btn" @click="counter++">+1</button>
            <button class="btn" @click="counter--">-1</button>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';


const {counter, squareCounter} = useCounter(10);

//import { computed, ref } from 'vue';

interface Props{
    value: number;
}

const props = defineProps<Props>();

// //Mi solución
// const buttonPlus = () => {
//     return counter.value = counter.value + 1;
// }

// const buttonMinus = () => {
//     return counter.value = counter.value - 1;
// }
</script>

<style scoped>
@reference "@/styles.css"; 
.btn{
    @apply p-5 bg-blue-500 rounded hover:bg-blue-700 mr-2;
}
</style>