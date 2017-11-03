<template>
  <p @click="run">textComponent 组件</p>
</template>
<script>
export default {
  name: "test",
  data () {
    return {
      content: "哈哈"
    };
  },
  methods: {
    run () {
      this.$emit("textEmit", this.content);
    }
  }
};
</script>
