<template>
  <v-dialog
    v-model="signup"
    fullscreen
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-card-title class="justify-center">Inscription</v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-container>
            <v-row>
              <v-col cols="12" lg="6" md="6" sm="6">
                <v-text-field
                  v-model="form.firstname"
                  clearable
                  label="Prénom*"
                  required
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" lg="6" md="6" sm="6">
                <v-text-field
                  v-model="form.lastname"
                  :rules="[rules.required]"
                  clearable
                  label="Nom*"
                  required
                >
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="form.email"
                  :rules="[rules.required, rules.email]"
                  clearable
                  label="Email*"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  v-model="form.password"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="showPassword ? 'text' : 'password'"
                  clearable
                  counter
                  hint="Au moins 8 caractères, une majuscule et un caractère spécial"
                  label="Mot de passe*"
                  required
                  @click:append="showPassword = !showPassword"
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  v-model="form.confirmPassword"
                  :append-icon="showConfirm ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required,rules.confirmPasswordRules]"
                  :type="showConfirm ? 'text' : 'password'"
                  label="Confirmation mot de passe*"
                  required
                  @click:append="showConfirm = !showConfirm"
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
          @click="signup = false"
        >
          Fermer
        </v-btn>
        <v-btn
          color="success"
          @click="save"
        >
          Envoyer
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
      showPassword: false,
      showConfirm: false,
      valid: false,
      signup: false,
      form: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      rules: {
        required: value => !!value || 'Required.',
        min: value => {
          if (value) {
            return value.length >= 8 || 'Minimum 8 caractères'
          }
          return true
        },
        password: value => {
          const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\?<>\\{\\}\\[\\]\\(\\)\\$%\\^&\\*])(?=.{8,})/
          return pattern.test(value) || 'Il faut au moins une majuscule et caractère spécial'
        },
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Email au mauvais format.'
        },
        confirmPasswordRules: value => value === this.form.password || 'Les mots de passe ne correspondent pas'

      }
    }
  },
  methods: {
    validateForm () {
      return this.$refs.form.validate()
    },
    open () {
      this.signup = true
    },
    save () {
      const valid = this.validateForm()
      if (valid) {
        this.$store.dispatch('signup', this.form)
        this.signup = false
      }
    }
  }
}
</script>

<style scoped>

</style>
