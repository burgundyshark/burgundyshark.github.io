<template>
  <div id="wrapper">
    <Nav />
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
      console.log('mounted called', window)
      let that = this;
      terra.registerCreature(plant({ color: [155,128,155] }));
      terra.registerCreature(brute({ color: [231,187,192] }));
      terra.registerCreature(bully({ color: [141,231,233] }));
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
      init(window) {
        console.log('init called! ', window, this.terrarium);
        const width = window.innerWidth;
        const height = window.innerHeight;
        const cellSize = Math.max(width, height) / 75;

        this.terrarium ? this.terrarium.destroy() : this.terrarium = new terra.Terrarium(
          Math.ceil(width / cellSize), 
          Math.ceil(height / cellSize), 
          { cellSize }
        );
        
        
        
        this.terrarium.grid = this.terrarium.makeGridWithDistribution([['plant', 10], ['brute', 5], ['bully', 5]]);
        this.terrarium.animate();
      }
    }
  };
</script>
<style>
  body {
    overflow: hidden;
    background: rgb(63, 33, 55);
    padding: 0;
    margin: 0;
  }
  #wrapper {
    z-index: 2;
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: scroll;
  }
  h1 {
    color: white;
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