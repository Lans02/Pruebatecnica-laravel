import TodoCliente from './components/todocliente.vue';
import RegistrarCLiente from './components/createcliente.vue';
import EditarCliente from './components/editcliente.vue';

//Creamos las rutas

export const routes = [
    {
        name: 'home',
        path: '/',
        component: TodoCliente
    },
    {
        name: 'create',
        path: '/create',
        component: RegistrarCLiente
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditarCliente
    }
];
