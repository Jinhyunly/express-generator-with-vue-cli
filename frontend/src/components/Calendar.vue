<template>
  <div class="Calendar">
    <div class="section">
        <div class="container" id="calendar_header">
            {{movies[0].name}}
        </div>
    </div>
    <div class="section">
        <div class="container" id="calendar_calendar">
            캘린더
        </div>
    </div>
    <div class="section">
        <div class="container" id="calendar_date">
            05.04(금)
        </div>
    </div>
    <div class="section">
        <div class="container" id="calendar_button">
            <div class="calendar_button_info">
                생리시작
            </div>
            <div class="calendar_button_info">
                생리종료
            </div>
            <div class="calendar_button_info">
                피임약
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
  name: 'calendar',
  data () {
    return {
      movies: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

