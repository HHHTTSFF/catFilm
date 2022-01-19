<template>
  <div class="film">
      <div class="nav">
        <p class="start" @click="index=0" :class="index==0?'active':null">热映</p>
        <p @click="index=1" :class="index==1?'active':null">待映</p>
      </div>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad" v-show="index==0">
        <van-cell v-for="item in list" :key="item.id" @click="$router.push('/detail/'+item.id)">
          <div class="type" >
          <img :src="item.img.replace('/w.h/','/')" alt="">
          <div class="under">
              <h4>{{item.nm}}</h4>
              <h5>{{item.cat}}</h5>
              <p class="van-ellipsis">{{item.desc}}</p>
              <span>{{item.pubDesc}}</span>
          </div>
          <div class="pick">
            <p style="color:#faaf00">{{item.sc}}分</p>
            <van-button type="primary" size="mini">{{item.showStateButton.content}}</van-button>
          </div>
         </div>
        </van-cell>
      </van-list>
      <van-list
         v-model="loading"
         :finished="finished"
         finished-text="没有更多了"
         @load="onLoad" v-show="index==1">
      <van-cell v-for="item in coke" :key="item.id" @click="$router.push('/detail/'+item.id)">
      <div class="type"  >
          <img :src="item.img.replace('/w.h/','/')" alt="">
          <div class="under">
              <h4>{{item.nm}}</h4>
              <h5>{{item.cat}}</h5>
              <p class="van-ellipsis">{{item.desc}}</p>
              <span>{{item.pubDesc}}</span>
          </div>
          <div class="pick">
            <p style="color:#faaf00">{{item.wish}}人想看</p>
            <van-button type="primary" size="mini">想看</van-button>
          </div>
       </div>
       </van-cell>
      </van-list>
  </div>
</template>

<script>
//https://p0.meituan.net/128.180/movie/cd6f1b7ae8adb429374139b73b3080b71530477.jpg
//http://p0.meituan.net/w.h/movie/cd6f1b7ae8adb429374139b73b3080b71530477.jpg
import axios from "axios";
export default {
  name: "Home",
  data(){
    return {
        list:"",
        index:0,
        idx:0,
        idxArr:[0,12,24],
        loading: false,
        finished: false,
        total:0,
        coke:"",
    }
  },
  methods:{
    onLoad(){
     this.idx=this.idx+12
      this.getData()
    },
    getData(){
      
      axios.get(
     `http://localhost:8080/mmdb/movie/v2/list/hot.json?limit=12&offset=${this.idx}&ct=广州`
     ).then((num)=>{
       console.log(num.data.data.hot);
      // this.list=num.data.data.hot
      this.list=[...this.list,...num.data.data.hot]
      this.idx=this.idx+12
      
    
    })
    }
  },
  created() {
    this.$parent.tap = true;
  },
  mounted(){
      this.getData()
    //  axios.get(
    //  `http://localhost:8080/mmdb/movie/v2/list/hot.json?limit=12&offset=${this.idx}&ct=广州`
    //  ).then((num)=>{
    // console.log(num.data.data.hot);
    // this.list=num.data.data.hot
    // console.log(this.list);
     
    // })
    axios.get(`http://localhost:8080/mmdb/movie/v2/list/rt/order/coming.json?ci=20&limit=10`).then((data)=>{
      console.log(data.data.data.coming);
      this.coke=data.data.data.coming
      console.log(this.coke);
    })
  }
  

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.nav{
  display: flex;
  height: 43px;
}
.nav p{
  text-align: center;
  color: #666666;
  font-size: 16px;
  line-height: 43px;
  width: 44px;
}
.nav .start{
  margin-left: 130px;
  margin-right: 40px;
}
.active{
  color: #ef4328;
  border-bottom: 2px solid #ef4328;
}
.type{
  height: 115px;
  display: flex;
  align-items: center;
}
.type img{
  width: 63px;
  height: 90px;
  margin-left: 12px;
}
.under{
  margin-left: 12px;
}
.under h4{
  font-size: 14px;
}
.under h5{
  /* color: #a9a9a9; */
  color: #faaf00;
}
.under p{
  font-size: 12px;
  width: 180px;
  overflow: hidden;
}
.under span{
  font-size: 10px;
  color: #999999;
}
</style>
