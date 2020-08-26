<template>
  <div>
    <process-chart />
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import ProcessChart from './components/ProcessChart'

export default {
  name: 'Home',
  components: { ProcessChart },
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
