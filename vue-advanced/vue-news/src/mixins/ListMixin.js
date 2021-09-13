export default {
  // 재사용할 컴포넌트 옵션

  methods: {
    beforeEnter() {
      // 다른 컴포넌트에 이벤트 버스를 통해 이벤트 발생
      this.emitter.emit("start:spinner");
      this.$store
        .dispatch("FETCH_LIST", this.$route.name)
        .then(() => {
          this.emitter.emit("end:spinner");
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
