import { h } from "vue";
import ListView from "./ListView.vue";

export default (name) => {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션
    // 인스턴스의 옵션들을 공통적으로 정의하여 각 페이지 view 에서 중복된 코드 제거
    name,
    created() {
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

    // render 함수를 이용해 컴포넌트를 렌더링
    render() {
      return h(ListView);
    },
  };
};
