<template>
  <div id="wrapper">
    <Nav />
    <div class="content">
      <h1>Development &amp; Design</h1>
      <h4>I Make Pretty Web Things</h4>
    </div>
    <footer>

    </footer>
  </div>
</template>
<script>
  import { plant, brute, bully } from '~/assets/creatures';
  import Nav from '../components/nav';

  export default {
    head: { script: [{ src: '//cdn.jsdelivr.net/terra/latest/mainfile'}] },
    components: { Nav },
    data() {
      return {
        window: [0, 0],
        terrarium: undefined,
        initTimeout: undefined
      };
    },
    mounted() {
      let that = this;
      terra.registerCreature(plant({ color: [116, 60, 99] }));
      terra.registerCreature(brute({ color: [224, 90, 179] }));
      terra.registerCreature(bully({ color: [151,241,243] }));
      this.init(window);
      this.$nextTick(() => {
        window.addEventListener('resize', function(e) {
          clearTimeout(that.initTimeout);
          that.initTimeout = setTimeout(that.init(window), 300);
          that.init(window);
        });
      });
    },
    methods: {
      init(window, that) {
        console.log('init called! ', window, this.terrarium);
        const width = window.innerWidth;
        const height = window.innerHeight;
        const cellSize = Math.max(width, height) / 75;

        if (this.terrarium) {
          this.terrarium.stop();
        } else {
          this.terrarium = new terra.Terrarium(
            Math.ceil(width / cellSize), 
            Math.ceil(height / cellSize), 
            { cellSize }
          );
        }        
        
        this.terrarium.grid = this.terrarium.makeGridWithDistribution([['plant', 50], ['brute', 5], ['bully', 10]]);
        this.terrarium.animate();
      }
    }
  };
</script>
<style lang="scss">
  body {
    overflow: hidden;
    background: rgb(63, 33, 55);
    color: rgb(116, 60, 99);
    padding: 0;
    color: rgb(224, 90, 179);
    margin: 0;
  }
  #wrapper {
    z-index: 2;
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: scroll;
  }
  .content {
    color: white;

    h1 {
      padding-top:20vh;
      font-size: 400%;
      text-align: center;
    }
    h4 {
      font-weight:100;
      text-transform:uppercase;
      letter-spacing: 1.5vw;
      font-size: 100%;
      text-align: center;
    }
  }
  canvas {
    opacity: 0.5;
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  }
</style>