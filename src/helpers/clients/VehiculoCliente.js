import axios from "axios";

const guardar = async (body) => {
  const data = await axios
    .post(`http://localhost:8082/API/v1.0/Concesionario/vehiculos`, body)
    .then((r) => r.data);
  console.log(data);
};

export const guardarFacade = async (body) => {
  return await guardar(body);
};

const todos = async () => {
  const data = await axios
    .get(`http://localhost:8082/API/v1.0/Concesionario/vehiculos`)
    .then((r) => r.data);
  console.log(data);
  return data;
};

export const todosFacade = async () => {
  return await todos();
};

const buscar = async (url) => {
  const data = await axios.get(url).then((r) => r.data);
  console.log(data);
  return data;
};

export const buscarFacade = async (url) => {
  return await buscar(url);
};

const eliminar = async (placa) => {
  const data = await axios
    .delete(`http://localhost:8082/API/v1.0/Concesionario/vehiculos/${placa}`)
    .then((r) => r.data);
  console.log(data);
};

export const eliminarFacade = async (placa) => {
    return await eliminar(placa);
  };
