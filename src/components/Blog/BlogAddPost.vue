<template>
  <div>
    <v-row no-gutters>
      <v-col cols="12">
        <BlogHeader>
          <template v-slot:title>
            {{ user.fullname }}
          </template>
          <template v-slot:subTitle>
            {{ user.intro }}
          </template>
        </BlogHeader>
      </v-col>
    </v-row>
    <v-form ref="form">
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="form.title"
              :error-messages="errors.title"
              :rules="[rules.required]"
              label="Titre"
            >
            </v-text-field>
          </v-col>

          <v-col cols="12">
            <vue-editor
              v-model="form.content"
              :editorToolbar="customToolbar"
            ></vue-editor>
            <div class="v-text-field__details">
              <div class="v-messages theme--light error--text" role="alert">
                <div class="v-messages__wrapper">
                  <div class="v-messages__message">{{ this.errors.content }}</div>
                </div>
              </div>
            </div>
          </v-col>

          <v-col cols="12">
            <v-file-input
              v-model="form.files"
              :error-messages="errors.files"
              accept="image/png, image/jpeg, image/jpg"
              label="Ajoute une ou plusieurs images"
              multiple
              prepend-icon="mdi-camera"
            >
              <template v-slot:selection="{ text }">
                <v-chip
                  color="primary"
                  label
                  small
                >
                  {{ text }}
                </v-chip>
              </template>
            </v-file-input>
          </v-col>
          <v-col cols="12" lg="6" md="6" sm="6">
            <v-select
              v-model="form.categoriesId"
              :error-messages="errors.categorieId"
              :items="categories"
              :rules="[rules.required]"
              item-text="name"
              item-value="id"
              label="Categories"
              single-line
            >
            </v-select>
          </v-col>
          <v-col cols="12">
            <v-btn :style="{left: '50%', transform:'translateX(-50%)'}" color="success" large @click.stop="save">
              <v-icon>mdi-plus-circle-outline</v-icon>
              Créer
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import BlogHeader from './BlogHeader'
import {VueEditor} from 'vue2-editor'
import errors from '../../helpers/errors'

export default {
  name: 'BlogAddPost',
  components: {BlogHeader, VueEditor},
  props: {
    user: Object
  },
  data () {
    return {
      errors: {
        title: '',
        content: '',
        files: '',
        categoriesId: ''
      },
      form: {
        title: '',
        content: '',
        files: null,
        categoriesId: ''
      },
      customToolbar: [
        [{header: [false, 1, 2, 3, 4, 5, 6]}],
        ['bold', 'italic', 'underline', 'strike'], // toggled buttons
        [
          {align: ''},
          {align: 'center'},
          {align: 'right'},
          {align: 'justify'}
        ],
        ['blockquote', 'code-block'],
        [{list: 'ordered'}, {list: 'bullet'}, {list: 'check'}],
        [{indent: '-1'}, {indent: '+1'}], // outdent/indent
        [{color: []}, {background: []}], // dropdown with defaults from theme
        ['link'],
        ['clean']
      ],
      rules: {
        required: value => !!value || 'Required.'
      },
      categories: []
    }
  },
  beforeMount () {
    this.getCategories()
  },
  methods: {
    getCategories () {
      let categories = Object.values(this.$store.getters.categories)
      if (categories.length > 0) {
        this.categories = categories
      } else {
        this.$store.dispatch('getCategories')
          .then((result) => {
            this.categories = Object.values(this.$store.getters.categories)
          })
      }
    },

    validateForm () {
      let form = this.$refs.form.validate()
      let content = this.form.content !== ''
      if (!content) {
        this.errors.content = 'Champ requis'
      }
      return form && content === true
    },
    save () {
      const valid = this.validateForm()
      if (valid) {
        this.form.userId = this.user.id
        let form = this.form
        let isFormData = false
        if (this.form.files) {
          let formData = new FormData()
          for (let key of Object.keys(this.form)) {
            formData.append(key, this.form[key])
          }
          form = formData
          isFormData = true
        }
        this.$store.dispatch('addPost', {form: form, isFormData: isFormData})
          .then(() => {
            this.errors = {
              title: '',
              content: '',
              files: '',
              categoriesId: ''
            }
            this.$refs.form.reset()
          })
          .catch((err) => {
            let error = err.response.data.errors
            if (error) {
              errors(this.errors, error)
            }
            console.log(this.errors)
          })
      }
    }
  }
}
</script>

<style scoped>

</style>
