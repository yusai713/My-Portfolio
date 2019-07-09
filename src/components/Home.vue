<template>
  <div class="bg-color">
    <transition appear>
      <h1>
        &lt;Welcome to MySite /
        <router-link :to="{name:'about'}">&gt;</router-link>
      </h1>
    </transition>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss">
.bg-color {
  position: relative;
  width: 100vw;
  height: 100vh;
  animation: wave02 10s ease infinite;
  animation-direction: alternate;
}
h1 {
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 6vw;
  width: 100%;
  text-align: center;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px #000;
  animation: wave 10s ease infinite;
  animation-direction: alternate;
}

@keyframes wave {
  0% {
    background-color: #40e0d0;
  }
  50% {
    background-color: #ff8c00;
  }
  100% {
    background-color: #ff0080;
  }
}

/*@keyframes wave02 {
  0% {
    background-color: #ff0080;
  }
  50% {
    background-color: #ff8c00;
  }
  100% {
    background-color: #40e0d0;
  }
}*/
</style>
