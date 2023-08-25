<template>
  <div class="container">
    hello Vue
    <br>
    {{ sum(1,6) }}
    <br>
    <Form :a="110" :b="5"></Form>
    <Form></Form>
  </div>
</template>
<script setup>
import 'form/dist/style.css'
import { Form } from 'form'
import { sum } from 'tools'
</script>
<style>
</style>
