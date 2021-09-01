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

    <v-row>
      <v-col
        lg="3"
        md="3"
        sm="6"
        v-for="(product, idx) in topProducts"
        :key="idx"
      >
        <v-card
          elevation="0"
          class="mx-auto my-12 product-cart"
          max-width="374"
        >
          <v-img contain height="250" :src="product.src" />

          <div class="text-center">
            {{ product.title }}
          </div>

          <div class="text-center">
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            />
          </div>

          <div class="text-center price">400000</div>

          <div class="text-center">
            <v-btn class="circle0" color="secondary" icon plain>
              <v-icon>mdi-cart-outline</v-icon>
            </v-btn>
            <v-btn class="circle1" color="secondary" icon plain>
              <v-icon>mdi-heart-outline</v-icon>
            </v-btn>
            <v-btn class="circle2" color="secondary" icon plain>
              <v-icon>mdi-eye-outline</v-icon>
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <div v-for="product in products">
      <h1>{{ product.title }}</h1>
      <v-img :src="product.image" width="300" height="400" />
    </div>
  </div>
</template>

<script>
export default {
  data: (vm) => ({
    cards: [
      {
        title: "صندلی",
        src: vm.$images.armChair,
      },
      {
        title: "میز",
        src: vm.$images.bed,
      },
      {
        title: "کمد",
        src: vm.$images.bookShelves,
      },
      {
        title: "تخت خواب",
        src: vm.$images.desk,
      },
      {
        title: "تخت خواب",
        src: vm.$images.sideTable,
      },
      {
        title: "تخت خواب",
        src: vm.$images.wallShelves,
      },
    ],
    topProducts: [
      {
        title: "صندلی چرخ دار",
        src: vm.$images.test1,
      },
      {
        title: "صندلی چرخ دار",
        src: vm.$images.test2,
      },
      {
        title: "صندلی چرخ دار",
        src: vm.$images.test3,
      },
      {
        title: "صندلی چرخ دار",
        src: vm.$images.test3,
      },
      {
        title: "صندلی چرخ دار",
        src: vm.$images.test1,
      },
      {
        title: "صندلی چرخ دار",
        src: vm.$images.test2,
      },
      {
        title: "صندلی چرخ دار",
        src: vm.$images.test3,
      },
      {
        title: "صندلی چرخ دار",
        src: vm.$images.test3,
      },
    ],
    products: [],
  }),
  created() {
    this.fetchProducts();
    this.$axios
      .$post("/auth/local", {
        identifier: "iman",
        password: "Iman3145",
      })
      .then((res) => {
        console.log(res);
      })
      .catch(console.error);
  },
  methods: {
    fetchProducts() {
      this.$axios.$get("/products").then((res) => {
        this.products = res;
      });
    },
  },
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
  transition: 0.2s ease;

  &:hover {
    transform: scale(0.95);
  }
}

.product-cart {
  &:hover {
    .price {
      visibility: hidden;
    }
  }
}

.circle {
  visibility: hidden;

  .product-cart:hover & {
    transform: translateY(-10px);
    visibility: visible;
  }
}

.circle0 {
  @extend .circle;
  transition: transform 0.3s ease;
}

.circle1 {
  @extend .circle;
  transition: transform 0.4s ease;
}

.circle2 {
  @extend .circle;
  transition: transform 0.5s ease;
}
</style>
