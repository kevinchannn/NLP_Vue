<template>
  <div>
    <process-chart />
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import processChart from './components/process-chart'

export default {
  name: 'Home',
  components: { processChart },
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
