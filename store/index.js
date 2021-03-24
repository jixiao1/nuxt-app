import Vuex from 'vuex'

export default ()=>{

  const store = new Vuex.Store({
    state: {
      value: 100,
      movies: []
    },
    mutations: {
      set_movies(state, payload){
        console.log('set_movies....');
        state.movies = payload;
      },
      set_value(state){
        state.value += 100;
      }
    }
  })
  return store;


  
};