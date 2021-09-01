<template>
  <div>
    <v-text-field v-model="username" label="username" required />
    <v-text-field v-model="email" label="email" required />
    <v-text-field v-model="password" label="password" required />

    <v-btn class="mr-4" @click="submit"> submit </v-btn>
  </div>
</template>
<script>
export default {
  data: () => ({
    username: "",
    email: "",
    password: "",
  }),
  methods: {
    submit() {
      this.$axios
        .$post("/auth/local/register", {
          username: this.username,
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
        })
        .catch(console.error);
    },
  },
};
</script>
