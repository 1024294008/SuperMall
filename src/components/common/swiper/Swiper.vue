<template>
  <div id="hy-swiper">
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && totalWidth > 1">
        <div class="indicator-item" :class="{active: isActive(index)}" v-for="(item, index) in slideCount" :key="index"></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    interval: {
      type: Number,
      default: 3000
    },
    animDuration: {
      type: Number,
      default: 300
    },
    moveRatio: {
      type: Number,
      default: 0.25
    },
    showIndicator: {
      type: Boolean,
      default: true
    }
  },
  data(){
    return {
      totalWidth: 0,
      currentIndex: 1,
      slideCount: 0,
      swiperStyle: {},
      scrolling: false
    }
  },
  mounted(){
    setTimeout(() => {
      this.handleDom();
      this.startTimer();
    },400);
  },
  methods: {
    handleDom(){
      const swiper = document.getElementsByClassName('swiper')[0];
      const slides = swiper.getElementsByClassName('slide');

      this.totalWidth = swiper.offsetWidth;
      this.slideCount = slides.length;

      if(this.slideCount > 1){
        const firstSlide = slides[0].cloneNode(true);
        const lastSlide = slides[this.slideCount - 1].cloneNode(true);

        swiper.insertBefore(lastSlide, slides[0]);
        swiper.appendChild(firstSlide);

        this.swiperStyle = swiper.style;
      }
      this.setTransform(-this.totalWidth);
    },
    setTransform(position){
      this.swiperStyle.transform = `translate(${position}px, 0)`;
    },
    startTimer(){
      this.playTimer = setInterval(() => {
        this.currentIndex ++;
        this.scrollContent(-this.currentIndex * this.totalWidth);
      }, this.interval)
    },
    stopTimer(){
      clearInterval(this.playTimer);
    },
    scrollContent(position){
      this.scrolling = true;

      this.swiperStyle.transition = `transform ${this.animDuration}ms`;
      this.setTransform(position);

      this.checkPosition();

      this.scrolling = false;
    },
    checkPosition(){
      setTimeout(() => {
        this.swiperStyle.transition = '0ms';
        if(this.currentIndex <= 0){
          this.currentIndex = this.slideCount;
          this.setTransform(-this.currentIndex * this.totalWidth);
        }
        else if(this.currentIndex >= this.slideCount + 1){
          this.currentIndex = 1;
          this.setTransform(-this.currentIndex * this.totalWidth);
        }
      }, this.animDuration);
    },
    isActive(index){
      if(this.slideCount + 1 === this.currentIndex)
        return index === 0;
      else
        return this.currentIndex - 1 === index;
    },
    touchStart(e){
      if(this.scrolling)
        return;

      this.stopTimer();

      this.startX = e.touches[0].pageX;

    },
    touchMove(e){
      this.distance = e.touches[0].pageX - this.startX;
      let limitDistance = this.distance;
      if(Math.abs(this.distance) > this.totalWidth){
        limitDistance = this.distance < 0 ? -this.totalWidth : this.totalWidth
      }

      let moveDistance = -this.currentIndex * this.totalWidth + limitDistance;

      this.setTransform(moveDistance);
    },
    touchEnd(){
      let currentMove = Math.abs(this.distance);

      if(0 === this.distance){
        return;
      } else if(this.distance < 0 && currentMove > this.totalWidth * this.moveRatio){
        this.currentIndex ++;
      } else if(this.distance > 0 && currentMove > this.totalWidth * this.moveRatio){
        this.currentIndex --;
      }

      this.scrollContent(-this.currentIndex * this.totalWidth);

      this.startTimer();
    },
    previous(){
      this.changeItem(-1);
    },
    next(){
      this.changeItem(1);
    },
    changeItem(step){
      this.stopTimer();

      this.currentIndex += step;
      this.scrollContent(-this.currentIndex * this.totalWidth);

      this.startTimer();
    }
  }
}
</script>

<style>
  #hy-swiper{
    position: relative;
    overflow: hidden;
  }

  .swiper{
    display: flex;
    flex-flow: row nowrap;
  }
  .indicator{
    position: absolute;
    bottom: 8px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .indicator-item{
    width: 8px;
    height: 8px;
    background-color: #fff;
    border-radius: 4px;
    box-sizing: border-box;
    margin: 0 5px;
  }
  .indicator-item.active{
    background-color: red;
  }
</style>
