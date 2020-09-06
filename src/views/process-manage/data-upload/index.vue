<template>
  <div class="app-container">
    <div class="switch-container">
      <el-radio-group v-model="switchDataSet">
        <el-radio-button label="训练数据集" />
        <el-radio-button label="批处理数据集" />
      </el-radio-group>
    </div>
    <div class="switch-container">
      <el-radio-group v-model="switchUploadMethod">
        <el-radio-button label="文件上传" />
        <el-radio-button label="接口导入" />
        <el-radio-button label="数据库导入" />
      </el-radio-group>
    </div>
    <div class="form-container">
      <keep-alive>
        <component :is="currentForm" />
      </keep-alive>
    </div>

  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import trainFile from './components/train-file'

export default {
  name: 'DataUpload',
  components: { trainFile },
  data() {
    return {
      switchDataSet: '训练数据集',
      switchUploadMethod: '文件上传',
      currentForm: 'trainFile'
    }
  },
  computed: {
  },
  created() {
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  .switch-container{
    margin:10px 0px 20px 40px
  }

  .form-container{
    margin:50px 0px 0px 0px
  }
}
</style>
