<template>
  <div>
    <PageTitle title="부모 컴포넌트로부터 자식 컴포넌트로 정적 데이터 잔달" />
  </div>
</template>
<script>
import PageTitle from "../components/PageTitle";
export default {
  components: { PageTitle },
  data() {
    return {
      title: "동적 페이지 타이틀",
    };
  },
};
</script>
