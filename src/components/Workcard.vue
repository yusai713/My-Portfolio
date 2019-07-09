<template>
  <div>
    <h2>My Portfolio</h2>
    <v-layout wrap>
      <v-flex sm4 v-for="item in worklist" :key="item.id">
        <transition appear>
          <a :href="item.link">
            <v-card>
              <img :src="item.img" alt height="200" />
              <v-card-title>
                <p>{{item.title}}</p>
              </v-card-title>
            </v-card>
          </a>
        </transition>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      worklist: [
        {
          id: 1,
          title: "Lagoon(仮)",
          link: "/",
          img: require("../assets/site-1.jpg") //v-forで呼び出すときのパスはrequire('url')で指定する
        },
        {
          id: 2,
          title: "My site",
          link: "https://honkidasu.net/portfolio01/",
          img: require("@/assets/site-2.jpg")
        },
        {
          id: 3,
          title: "準備中",
          link: "work",
          img: require("@/assets/no-img.png")
        },
        {
          id: 4,
          title: "準備中",
          link: "work",
          img: require("@/assets/no-img.png")
        },
        {
          id: 5,
          title: "準備中",
          link: "work",
          img: require("@/assets/no-img.png")
        },
        {
          id: 6,
          title: "準備中",
          link: "work",
          img: require("@/assets/no-img.png")
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
//scopedをつけると、CSSの適用範囲がここに限定される
a {
  display: inline-block;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
    transform: scale(1.1, 1.1);
  }
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
