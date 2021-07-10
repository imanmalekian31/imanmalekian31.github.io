import Vue from "vue";

const images = {
  armChair: require("~/static/images/arm-chair.jpg"),
  bed: require("~/static/images/bed.jpg"),
  bookShelves: require("~/static/images/book-shelves.jpg"),
  desk: require("~/static/images/desk.jpg"),
  sideTable: require("~/static/images/side-table.jpg"),
  wallShelves: require("~/static/images/wall-shelves.jpg")
};

Vue.mixin({
  beforeCreate() {
    this.$images = images;
  }
});
