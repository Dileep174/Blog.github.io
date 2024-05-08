<script>
export default {
  data() {
    return {
      // userObj: { fName: 'John', lName: 'Doe' },
      // userArr: ['John', 'Doe']
    }
  }
}
</script>

<template>
    <!-- <Home name="" :home_slider="home_slider" :getData="getData"/> -->
  <slot name="Home">
    
  </slot>
</template>