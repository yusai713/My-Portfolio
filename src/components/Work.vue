<template>
  <v-container>
    <Workcard />
  </v-container>
</template>

<script>
import Workcard from "@/components/Workcard";
export default {
  components: {
    Workcard
  }
};
</script>

<style lang="scss">
//scopedをつけると、CSSの適用範囲がここに限定される
</style>
