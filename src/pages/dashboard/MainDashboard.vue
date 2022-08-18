<template>
  <q-page padding>
    <h1>{{message}}</h1>
  </q-page>
</template>
<script setup>
import { ref } from 'vue';

const message = ref('este es el mensaje inicial');

</script>
