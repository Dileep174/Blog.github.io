<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div>
    <Header>
      
      <template v-slot:header>
        <h1>this is slot test</h1>
      </template>
    </Header>
    
  </div>
  <Footer></Footer>
</template>

<style scoped></style>
