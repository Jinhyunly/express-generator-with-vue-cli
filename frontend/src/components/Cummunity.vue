<template>
  <div class="Cummunity" v-cloak>
      <router-view></router-view>
        <div class="section" id="cummunity_nav">
          <form action="/cummunity">
            <div id="cummunity_search" class="container">
                  <select class="cummunity_content1">
                      <option selected>최신</option>
                      <option value="좋아요">좋아요</option>
                      <option value="댓글">댓글</option>
                  </select>
                  <div class="cummunity_content2">
                      <input type="text" v-model="inputValue" v-on:keyup="onKeyup" placeholder="검색어 입력" autofocus>
                      <input v-show="inputValue" v-on:click="inputValue=''" type="reset" class="btn-reset" value="x">
                  </div>
                  <div class="cummunity_content3" v-on:click.prevent="submitted">
                      검색{{inputValue}}
                  </div>
            </div>
          </form>
        </div>
        <div id="cummunity_listdiv">
            <div id="search-result">
                <ul>
                    <router-link :to="{ name: 'cummunityinfo', params: {id: movie.id}}"  v-for="movie in movies" v-bind:key="movie.id" class="movie">
                        <img v-bind:src="movie.poster" class="poster">
                        {{movie.name}}
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'cummunity',
  data () {
    return {
      movies: [],
      inputValue: this.value
    }
  },
  watch: {
  },
  methods: {
    submitted: function (event) {
      this.inputValue = ''
      this.$router.push('/cummunity')
    },
    onKeyup: function (event) {
    }
  },
  created () {
    this.$http.get('/api/movies')
    .then((response) => {
      this.movies = response.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
