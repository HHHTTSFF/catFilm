<template>
  <div>
    <van-cell title="我的订单" is-link />
    <van-cell title="优惠券" is-link />
    <van-cell title="影院会员卡" is-link />
    <van-cell title="想看的电影" is-link />
    <van-cell title="看过的电影" is-link />
    <router-link to="/login" class="reg">用户登录</router-link>
  </div>
</template>

<script>
export default {
  name: "Mine",
  created() {
    this.$parent.tap = true;
  },
};
</script>

<style scoped>
.van-cell,
.van-cell--clickable {
  height: 48px;
  border-bottom: 1px solid #ccc;
}
</style>>
    
