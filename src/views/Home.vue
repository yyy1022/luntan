<template>
  <div class="home">
<!--    <transition appear enter-active-class="animate__animated  animate__backInRight"-->
<!--                leave-active-class="animate__animated animate__backInUp">-->
<!--      1111111-->
<!--    </transition>-->
    <h1 class="animate__animated animate__backInLeft">11111111</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
