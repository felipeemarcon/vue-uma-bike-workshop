<template>
  <div class="landing">
    <img class="landing__logo" src="@/assets/images/logo.svg" />

    <router-link
      class="landing__call-to-action"
      :to="{ name: 'network' }"
    >
      Ver estações
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.landing {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;

  &__logo {
    width: px-to-rem(500px);
  }

  &__call-to-action {
    padding-top: px-to-rem($default-font-size);
    padding-bottom: px-to-rem($default-font-size);
    width: px-to-rem(400px);
    font-weight: $bold-font-weight;
    font-size: px-to-rem($default-font-size * 1.5);
    color: $white;
    text-align: center;
    text-decoration: none;
    border: 0;
    border-radius: px-to-rem(5px);
    outline: 0;
    background-color: $primary-color;
    cursor: pointer;
    transition: 0.2s 0s ease;

    &:hover {
      background-color: #314866;
      transition: 0.2s 0s ease;
    }
  }
}
</style>
