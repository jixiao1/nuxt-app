<template>
  <div class="page" id="home">
    <h1>首页</h1>
    <h2>{{'dadsasdfk' | uppercase}}</h2>
    <h3>{{$store.state.value}}</h3>
    <button @click="btnAction">按钮</button>
    <banner />
    <ul>
      <li v-for="item in list" :key="item.id">
        <img :src="item.img" alt />
        <h3>{{item.nm}}</h3>
      </li>
    </ul>

    <hr/>

    <ul>
      <li v-for="item in $store.state.movies" :key="item.id">
        <img :src="item.img" alt="">
        <h3>{{item.nm}}</h3>
      </li>
    </ul>

  </div>
</template>

<script>
import banner from "~/components/home/banner";
import axios from "axios";
export default {
  // 只在服务器执行，给组件提供数据，返回值是promise，promise结果会合并给组件的data属性.
  asyncData({$config}) {
    console.log($config);
    // 请求数据
    // const result = await axios.get('https://m.maoyan.com/ajax/movieOnInfoList?token=&optimus_uuid=E8764470A3E311EA9AFE0F9197C74BCE1C115D6A38034596B66C9D5FECE2A7E2&optimus_risk_level=71&optimus_code=10')
    // const newData = result.data.movieList.map(item=>({
    //   ...item,
    //   img: item.img.replace('/w.h', '')+'@1l_1e_1c_128w_180h'
    // }));
    // return {
    //   list: newData
    // };
    return axios
      .get(
        "https://m.maoyan.com/ajax/movieOnInfoList?token=&optimus_uuid=E8764470A3E311EA9AFE0F9197C74BCE1C115D6A38034596B66C9D5FECE2A7E2&optimus_risk_level=71&optimus_code=10"
      )
      .then((result) => {
        const newData = result.data.movieList.map((item) => ({
          ...item,
          img: item.img.replace("/w.h", "") + "@1l_1e_1c_128w_180h",
        }));
        return {
          list: newData
        };
      });
  },

  async fetch({store}){
    console.log('fetch.....');
    // return axios.get('https://m.maoyan.com/ajax/mostExpected?ci=30&limit=10&offset=0&token=&optimus_uuid=E8764470A3E311EA9AFE0F9197C74BCE1C115D6A38034596B66C9D5FECE2A7E2&optimus_risk_level=71&optimus_code=10')
    // .then(result=>{
    //   store.commit('set_movies', result.data.coming);
    // })
    // .catch(error=>{

    // })
    const result = await axios.get('https://m.maoyan.com/ajax/mostExpected?ci=30&limit=10&offset=0&token=&optimus_uuid=E8764470A3E311EA9AFE0F9197C74BCE1C115D6A38034596B66C9D5FECE2A7E2&optimus_risk_level=71&optimus_code=10')
    const newData = result.data.coming.map(item=>({
      ...item,
      img: item.img.replace('/w.h', '')+'@1l_1e_1c_128w_180h'
    }))
    store.commit('set_movies', newData);
  },

  head: {
    title: '首页'
  },

  components: {
    banner,
  },

  data() {
    return {
      a: 1,
      b: 2,
    };
  },

  methods: {
    btnAction(){
      this.$store.commit('set_value');
    }
  },
  
  mounted() {
    console.log(this.$data);
    console.log(this.$store.state);

    console.log(this.$eventBus);

    this.$nextTick(()=>{
      this.$nuxt.$loading.start()
      setTimeout(() => {
        this.$nuxt.$loading.finish()
      }, 1000);
    });
  },
};
</script>

<style>
</style>