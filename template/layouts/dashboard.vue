<template>
  <div id="appRoot">
    <template>
      <v-app id="inspire" class="app">
        <app-drawer class="app--drawer"></app-drawer>
        <app-toolbar class="app--toolbar"></app-toolbar>
        <v-content>
          <!-- Page Header -->
          <page-header></page-header>
          <div class="page-wrapper">
            <nuxt/>
          </div>
          <!-- App Footer -->
          <v-footer height="auto" class="white pa-3 app--footer">
            <span class="caption">&copy; {{ new Date().getFullYear() }}</span>
            <v-spacer></v-spacer>
            <span class="caption mr-1"> Made with love </span>
            <v-icon color="pink" small>favorite</v-icon>
          </v-footer>
        </v-content>
        <!-- Go to top -->
        <app-fab></app-fab>
        <!-- theme setting -->
        <v-btn small fab dark falt fixed top="top" right="right" class="setting-fab" color="red"
               @click="openThemeSettings">
          <v-icon>settings</v-icon>
        </v-btn>
        <v-navigation-drawer
          class="setting-drawer"
          temporary
          right
          v-model="rightDrawer"
          hide-overlay
          fixed
        >
          <theme-settings></theme-settings>
        </v-navigation-drawer>
      </v-app>
    </template>


    <v-snackbar
      :timeout="3000"
      bottom
      right
      :color="snackbar.color"
      v-model="snackbar.show"
    >
      {{ snackbar.text }}
      <v-btn dark flat @click.native="snackbar.show = false" icon>
        <v-icon>close</v-icon>
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
  import AppDrawer from '@/components/AppDrawer'
  import AppToolbar from '@/components/AppToolbar'
  import AppFab from '@/components/AppFab'
  import PageHeader from '@/components/PageHeader'
  import ThemeSettings from '@/components/ThemeSettings'

  export default {
    components: {
      AppDrawer,
      AppToolbar,
      AppFab,
      PageHeader,
      ThemeSettings
    },
    data: () => ({
      expanded: true,
      rightDrawer: false,
      snackbar: {
        show: false,
        text: '',
        color: '',
      }
    }),

    methods: {
      openThemeSettings() {
        this.$vuetify.goTo(0)
        this.rightDrawer = (!this.rightDrawer)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .setting-fab
    top: 50% !important;
    right: 0;
    border-radius: 0

  .page-wrapper
    min-height: calc(100vh - 64px - 50px - 81px);
    margin-bottom 50px;

  .app--footer
    position absolute;
    bottom 0;
    width 100%;

</style>
