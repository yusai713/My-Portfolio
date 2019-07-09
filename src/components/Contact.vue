<template>
  <v-container>
    <div class="contact-img">
      <img src="@/assets/logo.png" alt />
    </div>
    <div class="contact-box">
      <p>
        <b>
          勉強会、お仕事依頼、人生相談...etc
          <br />お気軽にご連絡ください~！
        </b>
      </p>
      <p class="left">
        <v-icon style="color:#000;">far fa-envelope</v-icon>
        <a href="mailto:future.gazer713@gmail.com">&nbsp;future.gazer713@gmail.com</a>
      </p>
      <p class="left">
        <v-icon>fab fa-twitter</v-icon>
        <a href="https://twitter.com/yusai0713">&nbsp;@yusai0713</a>
      </p>
    </div>
  </v-container>
</template>

<script>
</script>

<style lang="scss">
//scopedをつけると、CSSの適用範囲がここに限定される
a:hover {
  font-weight: bold;
}
.left {
  text-align: left;
}
.contact-box {
  margin: 30px auto;
  width: 300px;
}
.contact-img {
  width: 110px;
  height: auto;
  margin: 0 auto;
  img {
    width: 100%;
  }
}
</style>
