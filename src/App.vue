<template>
  <div id="app">
    <div class="head" v-if="tap">
        <div class="box1">
          <h5 class="title">猫眼电影</h5>
          <img src="https://p0.meituan.net/scarlett/f05f61e7a8f3f45fd071c068d7a26870356.png" alt="" @click="flag=!flag">
        </div>
        <div class="box2">
          <img src="https://p0.meituan.net/scarlett/448afce485c1f342895185c2be668fa411803.png@80q" alt="">
          <a href="" class="find">发现最新最热电影</a>
          <a href="" class="open">打开App</a>
        </div>
    </div>
    <div class="main">
      <router-view></router-view>
        <ul class="root" v-show="flag">
          <li>首页</li>
          <li>榜单</li>
          <li>热点</li>
          <li>商城</li>
        </ul>
    </div>
    <div class="footer" v-if="tap">
       <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
         <van-tabbar-item icon="video" to="/home">电影</van-tabbar-item>
         <van-tabbar-item icon="search" to="/tv">搜索</van-tabbar-item>
         <van-tabbar-item icon="browsing-history" to="/task">演出</van-tabbar-item>
         <van-tabbar-item icon="label" to="/place">影院</van-tabbar-item>
         <van-tabbar-item icon="manager-o" to="/mine">我的</van-tabbar-item>
       </van-tabbar> 
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
       active: 0,
       flag:false,
       tap:true,
    }
  }
}
</script>

<style>
  *{
  padding: 0;
  margin: 0;
  }
  html,body{
    height: 100%;
    overflow-x: hidden;
  }
  #app{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .head{
    height: 106px;
  }
  .box1{
    height: 48px;
    background-color: #e54847;
    display: flex;
    align-items: center;
  }
  .head .box1 img{
    width: 16px;
    height: 16px;
    position: absolute;
    right: 16px;
    top: 16px;
  }
  .box1 .title{
    margin-left: 153px;
    line-height: 48px;
    font-size: 18px;
    color: #ffffff;
  }
  .box2{
    height: 58px;
    display: flex;
    align-items: center;
  }
  .box2 img{
    width: 94px;
    height: 40px;
    margin-left: 10px;
    margin-right: 50px;
  }
  .box2 .find{
    font-size: 14px;
    color: #666;
    margin-right: 20px;
    font-weight: 620;
    
  }
  .box2 .open{
    color: #b37e7e;
    font-weight: 700;
  }
  .main{
    flex: 1;
    position: relative;
    overflow-y: auto;
    /* overflow-x: auto; */
    /* height: 800px; */
  }
  .main .root{
    z-index: 999;
    top: 0;
    right: 10px;
    position: absolute;
  }
  .main .root  li{
    text-align: center;
    line-height: 25px;
    width: 70px;
    height: 30px;
    border: 1px solid black;
  }
  .footer{
    height: 48px;
  }
</style>
