<template>
<div id="CummunityInfo">
    <div class="section">
        <form method="post" name="dataForm">
            <div id="cummunity_info_bar" class="container">
                <div class="cummunity_info_content1" v-on:click="back">
                    ←
                </div>
                <div class="cummunity_info_content2">
                    {{movie[0].name}}
                </div>
                <div class="cummunity_info_content3" v-on:click="heart">
                    ♡
                </div>
            </div>
        </form>
    </div>
        <div class="section">
            <div id="cummunity_info_likedate" class="container">
                <div class="cummunity_info_half">
                    좋아요 : {{movie[0].id}}
                </div>
                <div class="cummunity_info_half">
                    작성일: 2018.05.18
                </div>
            </div>
        </div>
        <div class="section">
            <div id="cummunity_info_content" class="container">
                내용 
            </div>
        </div>
        <div class="section">
            <div id="cummunity_info_comment" class="container">
                댓글, {{movie[0].director}}
            </div>
        </div>
</div>
</template>
<script>
export default {
  template: '#cummunityinfo',
  name: 'cummunityinfo',
  created: function () {
    var id = this.$route.params.id
    this.$http.get(`/api/movies/${id}`)
    .then((response) => {
      this.movie = response.data
    })
  },
  data: function () {
    return {
      movie: {},
      counter: 0
    }
  },
  methods: {
    back: function (event) {
      this.$router.push('/cummunity')
    },
    heart: function (event) {
      this.movie[0].id += 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
