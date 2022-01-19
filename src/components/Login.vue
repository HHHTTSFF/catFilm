<template>
  <div class="pass">
    <div class="box1">
      <van-icon
        name="arrow-left"
        size="20"
        color="#ccc"
        @click="$router.back()"
      />
      <h2 class="title-main">猫眼电影</h2>
    </div>
    <div class="user">
      <van-field
        v-model="tel"
        type="tel"
        label="手机号"
        placeholder="请输入手机号"
      >
        <template #button>
          <van-button size="mini" type="primary" >发送验证码</van-button>
        </template>
      </van-field>
      <van-field
        v-model="sms"
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
      >
      </van-field>
     <van-button type="primary" size="normal" color="skyblue">登陆</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      tel: "",
    };
  },
//   methods:{
//       fn(){
//           console.log(1)
//       }
//   },
  created() {
    this.$parent.tap = false;
  },
};
</script>

<style>
.pass{
    position: relative;
}
.title-main {
  margin-left: 130px;
  line-height: 48px;
  font-size: 18px;
  color: #ffffff;
}
.van-button--normal{
    margin-left: 140px;
    width: 120px;
    height: 40px;
    margin-top: 20px;
}
</style>