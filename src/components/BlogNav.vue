<template lang="html">

  <div id="parentx">

    <vs-button color="dark" icon="menu" type="line" @click="active=!active">menu</vs-button>
    <vs-sidebar v-model="active" class="sidebarx" color="primary" default-index="1" parent="body" position-right spacer>

      <div slot="header" class="header-sidebar">
        <vs-button :to="{name: 'home'}" color="dark" type="line">Ben Blog</vs-button>
      </div>
      <div slot="footer" class="footer-sidebar">
        <vs-button color="danger" icon="reply" type="flat">log out</vs-button>
        <vs-button color="primary" icon="settings" type="border"></vs-button>
      </div>

      <vs-sidebar-item :to="{name: 'Posts'}">
        Articles
      </vs-sidebar-item>

    </vs-sidebar>
  </div>

</template>

<script>
export default {
  data () {
    return {
      active: false
    }
  }
}
</script>

<style lang="scss">
.header-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}

.header-sidebar h4 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.header-sidebar h4 > button {
  margin-left: 10px;
}

.footer-sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.footer-sidebar > button {
  border: 0px solid rgba(0, 0, 0, 0) !important;
  border-left: 1px solid rgba(0, 0, 0, 0.07) !important;
  border-radius: 0px !important;
}
</style>
