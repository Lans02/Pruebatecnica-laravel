<template>
    <div>
        <h2 class="text-center">Lista Clientes</h2>

        <table class="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Nombre Completo </th>
                <th>Telefono </th>
                <th>Direccion</th>

            </tr>
            </thead>
            <tbody>
            <tr v-for="client in clients" :key="client.id">
                <td>{{ client.id }}</td>
                <td>{{ client.nombres }}</td>
                <td>{{ client.telefono }}</td>
                <td>{{ client.direccion }}</td>
                <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name: 'edit', params: { id: client.id }}" class="btn btn-success">Editar</router-link>
                        <button class="btn btn-danger" @click="deleteClient(client.id)">Eliminar</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                clients: []
            }
        },
        created() {
            this.axios
                .get('http://localhost:8000/api/clients/')
                .then(response => {
                    this.clients = response.data;
                });
        },
        methods: {
            deleteClient(id) {
                if (confirm('¿Seguro que deseas eliminar este Cliente')) {

                    this.axios
                    .delete(`http://localhost:8000/api/clients/${id}`)
                    .then(response => {
                        let i = this.clients.map(data => data.id).indexOf(id);
                        this.clients.splice(i, 1)
                    });

                }
        
            }
        }
    }
</script>
