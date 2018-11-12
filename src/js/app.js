import '../source/style.scss';
import anime from 'animejs';

/* global Vue */
new Vue({
  el: '#app',
  data: {
    chapter: 'one',
  },
  methods: {
    clickCard: function () {
      if (this.chapter === 'one') {
        this.chapter = 'two';
      } else if (this.chapter === 'two') {
        this.chapter = 'three';

        this.$nextTick(function () {
          anime({
            targets: this.$refs.gift,
            scale: 1.2,
            rotate: {
              value: 360,
              duration: 1800,
              easing: 'easeInOutSine',
            },
            delay: 250,
          });

          const animateButton = (scale, duration, elasticity) => {
            anime.remove(this.$refs.gift);
            anime({
              targets: this.$refs.gift,
              scale: scale,
              duration: duration,
              elasticity: elasticity,
            });
          };

          const enterButton = () => {
            animateButton(1.4, 800, 400);
          };

          const leaveButton = () => {
            animateButton(1.2, 600, 300);
          };

          setTimeout(() => {
            this.$refs.gift.addEventListener('mouseenter', enterButton, false);
            this.$refs.gift.addEventListener('mouseleave', leaveButton, false);

            this.$refs.gift.addEventListener('click', () => {
              anime({
                targets: this.$refs.paper,
                opacity: 0.9,
                scale: 0.8,
                delay: 50,
              });
            });
          }, 1800);
        });
      }
    },
  },
});
