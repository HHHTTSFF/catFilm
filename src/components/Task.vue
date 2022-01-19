<template>
  <div>
    <div class="look">
      <van-search
        v-model="value"
        placeholder="找明星、演出、场馆"
        input-align="center"
      />
      <div class="day">
        <div class="logo">
          <img
            src="https://obj.pipi.cn/festatic/common/media/1641437249993-today-look.png"
            alt=""
            width="90px"
            height="24px"
          />
          <van-button round type="info" size="mini">更多</van-button>
        </div>
        <div class="shape">
          <div class="host" v-for="item in arr" :key="item.tpId">
            <img :src="item.posterUrl" alt="" />
          </div>
        </div>
      </div>
      <div class="see">
        <h3 style="margin-left: 10px">什么值得看</h3>
        <div class="able">
          <div class="lit" v-for="item in Img" :key="item.topProjectId">
            <img :src="item.coverUrl" alt="" />
            <p>{{ item.name }}</p>
            <span>{{ item.secondTitle }}</span>
          </div>
        </div>
      </div>
      <div class="week">
        <h3 style="margin-left: 10px">七日精选</h3>
        <div class="choose">
          <div class="like" v-for="item in check" :key="item.performanceId">
            <img :src="item.posterUrl" alt="" />
            <p class="van-multi-ellipsis--l2" id="pop">{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Task",
  data() {
    return {
      value: "",
      Img: "",
      arr: [],
      check: [],
    };
  },
  methods: {
      
  },
  created() {
    this.$parent.tap = true;
  },
  mounted() {
    axios
      .get(
        "http://localhost:8080/maoyansh/myshow/ajax/ranks?sellChannel=13&cityId=1&lng=0&lat=0"
      )
      .then((data) => {
        console.log(data.data.data);
        this.Img = data.data.data;
        console.log(this.Img);
      });
    axios
      .get(
        "http://localhost:8080/maoyansh/myshow/ajax/performances/calendar/0;pageNo=1;pageSize=20;st=10;timeFilterType=4?sellChannel=13&cityId=1&lng=0&lat=0"
      )
      .then((res) => {
        console.log(res.data.data);
        this.arr = res.data.data;
        console.log(this.arr);
      });
    axios
      .get(
        "http://localhost:8080/maoyansh/myshow/ajax/performances/0;st=4;p=1;s=20;tft=0?sellChannel=13&cityId=1&lng=0&lat=0"
      )
      .then((data) => {
        // console.log(data.data.data);
        this.check = data.data.data;
        console.log(this.check);
      });
  },
};
</script>

<style>
.see {
  height: 220px;
}
.see .able {
  display: flex;
  overflow-x: auto;
}
.see .able .lit {
  width: 100px;
  height: 183px;
  margin-left: 10px;
  position: relative;
}
.see .able .lit img {
  width: 100px;
  height: 183px;
}
.see .able .lit p {
  z-index: 1000;
  position: absolute;
  top: 6px;
  left: 10px;
  color: #fff;
  font-size: 0.875rem;
}
.see .able .lit span {
  z-index: 1000;
  position: absolute;
  top: 24px;
  left: 10px;
  color: #fff;
  font-size: 0.75rem;
}
.day {
  height: 180px;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.day .shape {
  display: flex;
  overflow-x: auto;
}
.day .shape .host img {
  width: 80px;
  height: 108px;
}
.week .choose {
  height: 170px;
  display: flex;
  overflow-x: auto;
  align-items: center;
}
.week .choose .like {
  height: 170px;
}
.week .choose .like img {
  width: 80px;
  height: 108px;
  margin-left: 10px;
}
.week .choose .like #pop {
  width: 80px;
  font-size: 0.75rem;
}
</style>