<template>
<main class="main">
  <nuxt/>
</main>
</template>

<script>
export default {
  name: 'default',
  head () {
    return {
      bodyAttrs: {
        class: this.$exp.$classes.join(' ')
      }
    }
  }
}
</script>

<style scoped>

</style>
