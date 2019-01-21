<template>
  <v-app id="404">
    <template v-if="error.statusCode === 404">
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <div class="text-md-center">
              <h1>404</h1>
              <h2 class="my-3 headline ">Sorry, page not found</h2>
              <div>
                <v-btn color="primary" @click="goHome">Go Home</v-btn>
              </div>
            </div>
          </v-layout>
        </v-container>
    </template>
    <template v-if="error.statusCode === 403">
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <div class="mr-3 hidden-sm-and-down">
              <img src="@/static/error/403.svg" alt="">
            </div>
            <div class="text-md-center">
              <h1>403</h1>
              <h2 class="my-3 headline ">Sorry, access denied.</h2>
              <div>
                <v-btn color="primary" @click="goHome">Go Home</v-btn>
              </div>
            </div>
          </v-layout>
        </v-container>
    </template>
    <template v-if="error.statusCode === 500">
        <v-container fluid fill-height>
          <v-layout align-center justify-center row>
            <div class="mr-3 hidden-sm-and-down">
              <img src="@/static/error/500.svg" alt="">
            </div>
            <div class="text-md-center">
              <h1>500</h1>
              <h2 class="my-3 headline ">Sorry, the server is down.</h2>
              <div>
                <v-btn color="primary" @click="goHome">Go Home</v-btn>
              </div>
            </div>
          </v-layout>
        </v-container>
    </template>
  </v-app>
</template>

<script>
  export default {
    props: ['error'],
    methods: {
      goHome () {
        this.$router.push({ path: '/' });
      }
    },
    layout: 'default' // you can set a custom layout for the error page
  }
</script>

<style scoped lang="css">
  h1 {
    font-size: 150px;
    line-height: 150px;
    font-weight: 700;
    color: #252932;
    text-shadow: rgba(61, 61, 61, 0.3) 1px 1px, rgba(61, 61, 61, 0.2) 2px 2px, rgba(61, 61, 61, 0.3) 3px 3px;
  }
</style>
