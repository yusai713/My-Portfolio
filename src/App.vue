<template>
  <v-app class="white">
    <Navbar />
    <Sidenav />

    <v-content>
      <router-view />
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import Sidenav from "@/components/Sidenav";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Navbar,
    Sidenav,
    Footer
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.container {
  margin-top: 80px;
  text-align: center;
}
</style>
