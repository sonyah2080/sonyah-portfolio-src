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

      <div class="pofol">
        <lightbox
          id="mylightbox"
          :images="images"
          :image_class=" 'img-responsive img-rounded' "
          :album_class=" 'my-album-class' "
          :options="options">
        </lightbox>
      </div>

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
import p3YesCarImg from 'static/pofol_list/P3_yescar.png'
import Lightbox from 'vue-simple-lightbox'

export default {
  components: {
    Lightbox
  },
  data () {
    return {
      images: [
        {
          src: p3YesCarImg,
          title: 'Yescar'
        },
        {
          src: p3YesCarImg,
          title: 'Yescar'
        }
      ],
      options: {
        closeText: 'X',
        swipeClose: true
      }
    }
  }

}
</script>

<style lang="scss">
  @import './Home.scss'
</style>
