<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(product, i) in productList">
          <td>{{ product.product_name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.delivery_price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import $api from "../mixins";

export default {
  data() {
    return {
      productList: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      this.productList = await $api(
        "https://90f4c35d-5023-43a0-9ab0-06ef6499adb3.mock.pstmn.io/list",
        "get"
      );
      console.log(this.productList);
    },
  },
};
</script>
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
