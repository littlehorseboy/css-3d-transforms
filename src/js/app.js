import '../source/style.scss';

/* global Vue */
new Vue({
  el: '#app',
  data: {
    chapter: 'one',
    chapterThreeOpen: true,
  },
  methods: {
    clickCard: function () {
      if (this.chapter === 'one') {
        this.chapter = 'two';
      } else if (this.chapter === 'two') {
        this.chapter = 'three';
      } else if (this.chapter === 'three') {
        this.chapterThreeOpen = !this.chapterThreeOpen;
      }
    },
  },
});
