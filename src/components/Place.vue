<template>
  <div>
    <div class="nav-item">
      <p>全城</p>
      <p>品牌</p>
      <p>特色</p>
    </div>
    <div class="cinemas">
      <div class="every" v-for="item in arr" :key="item.shopId">
        <div class="book">
          <h4>{{ item.nm }}</h4>
          <h5 class="van-ellipsis">{{ item.addr }}</h5>
          <p>{{ item.promotion.platformActivityTag }}</p>
        </div>
        <p class="price">{{ item.price }}元起</p>
        <p class="long">{{ item.distance }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import where from "../place/cinemas-1.json";
console.log(where.data.cinemas);
export default {
  name: "Place",
  data() {
    return {
      arr: where.data.cinemas,
    };
  },
};
</script>

<style>
.nav-item {
  display: flex;
  height: 40px;
}
.nav-item p {
  flex: 1;
  text-align: center;
  line-height: 40px;
}
.every {
  height: 136px;
  display: flex;
  padding-left: 6px;
  border-bottom: 1px solid #ccc;
  position: relative;
}
.every .book h4 {
  font-size: 14px;
  color: #000;
  margin-top: 16px;
}
.every .book h5 {
  font-size: 12px;
  margin: 16px 0px;
  width: 230px;
  color: #666;
}
.every .book p {
  color: skyblue;
  font-size: 12px;
}
.price {
  color: red;
  margin-top: 16px;
  margin-left: 6px;
  
  position: absolute;
  top: 10px;
  right: 20px;
}
.long {
  margin-left: 10px;
  margin-top: 40px;
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>