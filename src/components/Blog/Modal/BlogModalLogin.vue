<template>
  <v-dialog
    v-model="login"
    fullscreen
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-card-title class="justify-center">Connection</v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="form.email"
                  :rules="[rules.required]"
                  label="Email*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-text-field
                  v-model="form.password"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required]"
                  :type="showPassword ? 'text' : 'password'"
                  label="Mot de passe*"
                  required
                  @click:append="showPassword = !showPassword"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          @click="login = false"
        >
          Fermer
        </v-btn>
        <v-btn
          color="success"
          @click="connect"
        >
          Se connecter
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'BlogModalLogin',
  data () {
    return {
      valid: true,
      login: false,
      showPassword: false,
      showConfirm: false,
      form: {
        email: null,
        password: null
      },
      rules: {
        required: value => !!value || 'Required.'
      }
    }
  },
  methods: {
    open () {
      this.login = true
    },
    validateForm () {
      return this.$refs.form.validate()
    },
    connect () {
      const valid = this.validateForm()
      if (valid) {
        this.$store.dispatch('login', this.form)
        this.login = false
      }
    }
  }
}
</script>

<style scoped>

</style>
