import service from "@/services/class.service";
export default {
  name: "home",
  data () {
    return {
      tip: "欢迎进入专业共建管理平台",
      hello: "Hello world"
    };
  },
  watch: {
  },
  mounted () {
    service.getData({}).then((res) => {
      console.log(res);
    });
  },
  methods: {
  },
  computed: {
  }
};
