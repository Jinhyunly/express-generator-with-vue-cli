<template>
    <div class="Hospital">
        <div class="section">
            <div class="container" id="hospital_header">
                {{movies[0].name}}
            </div>
        </div>
        <div class="section">
            <div class="container" id="map">
                
            </div>
        </div>
        <div class="section">
            <div class="container" id="hospital_confirm">
                현재 위치에서 가까운 병원
            </div>
        </div>
        <div class="section">
            <div class="container" id="">
                <div class="hospital_info" id="">
                    한나 여성병원
                </div>
                <div class="hospital_info" id="">
                    미미 산부인과
                </div>
                <div class="hospital_info" id="">
                    마리 여성의원
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  created () {
    this.$http.get('/api/movies')
    .then((response) => {
      this.movies = response.data
    })
  },
  name: 'hospital',
  data () {
    return {
      movies: []
    //,   map
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

