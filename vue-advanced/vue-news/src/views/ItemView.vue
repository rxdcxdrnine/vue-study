<template>
  <div>
    <!-- 사용자 정보 -->
    <section>
      <user-profile>
        <template v-slot:username>
          <router-link :to="`/user/${itemInfo.user}`">
            {{ itemInfo.user }}
          </router-link>
        </template>
        <template v-slot:time>{{ "Posted " + itemInfo.time_ago }}</template>
      </user-profile>
    </section>
    <section>
      <h3>{{ itemInfo.title }}</h3>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="itemInfo.content" />
    </section>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
import { mapGetters } from "vuex";

export default {
  components: { UserProfile },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", itemId);
  },
  computed: {
    ...mapGetters({
      itemInfo: "fetchedItem",
    }),
  },
};
</script>

<style></style>
