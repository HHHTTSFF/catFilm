<template>
  <div class="detail">
    <div class="box2">
      <img
        src="https://p0.meituan.net/scarlett/448afce485c1f342895185c2be668fa411803.png@80q"
        alt=""
      />
      <a href="" class="find">领取50元电影票</a>
      <a href="" class="open">打开App</a>
    </div>
    <div class="rest">
      <p class="name">猫眼电影 > {{ speak.nm }}</p>
      <div class="top">
        <img
          :src="speak.img.replace('/w.h/', '/')"
          alt=""
          width="100px"
          height="138px"
        />
        <div class="list-item">
          <h1 class="bigtitle">{{ speak.nm }}</h1>
          <span>{{ speak.enm }}</span>
          <h5>{{ speak.cat }}</h5>
          <h6>{{ speak.star }}</h6>
          <p>
            <span>{{speak.pubDesc}} </span>
            <span> / {{speak.dur}}分钟</span>
          </p>
        </div>
      </div>
    </div>
    <div class="boot">
      <img
        src="https://s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/share-icon.png"
        alt=""
        width="19px"
        height="19px"
        style="margin-left: 20px"
      />
      <van-button round type="info" id="btn">特惠购票</van-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Detail",
  data() {
    return {
      speak: "",
    };
  },
  created() {
    this.$parent.tap = false;
  },
  mounted() {
    const { id } = this.$route.params;
    console.log(id);
    // let http = "http://localhost:8080/mmdb/movie/v5/" + id + ".json?ci=20";
    // console.log(http);
    axios
      .get("http://localhost:8080/mmdb/movie/v5/" + id + ".json?ci=20")
      .then((data) => {
        console.log(data.data.data.movie);
        this.speak = data.data.data.movie;
      });
  },
};
</script>

<style>
.bigtitle {
  font-size: 24px;
  color: #fff;
  /* margin-left: 10px; */
}
.detail {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.rest {
  flex: 1;
  background-color: #273a40;
}
.boot {
  height: 60px;
  display: flex;
  align-items: center;
}
.van-button--round {
  margin-right: 20px;
}
#btn {
  width: 282px;
  height: 44px;
  margin-bottom: 20px;
  background: #ff5269;
  border: none;
}
.top {
  display: flex;
}
.top img {
  margin: 15px;
}
.name {
  font-size: 14px;
  color: #ccc;
  margin: 10px;
}
.list-item {
  padding-left: 10px;
}
.list-item span {
  font-size: 0.24rem;
  opacity: 0.6;
  color: #fff;
}
.list-item h5 {
  font-size: 0.24rem;
  opacity: 0.6;
  color: #fff;
}
.list-item h6 {
  font-size: 0.24rem;
  opacity: 0.6;
  color: #fff;
}
</style>