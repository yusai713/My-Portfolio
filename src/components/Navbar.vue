<template>
  <header>
    <v-toolbar-side-icon @click="toggleSideMenu" class="hidden-sm-and-up"></v-toolbar-side-icon>
    <nav>
      <ul>
        <li>
          <router-link :to="{name: 'home'}" exact>
            <span>Home</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'about'}">
            <span>About</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'work'}">
            <span>Work</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'contact'}">
            <span>Contact</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapActions } from "vuex"; //conponentsのmethodsにstoreのactionメソッドを組み込む役割を持つ。

export default {
  component: {},
  methods: {
    ...mapActions(["toggleSideMenu"]) //追加したいアクションは配列に追加するだけでOK
  }
};
</script>

 <style lang="scss" scoped>
a {
  color: #35495e;
  text-decoration: none;
  padding: 5px 10px;
  margin: 0 3px;
  //font-weight: bold;
  &:hover {
    background: #41b883;
    color: white;
    font-weight: bold;
  }
}

header {
  height: 60px;
  position: absolute;
  display: flex;
  align-items: center;
  z-index: 100;
}

nav {
  font-size: 18px;
  position: fixed;
  right: 10px;
  ul {
    display: flex;
    li {
      list-style: none;
    }
  }
}

.router-link-active {
  background: #41b883;
  color: white;
  font-weight: bold;
}

@media screen and (max-width: 600px) {
  nav {
    display: none;
  }
}
</style>
