<template>
  <div class="home">
    <img alt="Kyle Photo" src="../assets/kylephoto.png">
    <HelloWorld msg="Welcome to Kyle's SE 577 (Software Architecture) Project" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
