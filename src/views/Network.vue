<template>
  <div class="network">
    <Sidebar class="network__sidebar" :stations="stations" />

    <Map class="network__map" :stations="stations" />

    <Spinner v-if="isLoading" />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { FETCH_STATIONS } from '@/store/actions/types'

import Sidebar from '@/components/Sidebar'
import Map from '@/components/Map'
import Spinner from '@/components/Spinner'

export default {

  components: {
    Sidebar,
    Map,
    Spinner
  },

  computed: {

    ...mapState(['isLoading']),
    ...mapGetters(['stations'])

  },

  created () {

    this.$store.dispatch(FETCH_STATIONS)

  }


}

</script>

<style lang="scss">
  .network {
    display: flex;
    height: 100%;

    &__sidebar {
      flex-basis: 30%;
    }

    &__map {
      flex-grow: 1;
    }
  }
</style>
