<template>
<div id="app-2">
  <v-alert type="primary" :value="true" v-for="i in arras">
    abcd{{i}}
  </v-alert>
</div>
</template>

<script>

export default {
  data () {
    return {
      seen: true,
      message: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다',
      arras: [1, 2, 3, 4, 'ww', 'xxxx']
    }
  }
}
</script>
