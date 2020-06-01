<template>
  <div>
    <div id="cube-manage-panel" :class="modalClass">
      <div id="edge" @click="toggle()">
        <slot name="edge"></slot>
      </div>
      <div id="content">
        <slot name="content"></slot>
      </div>
    </div>
    <div id='side-modal-overlay' @click="sideModalShow = false" :class="overlayClass"></div>
  </div>
</template>

<script>
  export default {
    name: "SideModal",
    props:['showModal'],
    data:function () {
      return{
        sideModalShow: this.$props.showModal
      }
    },
    methods:{
      toggle(){
        this.sideModalShow = !this.sideModalShow;
      },
      openModal(){
        this.sideModalShow = true;
      },
      closeModal(){
        this.sideModalShow = false;
      }
    },
    computed:{
      modalClass(){
        const defaultClass = "";
        if(this.sideModalShow === true){
          return defaultClass+"show"
        }
        //if this,sideModalShow is undefined means the modal is just loaded, we want to put empty class
        if(this.sideModalShow === undefined){
          return defaultClass+"";
        }
        return defaultClass+"hide";
      },
      overlayClass(){
        const defaultClass = "";
        if(this.sideModalShow === true){
          return defaultClass+"darken";
        }
        return defaultClass+"";
      }
    }
  }
</script>

<style lang="scss" scoped>
  $search-module-width: 500px;
  $slide-duration:      0.5s;
  $edge-length:         60px;

  body{
    #side-modal-overlay{
      position: fixed;
      top:0;
      left: 0;
      transition: opacity $slide-duration ease-in-out;
      background-color: #000;
      height: 100vh;
      width: 100vw;
      overflow: hidden;
      outline: 0;
      cursor: pointer;
      z-index: 1040;
      opacity: 0;
      pointer-events: none;
    }
  }
  #side-modal-overlay.darken{
    pointer-events: inherit;
    transition: opacity $slide-duration ease-in-out;
    opacity: 0.5;
  }

  #cube-manage-panel{

    //normal style
    overflow-y: auto;
    display: flex;
    justify-content: flex-start;

    //animation slide in slide out property
    z-index: 1050;

    //make it transparent, only child element is clickable
    background-color: transparent;
    pointer-events: none;
    &, *{
      pointer-events: auto;
    }

    height: 100vh;
    position: fixed;
    width: $search-module-width;
    max-width: 100vw;
    right: -$search-module-width + $edge-length;
    top: 0;

    #edge{
      pointer-events: auto;
      content: '';
      left: -40px;
      margin-top: 100px;
      z-index: inherit;
      width: 60px;
      height: 160px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #content{
      width: 100%;
      height: 100%;
      background-color: white;
    }

    &.hide{
      -webkit-animation: show-right $slide-duration backwards;
      animation: show-right $slide-duration backwards;
    }
    &.show{
      right: 0;
      -webkit-animation: hide-right 0.3s forwards;
      animation: hide-right $slide-duration forwards;
      #edge{
        svg{
          transform: rotate(180deg);
          transition: transform 0.5s ease;
        }
      }
    }
  }

  @-webkit-keyframes show-right {
    0% { right:0; }
    100% {
      right: -$search-module-width + $edge-length;
    }
  }
  @keyframes show-right {
    0% { right:0; }
    100% {
      right: -$search-module-width + $edge-length;
    }
  }

  @-webkit-keyframes hide-right {
    0% {
      right:-$search-module-width + $edge-length;
    }
    100% { right: 0; }
  }
  @keyframes hide-right {
    0% {
      right:-$search-module-width + $edge-length;
    }
    100% { right: 0; }
  }

</style>
