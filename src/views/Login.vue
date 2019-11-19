<template>
  <section class="login">
    <form @submit.prevent="submit" class="login__form">
      <div class="login__wrap">
        <Logo />
        <label class="login__label">
          {{ $t("login.email.title") }}
          <input
            @input="error = false"
            name="email"
            class="login__input"
            v-model="form.email"
            type="email"
          />
        </label>
        <label class="login__label">
          {{ $t("login.password.title") }}
          <input
            @input="error = false"
            name="password"
            class="login__input"
            v-model="form.password"
            type="password"
          />
        </label>
        <button type="submit" class="login__button" :disabled="requesting">
          {{ $t("login.submit") }}
        </button>
        <p class="error" v-if="error">
          {{ $t("login.error") }}
        </p>
      </div>
    </form>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";

import Logo from "@/components/base/Logo";

export default {
  components: {
    Logo
  },

  data: () => ({
    requesting: false,
    error: false,
    form: {
      email: "",
      password: ""
    }
  }),

  computed: {
    ...mapState({
      tokens: state => state.auth.tokens
    })
  },

  methods: {
    ...mapActions({
      login: "auth/login",
      userDetails: "auth/getUserInfo"
    }),
    async submit() {
      this.error = false;
      this.requesting = true;
      try {
        await this.login(this.form);
        if (this.tokens) {
          this.$router.push("/dashboard");
          await this.userDetails(this.tokens);
        }
      } catch (error) {
        this.error = true;
      }
      this.requesting = false;
    }
  }
};
</script>
