<template>
    <div class="auth">

    </div>
</template>
<script>
export default {
    name: 'authcode',
    data() {
        return {}
    },
    methods: {
        loadCode(){
            let url=this.GLOBAL.API_LOGIN_CODE
            let params={
                code:this.$route.query.code
            }
            this.$post(url,params).then(res=>{}).then(res=>{
                this.$router.push({ name: 'personalz' })
            })
            // this.$router.push({ name: 'personalz' })
            // this.userInfoLoad()
        },
        // userInfoLoad(){
        //     let url=this.GLOBAL.PERSONAL_INFO
        //     this.$get(url).then(res=>{
        //         if(res.data.retCode==200){
        //             this.userInfo=res.data.data;     
        //             sessionStorage.setItem('userInfo',JSON.stringify(this.userInfo))    
        //             this.$router.push({ name: 'personalz' })             
        //         }
        //     })
        // }
    },
    created() {    
            // sessionStorage.setItem('loginCode',this.$route.query.code)               
            this.loadCode()                   
    },
}
</script>
