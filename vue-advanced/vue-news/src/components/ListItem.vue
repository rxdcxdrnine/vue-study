<template>
  <div>
    <ul class="news-list">
      <li :key="item" v-for="item in listItems" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || "-" }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <!-- 타이틀 영역 -->
          <p class="news-title">
            <template v-if="item.domain">
              <a :href="item.url">{{ item.title }}</a>
            </template>
            <template v-else>
              <router-link :to="`/item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>
          <!-- 세부 정보 영역 -->
          <small class="link-text">
            {{ item.time_ago }} by
            <template v-if="item.user">
              <router-link :to="`/user/${item.user}`" class="link-text">
                {{ item.user }}
              </router-link>
            </template>
            <template v-else>
              <a :href="item.url">{{ item.domain }}</a>
            </template>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // created() {
  //   const name = this.$route.name;
  //   if (name === "news") {
  //     this.$store.dispatch("FETCH_NEWS");
  //   } else if (name === "ask") {
  //     this.$store.dispatch("FETCH_ASK");
  //   } else {
  //     this.$store.dispatch("FETCH_JOBS");
  //   }
  // },
  computed: {
    listItems() {
      return this.$store.getters.fetchedList;
      // HOC 를 통해 컴포넌트 내에서 분기 처리할 필요 없음
      // const name = this.$route.name;
      // if (name === "news") {
      //   return this.$store.getters.fetchedNews;
      // } else if (name === "ask") {
      //   return this.$store.getters.fetchedAsk;
      // } else {
      //   return this.$store.getters.fetchedJobs;
      // }
    },
  },
};
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #41b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>
