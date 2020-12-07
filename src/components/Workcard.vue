<template>
  <div>
    <h2>My Portfolio</h2>
    <v-layout wrap>
      <v-flex sm4 v-for="item in worklist" :key="item.id">
        <transition appear>
          <v-card>
            <a :href="item.link">
              <img :src="item.img" alt height="200" />
            </a>
            <v-card-title>
              <p>{{ item.title }}</p>
              <p>{{ item.skill }}</p>
              <p>{{ item.charge }}</p>
            </v-card-title>
          </v-card>
        </transition>
      </v-flex>
    </v-layout>
    <div>
      その他の実績に関してはお問い合わせください。 <br />⇒
      <router-link :to="{ name: 'contact' }">
        <span>Contact</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      worklist: [
        {
          id: 1,
          title: "【Lagoon（仮）】",
          link: "https://honkidasu.net/my-portfolio1/",
          skill: "HTML, Sass, jQuery, WordPress",
          charge: "デザイン, コーディング",
          img: require("../assets/site-1.jpg"),
        },
        {
          id: 2,
          title: "【My site】",
          link: "/",
          skill: "HTML, Sass, Vue.js, Vuetify",
          charge: "デザイン, コーディング",
          img: require("@/assets/site-2.jpg"),
        },
        {
          id: 3,
          title: "【ゆる勉】",
          link: "https://ancient-spire-97884.herokuapp.com/",
          skill: "HTML, Sass, Ruby on Rails",
          charge: "デザイン, コーディング",
          img: require("@/assets/site-3.jpg"),
        },
        {
          id: 4,
          title: "【凪】",
          link: "https://stormy-retreat-61895.herokuapp.com/",
          skill: "HTML, CSS, flask, JavaScript",
          charge: "デザイン, コーディング in チーム制作",
          img: require("@/assets/site-4.jpg"),
        },
        {
          id: 5,
          title: "【Roots Create】",
          link: "https://roots-create.studio.site/",
          skill: "STUDIO",
          charge: "コーディング",
          img: require("@/assets/site-5.jpg"),
        },
        {
          id: 6,
          title: "【DotRoots】",
          link: "https://dotroots.net/",
          skill: "HTML, CSS, WordPressカスタマイズ",
          charge: "コーディング",
          img: require("@/assets/site-6.jpg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
//scopedをつけると、CSSの適用範囲がここに限定される
.layout {
  margin-bottom: 45px;
}
.v-card {
  &:hover {
    opacity: 0.7;
    cursor: pointer;
    transform: scale(1.1, 1.1);
  }
}
a {
  color: rgba(0, 0, 0, 0.87);
  display: inline-block;
}
h2 {
  margin-bottom: 20px;
  font-size: 2.5vw;
}
.v-card {
  margin: 20px;
  border: 2px solid;
  img {
    width: 100%;
    object-fit: cover;
    border-bottom: 2px solid;
  }
}
.v-card__title {
  padding: 10px;
  p {
    width: 100%;
    font-weight: bold;
    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s, transform 1s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
</style>
