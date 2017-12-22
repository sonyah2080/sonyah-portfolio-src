<template lang="html">
  <div class="container-fluid">
    <div class="container">
      <b-navbar toggleable="md" variant="faded" type="white">
        <a href="#">
          <img id="logo" src=".././assets/sonyah_logo.png">
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
        <img src=".././assets/jumbo.png" />
      </b-jumbotron>

      <div class="intro bv-row" md="12">
        <b-row>
          <b-col class="profile" md="4">
            <b-row>
              <b-col md="4" align-self="center" ><img src=".././assets/profile.png" /></b-col>
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
            dfndf
          </b-col>

          <b-col md="4" class="skill_r">

            dfndf
          </b-col>
        </b-row>
      </div>

      <div class="exper">
        <img src=".././assets/exper.png" />
      </div>

      <div class="pofol">
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'portfolio',
  data () {
    return {
      pofol: [{
        name: 'yescar',
        img: '.././assets/pofol_list/P3_yescar.png'
      }, {
        name: 'dareum',
        img: '.././assets/pofol_list/P4_dareum.png'
      }, {
        name: 'enumnet',
        img: '.././assets/pofol_list/P5_enumnet.png'
      }, {
        name: 'enumcut Prototyping',
        img: '.././assets/pofol_list/P6_enumcut_prototytping.png'
      }, {
        name: 'enumcut design',
        img: '.././assets/pofol_list/P7_enumcut_design.png'
      }, {
        name: 'kaiem',
        img: '.././assets/pofol_list/P8_kaiem.png'
      }, {
        name: 'lubycon',
        img: '.././assets/pofol_list/P9_Lubycon.png'
      }, {
        name: 'travailler',
        img: '.././assets/pofol_list/P10_Travailler.png'
      }, {
        name: 'enumnet leaflet',
        img: '.././assets/pofol_list/P11_enumnet)leaflet.png'
      }, {
        name: 'hyunjin',
        img: '.././assets/pofol_list/P12_Hyunjin.png'
      }, {
        name: 'PPT 1',
        img: '.././assets/pofol_list/P12_PPT.png'
      }, {
        name: 'PPT 2',
        img: '.././assets/pofol_list/P13_PPT.png'
      }, {
        name: 'samduk',
        img: '.././assets/pofol_list/P14_Samduk.png'
      }, {
        name: 'Youtube',
        img: '.././assets/pofol_list/P15_Youtube.png'
      }, {
        name: 'artwork',
        img: '.././assets/pofol_list/P16_artwork.png'
      }]
    }
  }
}
</script>

<style lang="scss">
  @import './Home.scss'
</style>
