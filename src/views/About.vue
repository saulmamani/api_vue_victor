<template>
  <div class="about">
    <cabezera
        :titulo="'SOBRE MI'"
        :sub-titulo="'victor'"
        :es-princial="false"
    />

    <h1>This is an about page</h1>
    <HelloWorld
        :msg="'Victor'"
        :age="23"
    />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Cabezera from "@/components/cabezera";

export default {
  name: 'About',
  components: {Cabezera, HelloWorld}
}
</script>
