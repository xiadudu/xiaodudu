export default {
  name: "home",
  data () {
    return {
      tip: "欢迎进入专业共建管理平台",
      hello: "Hello world"
    };
  },
  watch: {
    "data": {
      deep: true,
      handler: function (val, oldVal) {
        console.log(val);
      }
    }
  },
  mounted () {
  },
  methods: {
  },
  computed: {
  }

};
