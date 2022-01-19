<template>
  <div class="tv-item">
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <router-link to="/login" class="reg">用户登录</router-link>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from 'vant';
export default {
  name: "Tv",
  data() {
    return {
      move: "",
      value: '',

    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast('取消');
    },
  },
  created() {
    this.$parent.tap =true;
  },
  mounted() {
    axios
      .get(
        "http://localhost:8080/asgard/asgardapi/sns/common/feed/channel/list.json?uuid=9682DE10707B11ECAD33E3741C0A3D5957828A0C03F3476FBD75ABEBBCFB016C&channelId=4&feedChannelId=105&timestamp=1642563054446&offset=10"
      )
      .then((data) => {
        console.log(data);
      });
  },
};
</script>

<style>
.reg{
    margin: 10px;
    color: red;
}
</style>