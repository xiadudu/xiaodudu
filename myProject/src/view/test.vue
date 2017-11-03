<template>
  <div>
    <p @click="h">{{"哈哈哈哈哈哈哈哈哈哈哈" | strilter(2)}}</p>
    <du-s @textEmit="text"></du-s>
    <div class="triangle-up"></div>
    <div class="input-append date" id="datetimepicker" data-date="12-02-2012" data-date-format="dd-mm-yyyy">
    <input class="span2" size="16" type="text" value="12-02-2012">
    <span class="add-on"><i class="icon-th"></i></span>
    <hello></hello>
</div>
  </div>
</template>
<script>
export default {
  name: "test",
  data () {
    return {
      name: "是的二十四褐色额e"
    };
  },
  methods: {
    h () {
      // let arr = [1, 0, 2, 0, 5, 4, 5, 44, 5, 0, 0, 0, 0, 5];
      // let arrNew = arr.filter((value, index, item) => {
      //   return item.indexOf(value) === index;
      // });
      const set = new Set([1, 2, 3, 1, 3, 4]);
      console.log(set);
    },
    text (q) {
      console.log(q);
    }
  }
};
</script>
<style scoped>
.triangle-up {
    width: 0;
    height: 0;
    border-right: 20px solid transparent;
    border-bottom: 40px solid #A020F0;
    border-left: 20px solid transparent;
}
</style>
