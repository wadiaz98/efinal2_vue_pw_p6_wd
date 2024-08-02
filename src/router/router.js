import { createRouter, createWebHashHistory } from "vue-router";
import Insertar from "../pages/InsertarPage.vue";
import Consutlar from "../pages/ConsultarPage.vue";
import Bienvenida from "../pages/BienvenidaPage.vue";
import NotFound from "../pages/NotFoundPage.vue";
const routes = [
  {
    path: "/insertar",
    component: Insertar,
  },
  {
    path: "/consultar",
    component: Consutlar,
  },
  {
    path: "/",
    component: Bienvenida,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({ history: createWebHashHistory(), routes });
export default router;
