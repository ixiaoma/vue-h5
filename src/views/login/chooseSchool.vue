<template>
    <div class="chooseSchool">
        <!--<p>学校信息</p>-->
        <mt-field
            placeholder="请选择学校"
            label="学校"
            v-model="booksList"
            readonly
            @click.native="classLoad"
        ></mt-field>
        <mt-popup v-model="popupshow" position="bottom" class="popup">
            <div class="mint-msgbox-btns">
                <button class="mint-msgbox-btn mint-msgbox-cancel" @click="cancel(1)">取消</button>
                <button class="mint-msgbox-btn mint-msgbox-confirm" @click="confirm(1)">确定</button>
            </div>
            <mt-picker :slots="slots" v-if="slots[0].values.length" :value-key="'label'" @change="onValuesChange"></mt-picker>
        </mt-popup>
        <div class="search-btn">
            <button @click="confirmSubmit">确认提交</button>
        </div>
    </div>   
</template>
<script>
    export default {
        name: 'login',
        components: {},
        data() {
            return {
                slots: [
                    {
                        flex: 1,
                        values: [],
                        className: 'slot1',
                        textAlign: 'center'
                    }
                ],
                schoolhide: '',
                popupshow: false,
                booksList:'',
            }
        },
        computed: {},
        methods: {
            loadSchoolList(){
                let url=this.GLOBAL.SCHOOL_LIST;
                this.$post(url).then(res=>{
                    if(res.data.retCode==200){
                        this.slots[0].values = [];
                        let temp = res.data.data;
                        temp.map(item => {
                            let valuesList = {
                                label:item.schoolName,
                                code: item.id
                            }
                            this.slots[0].values.push(valuesList);
                        })
                    }
                })
            },
            classLoad() {
                this.popupshow = true
            },
            onValuesChange(val1, val2) {
                // this.schoolhide = val2.join(' -- ')
                this.schoolhide = val2[0].label;
                this.schoolTypehideValue = val2[0].code;
            },
            confirm() {
                this.booksList = this.schoolhide
                this.popupshow = false
            },
            cancel() {
                this.popupshow = false
            },
            confirmSubmit() {
                let url=this.GLOBAL.SCHOOL_SUBMIT + this.schoolTypehideValue;
                this.$post(url).then(res=>{
                    if(res.data.retCode==200){
                       this.$router.push({ name: 'homeList' })
                    }
                })
            }
        },
        created() {
            this.loadSchoolList();
        }
    }
</script>
<style lang="less">
    .chooseSchool{
        width: 100%;
        height: 100%;
        // background: #fff;
        p{
            height: 30px;
            line-height: 30px;
            padding-left: 10px;
            background: #fafafa;
            color:#999;
        }
        .search-btn {
            text-align: center;
        }
        .search-btn>button {
            color: #fff;
            width: 100%;
            background-color: #FF9800;
            line-height: 36px;
            font-size: 14px;
            margin-top: 20px;
        }   
        .picker-item.picker-selected{
            font-size: 14px;
        } 
    }
    
    
</style>