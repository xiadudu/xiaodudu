<template>
  <div>
    <div class="jumbotron">
      <h2>class页面</h2>

      <router-link :to="{ name: 'classRoom'}">Classroom</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import classCtrl from "./class";
import "./class.less";

export default classCtrl;
</script>
