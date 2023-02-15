<template>
  <AppHeader />
  <router-view></router-view>
  <AppPlayer />
</template>

<script>
import AppHeader from "@/components/Header.vue";
import Auth from "@/components/Auth.vue";
import { mapWritableState } from "pinia";
import useUserStore from "@/stores/user";
import { auth } from "./includes/firebase";
import AppPlayer from "@/components/Player.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    Auth,
    AppPlayer,
  },
  computed: {
    ...mapWritableState(useUserStore, ["userLoggedIn"]),
  },
  created() {
    //console.log("auth.currentUser app.vue")
    //console.log(auth.currentUser)
    if (auth.currentUser) {
      this.userLoggedIn = true;
    }
  },
};
</script>
