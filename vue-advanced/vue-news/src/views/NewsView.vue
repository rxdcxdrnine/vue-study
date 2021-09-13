<template>
  <list-item />
</template>

<script>
import ListItem from "../components/ListItem.vue";
import ListMixin from "../mixins/ListMixin";

export default {
  components: {
    ListItem,
  },
  mixins: [ListMixin],
  // created() {
  //   // 다른 컴포넌트에 이벤트 버스를 통해 이벤트 발생
  //   this.emitter.emit("start:spinner");
  //   this.$store
  //     .dispatch("FETCH_NEWS")
  //     .then(() => {
  //       this.emitter.emit("end:spinner");
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // },
};
</script>

<style></style>
