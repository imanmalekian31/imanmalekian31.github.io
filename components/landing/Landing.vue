<template>
  <div>
    <v-row no-gutters>
      <v-col
        v-for="(item, idx) in cards"
        :key="idx"
        cols="12"
        sm="6"
        md="4"
        class="cart"
      >
        <v-card class="pa-1" elevation="0" tile>
          <v-img :src="item.src">
            <span class="cart__title">
              {{ item.title }}
            </span>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: vm => ({
    cards: [
      {
        title: "صندلی",
        src: vm.$images.armChair
      },
      {
        title: "میز",
        src: vm.$images.bed
      },
      {
        title: "کمد",
        src: vm.$images.bookShelves
      },
      {
        title: "تخت خواب",
        src: vm.$images.desk
      },
      {
        title: "تخت خواب",
        src: vm.$images.sideTable
      },
      {
        title: "تخت خواب",
        src: vm.$images.wallShelves
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
.cart {
  cursor: pointer;

  &__title {
    display: inline-block;
    margin: 16px 16px 0 0;
    font-weight: 900;
    font-size: 18px;
  }
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(0.95);
  }
}
</style>
