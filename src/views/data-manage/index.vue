<template>
  <div>
    <data-chart />
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import DataChart from './components/DataChart'

export default {
  name: 'Home',
  components: { DataChart },
  data() {
    return {
    }
  },
  computed: {
  },
  created() {
  }
}
</script>

<style lang="scss" scoped>
</style>
