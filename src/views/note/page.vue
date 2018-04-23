<template>
  <article class="content -note" v-if="content" v-html="content" />
  <Loading v-else />
</template>

<script>
import Masonry from "masonry-layout"
import Loading from "@/components/loading"

let masonry

export default {
  path: "/notes/:pre/:title",
  name: "notes",
  components: {
    Loading
  },
  computed: {
    content() {
      return this.$store.state["notes"].content
    }
  },
  mounted() {
    this.$store.dispatch("notes/getContent", this.$route)
  },
  watch: {
    content() {
      this.$nextTick(() => {
        masonry = this.$el.contains(this.$el.getElementsByTagName("ul")[0])
          ? new Masonry(this.$el, {
              columnWidth: "ul",
              horizontalOrder: true,
              percentPosition: true
            })
          : {
              destroy() {}  // 防止销毁时为空对象
            }
      })
    }
  },
  destroyed() {
    masonry.destroy()
  }
}
</script>

<style src="./style.scss" lang="scss"></style>
