export default {
  name: 'newNo',
  components: {
  },
  data() {
    return {
      phone: '',
      email: '',
      oldpass: '',
      newpass: '',
      confirmpass: '',
      nickname: '',
      store: '',
      ems: '',
      popupshowems: false,//快递公司 下拉框
      slotems: [
        {
          flex: 1,
          values: [],
          className: 'slot1',
          textAlign: 'center'
        }
      ],
      emshide: '',
      emshideid: '',
      emsId: ''
    }
  },
  methods: {
    emsLoad() {//性别
      // this.slotems[0].values = []
      // let params = {

      // }
      // let url = ''
      // this.$post(url, params).then(res => {
      //     if (res.data.retCode == 200) {
      //         let slotsems = res.data.data
      //         slotsems.map(item => {
      //             let obj = {
      //                 name: item.className,
      //                 value: item.id
      //             }
      //             this.slotems[0].values.push(obj)
      //         })
      //     }
      // })
      this.slotems[0].values = [
        { name: '京东', value: '1' },
        { name: '顺丰', value: '2' }
      ]
      this.popupshowems = true
    },
    emsChange(picker, values) {//快递公司 改变  
      if (values[0]) {
        this.emshide = values[0].name
        this.emshideid = values[0].value
      }
    },
    confirm(value) {
      if (value == 1) {
        this.popupshowems = false
        this.ems = this.emshide
        this.emsId = this.emshideid
      }
    },
    cancel(value) {
      if (value == 1) {
        this.popupshowems = false
      }
    },
    submit() {
      this.$router.go(-1)
    }
  },
  created() {
    this.$store.commit("setMenu", [true, false]);
  }
}