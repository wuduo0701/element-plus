<template>
  <el-button-group>
    <el-button type="primary" :icon="ArrowLeft">Previous Page</el-button>
    <el-button type="primary">
      Next Page<el-icon class="el-icon--right"><ArrowRight /></el-icon>
    </el-button>
  </el-button-group>

  <el-button-group class="ml-4">
    <el-button type="primary" :icon="Edit"></el-button>
    <el-button type="primary" :icon="Share"></el-button>
    <el-button type="primary" :icon="Delete"></el-button>
  </el-button-group>
</template>

<script setup lang="ts">
import {
  ArrowLeft,
  Edit,
  Share,
  Delete,
  ArrowRight,
} from '@element-plus/icons-vue'
</script>
