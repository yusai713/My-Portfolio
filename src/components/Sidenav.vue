<template>
  <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
    <v-list class="pa-1">
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <img src="@/assets/profile.png" />
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>悠才</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>

      <v-list-tile
        v-for="item in items"
        :key="item.title"
        :to="item.link"
        exact
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Home", icon: "home", link: { name: "home" } },
        { title: "About", icon: "face", link: { name: "about" } },
        { title: "Works", icon: "face", link: { name: "works" } },
        { title: "Contact", icon: "mail", link: { name: "contact" } },
      ],
    };
  },
};
</script>
