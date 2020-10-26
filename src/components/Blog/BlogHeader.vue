<template>
  <v-parallax
    dark
    src="../static/img/material.jpg"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <h1 class="display-1 font-weight-thin mb-4">
          <slot name="title">
          </slot>
        </h1>
        <h4 class="subheading">
          <slot name="subTitle">
          </slot>
        </h4>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>

export default {
  name: 'BlogHeader'
}
</script>

<style scoped>
</style>
