<script lang="ts" setup>
import { ref } from 'vue'

const dateTime = ref<any>('')
</script>

<template>
  <div class="demo pa-8 w-100 h-100 v-theme--dark">
    <PhDatePicker
      v-model="dateTime"
      label="Datepicker"
      prepend-icon="mdi-calendar"
    />
  </div>
</template>

<style scoped>
.demo {
  background: rgb(var(--v-theme-background));
}
</style>
