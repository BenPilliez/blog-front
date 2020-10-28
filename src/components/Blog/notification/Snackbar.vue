<template>
  <v-snackbar
    :color="color"
    :multi-line="mode === 'multi-line'"
    :timeout="timeout"
    :value="value"
    top
    right
  >
    <v-icon class="pr-3" dark large>{{ icon }}</v-icon>
    {{ text }}
    <template v-slot:action="{ attrs }">
      <v-btn
        v-bind="attrs"
        color="white"
        icon
        @click="value = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: 'SnackBar',
  data () {
    return {
      color: null,
      text: null,
      icon: null,
      mode: null,
      timeout: null,
      value: null
    }
  },
  created () {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'notification') {
        this.color = state.notification.color
        this.icon = state.notification.icon
        this.text = state.notification.text
        this.mode = state.notification.mode
        this.timeout = state.notification.timeout
        this.value = true

        setTimeout(() => {
          this.value = false
        }, this.timeout)
      }
    })
  }
}
</script>
