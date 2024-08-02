<template>
  <div class="container">
    <button @click="todos">Consultar</button>
    <div v-show="crear" class="tabla">
      <h2 v-show="msj">Se elimino el Vehículo</h2>
      <table>
        <thead>
          <tr>
            <th>Placa</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Acción</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody v-for="vehiculo in vehiculos" :key="vehiculo.id">
          <tr>
            <td>{{ vehiculo.placa }}</td>
            <td>{{ vehiculo.marca }}</td>
            <td>{{ vehiculo.modelo }}</td>
            <td><button @click="ver(vehiculo.links[0]['href'])">Ver</button></td>
            <td><button @click="eliminar(vehiculo.placa)">Borrar</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { todosFacade, eliminarFacade } from "@/helpers/clients/VehiculoCliente.js";
export default {
  data() {
    return {
      msj:false,
      vehiculos: null,
      crear: false,
    };
  },
  methods: {
    async todos() {
      this.vehiculos = await todosFacade();
      this.crear = true;
    },
    async eliminar(placa){
      const data = await eliminarFacade(placa);
      this.msj = true;
      this.todos();
    },
    async ver(url){
      console.log(url)
      this.$emit("url", url);
    }
  },
};
</script>

<style scoped>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

table{
  
  border: 1px solid black;
}

th{
  background: purple;
  color: white;
  padding: 18px;
  border: 1px solid black;
}

td{
  padding: 10px;
  border: 1px solid black;
}

button{
  cursor: pointer;
  background: purple;
  color:white;
  border: none;
  padding: 10px 10px;
  font-size: 16px;
  margin-top: 1%;
  margin-bottom: 3%;
  border-radius: 15px;
}
button:hover{
  background: rgb(81, 0, 81);
}
td button{
  padding: 10px 18px
}
h2{
  color: red;
}
</style>