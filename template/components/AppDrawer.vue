<template>
  <v-navigation-drawer
    id="appDrawer"
    :mini-variant.sync="mini"
    fixed
    :dark="$vuetify.dark"
    app
    v-model="drawer"
    width="260"
  >
    <v-toolbar color="primary darken-1" dark>
      <img src="../static/m.png" height="36" alt="Vue Material Admin Template" />
      <v-toolbar-title class="ml-0 pl-3">
        <span class="hidden-sm-and-down">Vue Material</span>
      </v-toolbar-title>
    </v-toolbar>
    <vue-perfect-scrollbar class="drawer-menu--scroll" :settings="scrollSettings">
      <v-list dense expend>
        <template v-for="(item, i) in menuItems">
          <!--group with subitems-->
          <v-list-group
            v-if="item.items"
            :key="item.name"
            :group="item.group"
            :prepend-icon="item.icon"
            no-action="no-action"
          >
            <template v-slot:activator>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </template>
            <template v-for="(subItem, i) in item.items">
              <!--sub group-->
              <v-list-group
                v-if="subItem.items"
                :key="subItem.name"
                :group="subItem.group"
                sub-group="sub-group"
              >
                <template v-slot:activator>
                  <v-list-item-title>{{ subItem.title }}</v-list-item-title>
                </template>
                <v-list-item
                  v-for="(grand, i) in subItem.children"
                  :key="i"
                  :to="grand.href? grand.href : null"
                >
                  <v-list-item-title>{{ grand.title }}</v-list-item-title>
                </v-list-item>
              </v-list-group>
              <!--child item-->
              <v-list-item
                v-else
                :key="i"
                :to="subItem.href? subItem.href : null"
                :disabled="subItem.disabled"
                :target="subItem.target"
              >
                <v-list-item-title>
                  <span>{{ subItem.title }}</span>
                </v-list-item-title>
                <v-list-item-action v-if="subItem.action">
                  <v-icon :class="[subItem.actionClass || 'success--text']">{{ subItem.action }}</v-icon>
                </v-list-item-action>
              </v-list-item>
            </template>
          </v-list-group>
          <v-subheader v-else-if="item.header" :key="i">{{ item.header }}</v-subheader>
          <v-divider v-else-if="item.divider" :key="i"></v-divider>
          <!--top-level link-->
          <v-list-item
            v-else
            :to="item.href ? item.href : null"
            :disabled="item.disabled"
            :target="item.target"
            rel="noopener"
            :key="item.name"
          >
            <v-list-item-icon v-if="item.icon">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
    </vue-perfect-scrollbar>
  </v-navigation-drawer>
</template>
<script>
import menu from '@/api/menu'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  name: 'app-drawer',
  components: {
    VuePerfectScrollbar
  },
  props: {
    expanded: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    mini: false,
    scrollSettings: {
      maxScrollbarLength: 160
    },
    baseUrl:
      process.env.NODE_ENV === 'development'
        ? process.env.DEV_STATIC_BASE_URL
        : process.env.PROD_STATIC_BASE_URL
  }),
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer
      },
      set(val) {
        this.$store.commit('drawer', val)
      }
    },
    menuItems() {
      const items = []
      menu.forEach(item => {
        let addIt = true
        if (item.hasOwnProperty('forRoles')) {
          addIt = false
          for (let i = 0; i < this.user.roles.length; i++) {
            const role = this.user.roles[i]
            if (item.forRoles.indexOf(role) > -1) {
              addIt = true
              break
            }
          }
        }
        if (addIt) {
          items.push(item)
        }
      })
      return items
    },
    user() {
      return this.$auth.user
    }
  },
  methods: {
    genChildTarget(item, subItem) {
      if (subItem.href) return
      if (subItem.component) {
        return {
          name: subItem.component
        }
      }
      return { name: `${item.group}/${subItem.name}` }
    }
  }
}
</script>


<style lang="stylus">
#appDrawer {
  overflow: hidden;

  .drawer-menu--scroll {
    height: calc(100vh - 48px);
    overflow: auto;
  }
}

.v-navigation-drawer__content {
  overflow-y: hidden;
}
</style>