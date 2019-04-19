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
        }
    },
    created() {    
            this.loadCode()                   
    },
}
</script>
