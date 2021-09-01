<template>
  <VueBottomNavigation :options="options" v-model="selected" />
</template>

<script>
import VueBottomNavigation from "bottom-navigation-vue";

export default {
  components: { VueBottomNavigation },
  data: () => ({
    selected: 2,
    options: [
      { id: 1, icon: "fas fa-home", title: "Home", badge: 1 },
      { id: 2, icon: "fas fa-layer-group", title: "Category" },
      { id: 3, icon: "fas fa-cog", title: "Setting" },
      { id: 4, icon: "fas fa-user", title: "Account", badge: 15 },
      { id: 5, icon: "fas fa-bell", title: "Notifcation" },
    ],
  }),
};
</script>
