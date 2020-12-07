<template>
  <v-container>
    <div class="profile-img">
      <img src="@/assets/profile.png" alt />
    </div>
    <p>
      <b>悠才</b>
    </p>
    <p>
      対応力抜群のWebフリーランス。
      <br />アフィリエイト、LP/ホームページ制作、コワーキングカフェの運営をしています。
      <br />⇒
      <a href="https://yusai.me/profile/">経歴の詳細はこちら</a>
    </p>

    <div class="skill-set">
      <transition appear>
        <h2 class="bound">
          <span class="text-head">S</span>
          <span>k</span>
          <span>i</span>
          <span>l</span>
          <span>l</span>
          <span class="text-head">S</span>
          <span>e</span>
          <span>t</span>
        </h2>
      </transition>
      <v-layout wrap class="skill-name">
        <span>HTML</span>
        <span>CSS</span>
        <span>Sass</span>
        <span>JavaScript</span>
        <span>jQuery</span>
        <span>Wordpress</span>
        <span>STUDIO</span>
      </v-layout>
    </div>

    <div class="skill-studying">
      <transition appear>
        <h2 class="bound">
          <span class="text-head">S</span>
          <span>t</span>
          <span>u</span>
          <span>d</span>
          <span>y</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
        </h2>
      </transition>
      <v-layout wrap class="skill-name">
        <span>Ruby</span>
        <span>Ruby on Rails</span>
        <span>Python</span>
        <span>Flask</span>
      </v-layout>
    </div>

    <transition appear>
      <v-layout wrap class="information-icon bound02" v-cloak>
        <a href="https://twitter.com/yusai0713">
          <v-icon style="color: #1fa1f2">fab fa-twitter fa-3x</v-icon>
        </a>
        <a href="https://github.com/yusai713">
          <v-icon style="color: #000">fab fa-github fa-3x</v-icon>
        </a>
        <a href="https://yusai.me/">
          <img src="@/assets/logo.png" alt="ブログ" />
        </a>
      </v-layout>
    </transition>
  </v-container>
</template>

<script></script>

<style lang="scss" scoped>
$mx: 50px 0;
h2 {
  margin-bottom: 16px;
}
.profile-img {
  margin: 0 0 20px;
}

.skill-set {
  margin: $mx;
  h2 > span {
    background: #41b883;
  }
}

.skill-studying {
  margin: $mx;
  h2 > span {
    background: #ec7c95;
  }
}

h2 > span {
  display: inline-block;
  margin: 0 3px;
  line-height: 30px;
  width: 30px;
  border-radius: 50%;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
}

.skill-name {
  justify-content: center;
  margin-top: 20px;
  & > span {
    border: 1px solid;
    padding: 3px 5px;
    margin: 0 5px 10px;
    &:hover {
      background: #000;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
    }
  }
}

.information-icon {
  justify-content: center;
  a {
    margin-right: 20px;
    text-decoration: none;
    &:hover {
      transform: scale(1.2, 1.2); //X方向とY方向
      opacity: 0.7;
    }
    img {
      width: 3em;
      height: 3em;
    }
  }
}

.fa-3x {
  font-size: 3em;
}

//アニメーションfadein
.v-enter-active,
.v-leave-active {
  transition: opacity 1s, transform 1s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(50px);
}

.skill-set {
  .v-enter-active,
  .v-leave-active {
    transition: opacity 1s, transform 1s;
  }
  .v-enter,
  .v-leave-to {
    opacity: 0;
    transform: translateX(-50px);
  }
}

.skill-studying {
  .v-enter-active,
  .v-leave-active {
    transition: opacity 1s, transform 1s;
  }
  .v-enter,
  .v-leave-to {
    opacity: 0;
    transform: translateX(50px);
  }
}

/* v-cloak */
[v-cloak] {
  display: none;
}

//アニメーションbound
.bound > span {
  animation: bound 1.4s linear infinite;
  animation-iteration-count: 1;
  animation-direction: alternate;
  &:hover {
    transform: scale(1.2, 1.2);
  }
}

.skill-set {
  .bound span:nth-child(1) {
    animation-delay: 1s;
  }
  .bound span:nth-child(2) {
    animation-delay: 1.5s;
  }
  .bound span:nth-child(3) {
    animation-delay: 2s;
  }
  .bound span:nth-child(4) {
    animation-delay: 2.5s;
  }
  .bound span:nth-child(5) {
    animation-delay: 3s;
  }
  .bound span:nth-child(6) {
    animation-delay: 3.5s;
  }
  .bound span:nth-child(7) {
    animation-delay: 4s;
  }
  .bound span:nth-child(8) {
    animation-delay: 4.5s;
  }
}

.skill-studying {
  .bound span:nth-child(1) {
    animation-delay: 4.5s;
  }
  .bound span:nth-child(2) {
    animation-delay: 4s;
  }
  .bound span:nth-child(3) {
    animation-delay: 3.5s;
  }
  .bound span:nth-child(4) {
    animation-delay: 3s;
  }
  .bound span:nth-child(5) {
    animation-delay: 2.5s;
  }
  .bound span:nth-child(6) {
    animation-delay: 2s;
  }
  .bound span:nth-child(7) {
    animation-delay: 1.5s;
  }
  .bound span:nth-child(8) {
    animation-delay: 1s;
  }
}

@keyframes bound {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

.bound02 {
  animation: bound 1s linear infinite;
  animation-iteration-count: 2;
  animation-direction: alternate;
  animation-delay: 5.5s;
}
</style>
