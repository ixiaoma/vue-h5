import Vue from 'vue';
export default {
    name: 'recipientAdd',
    components: {},
    data() {
        return {
            
            saveobj:{
                name: '',
                telephone: '',
                detailedAddress: '',
                type:'1',
                province:'',
                city:'',
                county:'',
            },
            ProvinceShow: false,
            CityShow: false,
            countyShow: false,
            ProvinceArr: [{
                flex: 1,
                values: [],
                className: 'slot1'
            }],
            CitylArr: [{
                flex: 1,
                values: [],
                className: 'slot1'
            }],
            countyArr: [{
                flex: 1,
                values: [],
                className: 'slot1'
            }],
            provincehideValue: '',
            cityhideValue: '',
            countyhideValue: '',
            provincehideCode: '',
            cityhideCode: '',
            countyhideCode: '',
        }
    },
    computed: {},
    methods: {
        recipientsave(){//新增收货人地址保存
            if(this.$route.query.id){//编辑保存
                this.$post(this.GLOBAL.API_EDIT_ADDRESS,this.saveobj).then(res=>{
                    this.$router.push({
                        name:'addressManage',
                        query:{
                            select:'13'
                        }
                    })
                })
            }else{//新增保存
                this.$post(this.GLOBAL.API_ADD_ADDRESS,this.saveobj).then(res=>{
                    this.$router.push({
                        name:'addressManage',
                        query:{
                            select:'13'
                        }
                    })
                })
            }
        },
        setConfig() {
            this.$store.commit("setMenu", [true, true]);
        },
        getFirstLevelData() { // 获取地区下拉框的数据(省份)
            // let url = ''
            // this.ProvinceArr[0].values = [];
            // this.$post(url).then(res => {
            //     if (res.data.retCode == 200) {
            //         let temp = res.data.data
            //         temp.map(item => {
            //             let typeList = {
            //                 value: item.code,
            //                 name: item.name
            //             }
            //             this.ProvinceArr[0].values.push(typeList)
            //         })
            //     } else {
            //         this.Toast(res.data.message)
            //     }
            // })
            this.ProvinceArr[0].values = [
                { name: '省份测试1', value: '1' },
                { name: '省份测试2', value: '2' }
            ]
        },
        getSecondLevelData() { // 获取地区下拉框的数据(市)
            // let url = ''
            // this.CitylArr[0].values = [];
            // this.$post(url).then(res => {
            //     if (res.data.retCode == 200) {
            //         let temp = res.data.data
            //         temp.map(item => {
            //             let typeList = {
            //                 value: item.code,
            //                 name: item.name
            //             }
            //             this.CitylArr[0].values.push(typeList)
            //         })
            //     } else {
            //         this.Toast(res.data.message)
            //     }
            // })
            this.CitylArr[0].values = [
                { name: '市测试1', value: '1' },
                { name: '市测试2', value: '2' }
            ]
        },
        getThirdLevelData() { // 获取地区下拉框的数据(区县)
            // let url = ''
            // this.$post(url).then(res => {
            //     this.countyArr[0].values = [];
            //     if (res.data.retCode == 200) {
            //         let temp = res.data.data
            //         temp.map(item => {
            //             let typeList = {
            //                 value: item.code,
            //                 name: item.name
            //             }
            //             this.countyArr[0].values.push(typeList)
            //         })
            //     } else {
            //         this.Toast(res.data.message)
            //     }
            // })
            this.countyArr[0].values = [
                { name: '区测试1', value: '1' },
                { name: '区测试2', value: '2' }
            ]
        },
        selectTypeLoad(type) { //底部弹出判断
            switch (type) {
                case 1:
                    this.ProvinceShow = true
                    break;
                case 2:
                    this.CityShow = true
                    break;
                case 3:
                    this.countyShow = true
                    break;
            }
        },
        provinceChange(val1, val2) { //省份底部弹出改变
            this.provincehideValue = val2[0].name
            this.provincehideCode = val2[0].value
        },
        cityChange(val1, val2) { //市级底部弹出改变
            this.cityhideValue = val2[0].name
            this.cityhideCode = val2[0].value;
        },
        conntyChange(val1, val2) { //县级底部弹出改变
            this.countyhideValue = val2[0].name
            this.countyhideCode = val2[0].value;
        },
        confirmType(type) { //底部弹出确定
            if (type == '1') {
                this.saveobj.province = this.provincehideValue;
                this.getSecondLevelData();
                this.saveobj.city = '';
                this.saveobj.county = '';
                this.ProvinceShow = false;
            } else if (type == '2') {
                this.saveobj.city = this.cityhideValue;
                this.saveobj.county = '';
                this.getThirdLevelData();
                this.CityShow = false;
            } else if (type == '3') {
                this.saveobj.county = this.countyhideValue;
                this.countyShow = false;
            }
        },
        cancelType() { //底部弹出关闭
            this.schoolTypepopupshow = false;
            this.ProvinceShow = false;
            this.CityShow = false;
            this.countyShow = false;
            this.dividerpopupshow = false
        },
    },
    created() {
        this.setConfig()
        this.$route.query.id && this.$get(this.GLOBAL.API_GET_ADDRESS_DETAILS+this.$route.query.id).then(res=>{
            this.saveobj =res.data
        })
        this.getFirstLevelData();
    }
}