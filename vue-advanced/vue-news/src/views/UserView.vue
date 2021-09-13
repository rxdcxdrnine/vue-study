<template>
  <div>
    <user-profile>
      <template v-slot:username>{{ userInfo.id }}</template>
      <template v-slot:time>{{ "Joined " + userInfo.created }}</template>
      <template v-slot:karma>{{ userInfo.karma }}</template>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    UserProfile,
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", userName);
  },
  computed: {
    ...mapGetters({
      userInfo: "fetchedUser",
    }),
  },
};
</script>

<style></style>
