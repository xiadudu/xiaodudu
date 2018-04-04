<template>
  <div>
    <div class="jumbotron">
      <h1>'Allo, 'Allo!</h1>
      <p class="lead">Always a pleasure scaffolding your apps.</p>
      <p><a class="btn btn-lg btn-success" href="#">Splendid!</a></p>
      <p>{{tip}}</p>
      <p>{{"aaa"|filter}}</p>
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
