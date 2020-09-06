<template>
  <el-row>
    <el-col :span="12" :offset="6">
      <el-form ref="form" :model="uploadForm" label-width="100px">
        <el-form-item label="任务类型">
          <el-select v-model="uploadForm.taskType" placeholder="请选择NLP任务类型" style="width:400px">
            <el-option label="通用单文本分类" value="通用单文本分类" />
            <el-option label="情感分析/意图识别" value="情感分析/意图识别" />
            <el-option label="实体关系抽取" value="实体关系抽取" />
            <el-option label="文本关系分析" value="文本关系分析" />
            <el-option label="文本摘要" value="文本摘要" />
            <el-option label="文本排序学习" value="文本排序学习" />
          </el-select>
        </el-form-item>
        <el-form-item label="任务名称">
          <el-input v-model="uploadForm.name" placeholder="请填写该任务名" style="width:400px" />
        </el-form-item>
        <el-form-item label="任务描述">
          <el-input v-model="uploadForm.desc" type="textarea" placeholder="选填" style="width:400px" />
        </el-form-item>
        <el-form-item label="是否公开">
          <el-radio-group v-model="uploadForm.publicity">
            <el-radio label="是" />
            <el-radio label="否" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="文件上传">
          <el-upload
            ref="uploadFunc"
            class="upload-demo"
            :action="uploadInfo.uploadUrl"
            :file-list="uploadInfo.filelist"
            :headers="uploadInfo.headers"
            :data="uploadForm"
            :limit="1"
            :auto-upload="false"
            style="height:120px"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">查看各任务类型文件上传要求</div>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="margin-left:150px" @click="onUploadSubmit">确认上传</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'TrainFile',
  data() {
    return {
      uploadForm: {
        taskType: '',
        name: '',
        desc: '',
        publicity: ''
      },
      uploadInfo: {
        filelist: '',
        uploadUrl: process.env.VUE_APP_BASE_API + '/process-manage/data/train/file',
        headers: { 'Authorization': 'Bearer ' + this.$store.state.user.token }
      }
    }
  },
  methods: {
    onUploadSubmit() {
      this.$refs.uploadFunc.submit()
    }
  }
}
</script>

<style scoped>
</style>

