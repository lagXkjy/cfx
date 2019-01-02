<template>
  <!-- 首页， 动态猪 -->
  <div class="wh-100 absolute">
    <div class="rank-box">
      <img class="rank-top opacity-none" src="../images/top.png" alt>
      <div class="rank-list rank-list-f">
        <div class="rank-rank"></div>
        <div class="rank-img"></div>
        <div class="rank-name"></div>
        <div class="rank-score">福气值</div>
      </div>
      <div class="rank-list relative" v-for="item in list" :key="item.rank">
        <div class="rank-rank">{{item.rank}}</div>
        <div class="rank-img">
          <img class="wh-100" src="../images/pictureFrame.png">
          <div class="rank-picture-box wh-100" :style="{backgroundImage:'url(' + item.UImages || item.Photo + ')'}"></div>
        </div>
        <div class="rank-name">{{item.NickName}}</div>
        <div class="rank-score">{{item.GoodValue}}</div>
        <div class="rank-border rank-border-green"></div>
        <div class="rank-border rank-border-yellow"></div>
      </div>
      <img class="rank-bottom opacity-none" src="../images/top.png" alt>
    </div>
    <!-- 横幅 -->
    <div class="banner-box absolute">
      <img class="wh-100" src="../images/banner.png" alt>
      <!-- 灯笼 -->
      <div class="wh-100 absolute">
        <img class="lantern lantern-l" src="../images/lantern-l.gif" alt>
        <img class="lantern lantern-r" src="../images/lantern-r.gif" alt>
      </div>
      <div class="banner-context width-100 absolute emblem">
        <span style="transform: rotateZ(-28deg) translate3d(0px, 0px, 0px);">已</span>
        <span style="transform: rotateZ(-20deg) translate3d(0px, 0px, 0px);">亥</span>
        <span style="transform: rotateZ(-12deg) translate3d(0px, 0px, 0px);">年</span>
        <span style="transform: rotateZ(-4deg) translate3d(0px, 0px, 0px);">福</span>
        <span style="transform: rotateZ(4deg) translate3d(0px, 0px, 0px);">气</span>
        <span style="transform: rotateZ(12deg) translate3d(0px, 0px, 0px);">排</span>
        <span style="transform: rotateZ(20deg) translate3d(0px, 0px, 0px);">行</span>
        <span style="transform: rotateZ(28deg) translate3d(0px, 0px, 0px);">榜</span>
      </div>
    </div>
    <div class="rank-box">
      <img @click="reduce" class="rank-top" src="../images/top.png" alt>
      <div class="rank-list rank-list-f opacity-none">
        <div class="rank-rank"></div>
        <div class="rank-img"></div>
        <div class="rank-name"></div>
        <div class="rank-score">福气值</div>
      </div>
      <div class="rank-list relative opacity-none" v-for="item in list" :key="item.rank">
        <div class="rank-rank">{{item.rank}}</div>
        <div class="rank-img">
          <img class="wh-100" src="../images/pictureFrame.png">
          <div class="rank-picture-box wh-100" :style="{backgroundImage:'url(' + item.UImages || item.Photo + ')'}"></div>
        </div>
        <div class="rank-name">{{item.NickName}}</div>
        <div class="rank-score">{{item.GoodValue}}</div>
        <div class="rank-border rank-border-green"></div>
        <div class="rank-border rank-border-yellow"></div>
      </div>
      <img @click="add" class="rank-bottom" src="../images/top.png" alt>
    </div>
  </div>
</template>

<script>
import $request from "@/utils/request";
export default {
  data() {
    return {
      rankingList: [],
      list: [],
      page: 1,
      size: 4
    };
  },
  created(){
      this.$store.commit('CHANGE_FLOWER' ,false)
  },
  mounted() {
    this.getList();
  },
  methods: {
    reduce() {
      if (this.page > 1) {
        this.page--;
        this.changeList();
      }
    },
    add() {
      if (this.page * this.size < this.rankingList.length) {
        this.page++;
        this.changeList();
      }
    },
    changeList() {
      let arr = [];
      let size = this.size;
      let rankingList = this.rankingList;
      let index = (this.page - 1) * size;
      let next = index + size;
      let max = next > rankingList.length ? rankingList.length : next;
      for (let i = index; i < max; i++) {
        arr.push(this.rankingList[i]);
      }
      this.$data.list = arr;
      this.list.splice(0, 0);
    },
    getList() {
      //获取列表
      $request.post("blessingList", {}).then(res => {
          //alert(JSON.stringify(res))
        let arr = res["_list"];
        for (let i = 0, len = arr.length; i < len; i++) {
          arr[i].rank = i + 1;
        }
        this.$data.rankingList = arr;
        this.changeList();
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.opacity-none {
  opacity: 0;
}
.rank-box {
  width: 6rem;
  position: absolute;
  top: 4rem;
  left: 0;
  right: 0;
  margin: auto;
}
.rank-top {
  width: 0.57rem;
  display: block;
  margin: 0 auto 0.4rem;
}
.rank-bottom {
  width: 0.57rem;
  display: block;
  margin: 0.4rem auto 0;
  transform: rotateZ(180deg);
}
.rank-list {
  width: 100%;
  padding: 0.3rem 0 0.3rem 0;
  display: flex;
  align-items: center;
}
.rank-list-f {
  padding: 0;
  position: absolute;
  left: 0;
  top: 0.8rem;
}
.rank-list-f > .rank-score {
  font-size: 0.35rem;
}
.rank-rank {
  font-size: 0.5rem;
  color: #00587f;
  text-shadow: 0px 0px 0.06rem #eccd00;
  width: 0.8rem;
  text-align: center;
}
.rank-img {
  width: 1.2rem;
  overflow: hidden;
  position: relative;
  top: 0;
  left: 0;
  height: 1.2rem / 0.78;
  margin: 0 0.34rem 0 0;
}
.rank-picture-box {
  width: 1.2rem - 0.2rem;
  height: 1.2rem / 0.78 - 0.2rem;
  position: absolute;
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
  margin: auto;
  z-index: -1;
  overflow: hidden;
  border-radius: 50%;
  background: url() no-repeat center;
  background-size: auto 100%;
}
.rank-name {
  width: 1.8rem;
  font-size: 0.32rem;
  color: #b31e23;
}
.rank-score {
  font-size: 0.4rem;
  color: #b31e23;
  text-shadow: 0px 0px 0.08rem #eccd00;
  width: 1.4rem;
  text-align: center;
}
.rank-border {
  width: 100%;
  height: 0.03rem;
  position: absolute;
  left: 0;
}
.rank-border-green {
  bottom: 0.04rem;
  background: #00a14b;
}
.rank-border-yellow {
  bottom: 0;
  background: #eccd00;
}
.banner-box {
  top: 1.3rem;
  width: 110%;
  height: 9rem / 2.48;
  left: -5%;
}
.lantern {
  position: absolute;
  top: (9rem / 2.48 / 2) - 0.2rem;
  width: 2.9rem;
}

.lantern-l {
  left: 0.15rem;
}

.lantern-r {
  right: 0.15rem;
  // transform: rotateY(180deg);
  // transform-origin: center top;
}

.banner-context {
  color: #ffffff;
  font-size: 0.66rem;
  font-family: "Pm";
  text-align: center;
  top: 0.4rem;
}

.emblem {
  position: absolute;
  height: 11rem;
}

.emblem span {
  position: absolute;
  display: inline-block;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>