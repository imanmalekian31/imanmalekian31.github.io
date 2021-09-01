<template>
  <div>
    <landing class="mt-2" />

    <section>
      <v-layout column wrap class="my-5" align-center>
        <h2>چنار چیست</h2>

        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-center">
                    <v-icon x-large color="blue"> mdi-cash-multiple </v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div>به صرفه</div>
                  </v-card-title>
                  <v-card-text>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-center">
                    <v-icon x-large color="blue"> mdi-speedometer </v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div>سریع</div>
                  </v-card-title>
                  <v-card-text>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-center">
                    <v-icon x-large color="blue">
                      mdi-shield-check-outline
                    </v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div>ایمن</div>
                  </v-card-title>
                  <v-card-text>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-parallax :src="imageLink.main" height="480">
        <v-layout column align-center justify-center>
          <div class="white--text mb-3 text-center">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </div>

          <v-btn class="blue lighten-2 mt-5" dark large href="/">
            تماس با ما
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-container fluid>
        <v-row dense>
          <v-col xl="6" lg="6" md="6" sm="12" xs="12">
            <div dence>
              <v-col class="left-item-col">
                <v-card>
                  <v-img
                    :src="require('~/assets/f6.webp')"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="608px"
                  >
                    <h3 class="text-right pr-4 pb-4">مبل</h3>
                  </v-img>
                </v-card>
              </v-col>
            </div>
          </v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12">
            <v-row dense>
              <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
                <v-card>
                  <v-img
                    :src="card.src"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="300px"
                  >
                    <h3 class="text-right pr-4 pb-4" v-text="card.title" />
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    title: "Endorfine",
    imageLink: {
      main: require("~/assets/p2.jpg"),
      sub_main: require("~/assets/p3.jpg"),
    },
    email: "",
    subscribed: false,

    cards: [
      {
        title: "صندلی",
        src: require("~/assets/f1.webp"),
        flex: 6,
      },
      {
        title: "میز",
        src: require("~/assets/f5.webp"),
        flex: 6,
      },
      {
        title: "کمد",
        src: require("~/assets/f3.webp"),
        flex: 6,
      },
      {
        title: "تخت خواب",
        src: require("~/assets/f4.jpg"),
        flex: 6,
      },
    ],
  }),
  methods: {
    subscribe() {
      this.subscribed = !this.subscribed;
    },
  },
};
</script>

<style scoped>
.landing-image {
  position: relative;
  height: 100vh;
  top: -65px;
}

.left-item-col {
  padding: 0px !important;
}

.finedTitle {
  font-weight: 900;
  text-shadow: 2px 2px #000000;
}

.social-icon {
  font-size: 21px;
  color: white;
}
</style>
