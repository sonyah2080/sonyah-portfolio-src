<template lang="html">
  <div class="container-fluid">
    <div class="container">
      <b-navbar toggleable="md" variant="faded" type="white">
        <a href="#">
          <img id="logo" src="../../static/sonyah_logo.png">
        </a>

        <b-collapse is-nav id="nav-collapse">
          <b-navbar-nav class="ml-auto">
            <!--right align item-->
            <b-nav-item href="#">Home</b-nav-item>
            <b-nav-item href="#">Profile</b-nav-item>
            <b-nav-item href="#">Portfolio</b-nav-item>
            <b-nav-item href="#">Contact me</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

      <b-jumbotron class="jumbotron">
        <img src="../../static/jumbo.png" />
      </b-jumbotron>

      <div class="intro bv-row">
        <b-row>
          <b-col class="profile" md="4">
            <b-row>
              <b-col md="4" align-self="center" ><img src="../../static/profile.png" /></b-col>
              <b-col md="8" align-self="center" class="name">
                <h5>Soye Park</h5>
                <p>UX/UI Designer</p>
              </b-col>
            </b-row>

            <b-row>
              <b-col md="12"><h6>Work_Scope</h6></b-col>
            </b-row>

            <b-row>
              <b-col sm="12" class="scope">
                <p>
                #UX/UI_Design #Branding_Design #Graphic_Design #Pictography
                #BI/CI_Design #Prototyping #HTML #CSS
                </p>
              </b-col>
            </b-row>
          </b-col>

          <b-col md="4" class="skill_l">
            <img src="../../static/skill_1.svg" />
          </b-col>

          <b-col md="4" class="skill_r">
            <img src="../../static/skill_2.svg" />
          </b-col>
        </b-row>
      </div>

      <div class="exper">
        <img src="../../static/exper.svg" />
      </div>

      <lightbox
        ref="lightbox"
        :images="images"
        album_class="my-lightbox row"
        :options="options">
      </lightbox>

      <div class="contact">
        <h5>Contact Me</h5>
        <p><icon name="phone" scale="1" ></icon> <span> 010 2090 7747</span></p>
        <p><icon name="envelope-o" scale="1"></icon><span> noixp9@gmail.com</span></p>
        <p><icon name="instagram" scale="1"></icon><span> sonyah_2080</span></p>
      </div>

    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import Lightbox from 'vue-simple-lightbox'

let images = []
for (let i = 1; i < 16; i++) {
  let obj = { src: null, title: '' }
  obj.src = require(`static/pofol_list/${i}.png`)
  obj.title = `Portfolio${i}`
  images.push(obj)
}

export default {
  components: {
    Lightbox
  },
  data () {
    return {
      images,
      options: {
        closeText: 'X',
        swipeClose: true,
        widthRatio: 0.5
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      $(this.$refs.lightbox.$el).find('.my-gallery').removeClass('my-gallery')
      $(this.$refs.lightbox.$el).find('.row > a').addClass('col-sm-12 col-md-4')
    })
  }
}
</script>

<style lang="scss">
  @import './Home.scss'
</style>
