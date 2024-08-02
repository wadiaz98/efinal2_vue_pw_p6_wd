<template>
  <div class="container">
    <h1>Vehiculo</h1>
    <h2 v-show="msj">Se ha incertado correctamente el Vehículo con placas {{ body.placa }}</h2>
    <div class="form">
      <p type="Placa">
        <input :disabled="!ip" v-model="body.placa" type="text" placeholder="Placa" />
      </p>
      <p type="Marca">
        <input :disabled="!ip" v-model="body.marca" type="text" placeholder="Marca" />
      </p>
      <p type="Modelo">
        <input :disabled="!ip" v-model="body.modelo" type="text" placeholder="Modelo" />
      </p>
      <p type="Color">
        <input :disabled="!ip" v-model="body.color" type="text" placeholder="Color" />
      </p>
      <p type="Precio">
        <input :disabled="!ip" v-model="body.precio" type="number" placeholder="Precio" />
      </p>
      <button v-show="visible" @click="guardar">Guardar</button>
    </div>
  </div>
</template>

<script>
import { guardarFacade, buscarFacade } from "@/helpers/clients/VehiculoCliente";
export default {
  props: {
    url: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
        visible:true,
        msj:false,
        ip:true,
      body: {
        placa: null,
        marca: null,
        modelo: null,
        color: null,
        precio: null,
      },
    };
  },
  methods: {
    async guardar() {
      const body = this.body;
      const data = await guardarFacade(this.body);
      this.msj = true;
      this.body.placa=null;
      this.body.marca=null;
      this.body.modelo=null;
      this.body.color=null;
      this.body.precio=null;
    },
    async buscar(url) {
      this.body = await buscarFacade(url);
    },
  },
  watch: {
    url(newValue, oldValue) {
      if (oldValue !== newValue) {
        this.ip = false;
        this.visible=false;
        this.buscar(newValue);
      }
    },
  },
};
</script>

<style scoped>
.container{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.form{
  background: #e6e6e6;
  width: 15%;
  padding:25px 18px;
  border-radius: 8px;
  box-shadow: 0px 0px 20px 5px;
}
p::before{
  content:attr(type);
  display: block;
  margin-bottom: 5%;
  font-weight: bolder;
  font-size: 16px;
  color: black;
}
input{
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  padding: 8px;
  background: none;
  font-size: 15px;
}
input:focus{
  border-bottom: 2px solid black;
}
button{
  background: purple;
  color:white;
  border: none;
  padding: 10px 10px;
  font-size: 16px;
  margin-top: 5%;
  border-radius: 15px;
  cursor: pointer;
}
button:hover{
  background: rgb(81, 0, 81);
}

h2{
  color:green
}
</style>