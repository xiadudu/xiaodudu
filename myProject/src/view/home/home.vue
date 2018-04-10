<template>
  <div>
    <div class="jumbotron">
      <h1>'Allo, 'Allo!</h1>
      <p class="lead">Always a pleasure scaffolding your apps.</p>
      <p>{{tip}}</p>
      <p>{{"aaa"|filter}}</p>
      <router-link :to="{ name: 'classIndex'}">Class</router-link>
    </div>
  </div>
</template>
<script>
import homeCtrl from "./home";
import "./home.less";

export default homeCtrl;
</script>
<style>
  .showView{
    font-size: 30px;
    text-align: center;
    line-height: 300px;
  }
</style>
