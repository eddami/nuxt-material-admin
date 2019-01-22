  <template>
  <v-layout row class="align-center layout px-4 pt-4 app--page-header">
    <div class="page-header-left">
      <h3 class="pr-3">{{title}}</h3>
    </div>
    <v-icon>home</v-icon>
    <v-breadcrumbs divider="-" :items="breadcrumbs">

    </v-breadcrumbs>
    <v-spacer></v-spacer>
    <div class="page-header-right">
      <v-btn icon>
        <v-icon class="text--secondary">refresh</v-icon>
      </v-btn>
    </div>
  </v-layout>  
</template>

<script>
import menu from '@/api/menu';
export default {
  data () {
    return {
      title: ''
    };
  },
  computed: {
    breadcrumbs: function () {
      let breadcrumbs = [];
      menu.forEach(item => {
        if (item.items) {
          let child =  item.items.find(i => {
            return i.href === this.$route.path;
          });
          if (child) {
            breadcrumbs.push({text: item.title});
            breadcrumbs.push({text: child.title, disabled: true});
            this.title = child.title;
          }
        } else {
          if (item.href === this.$route.path) {
            this.title = item.title;
            breadcrumbs.push({text: item.title});
          }
        }
      });
      return breadcrumbs;
    },    
  }
};
</script>
