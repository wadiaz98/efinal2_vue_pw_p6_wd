<template>
  <Todos @url="recibeUrl"/>
  <FormularioVehiculo v-show="url" :url="url"/>
</template>

<script>
import Todos from '@/components/Todos.vue'
import FormularioVehiculo from '@/components/FormularioVehiculo.vue';
export default {
    components:{
        Todos,
        FormularioVehiculo
    },
    data(){
        return{
            url:null,
        }
    },
    methods:{
        recibeUrl(url){
            console.log(url)
            this.url = url;
        }
    }
}
</script>

<style>

</style>