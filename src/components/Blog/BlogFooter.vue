<template>
  <v-footer
    padless
  >
    <v-card
      class="text-center"
      flat
      tile
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon.id"
          :href="icon.href"
          class="mx-4"
          icon
          link
          target="_blank"
        >
          <v-icon size="24px">
            {{ icon.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class=" pt-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cupiditate dolore ea enim est fugit inventore ipsum
        nisi, nulla optio pariatur placeat quaerat qui quos sequi sit totam unde, velit!
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text >
        {{ new Date().getFullYear() }} — <strong>BenPilliez</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [

      {href: 'https://www.linkedin.com/in/benjamin-pilliez-bb0624175/', icon: 'mdi-linkedin'},
      {href: 'https://github.com/BenPilliez?tab=repositories', icon: 'mdi-github'}
    ]
  })
}
</script>

<style scoped></style>
