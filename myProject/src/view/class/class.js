export default {
  name: "home",
  data () {
    return {
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
