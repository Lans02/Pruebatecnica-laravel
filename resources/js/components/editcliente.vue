<template>
    <div>
        <h3 class="text-center">Editar Cliente</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="updateClient">
                    <div class="form-group">
                      <label>Nombre:</label>
                        <input type="text" class="form-control"  v-model="client.nombres">
                    </div>
                    <div class="form-group">
                        <label>Telefono</label>
                        <input type="text" class="form-control" v-model="client.telefono">
                    </div>

                    <div class="form-group">
                        <label>Direccion</label>
                        <input type="text" class="form-control" v-model="client.direccion">
                    </div>
                    <br>
                    <br>
                    <button type="submit" class="btn btn-primary">Actualizar Cliente</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                client: {}
            }
        },
        created() {
            this.axios
                .get(`http://localhost:8000/api/clients/${this.$route.params.id}`)
                .then((res) => {
                    this.client = res.data;
                });
        },
        methods: {
            updateClient() {
                this.axios
                    .patch(`http://localhost:8000/api/clients/${this.$route.params.id}`, this.client)
                    .then((res) => {
                        this.$router.push({ name: 'home' });
                    });
            }
        }
    }
</script>
