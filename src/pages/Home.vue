<template>
  <div class="container">
    <ul>
      <li v-for="data in portfolios">
        <img :src="data.img">
        <p>{{ data.name }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'Home',
    data () {
      return {
        portfolios: [{
          name: '나의 망한 포트폴리오1번',
          img: 'https://yagumania.com/g2/data/cheditor5/1709/mania-done-20170905142712_xkbtvfqz.jpg'
        }, {
          name: '나의 잘한 포트폴리오 0번',
          img: 'https://yagumania.com/g2/data/cheditor5/1709/view_thumbnail/mania-done-20170905142731_iqaivdqg.jpg'
        }]
      }
    }
  }
</script>
<style lang="scss">

</style>
