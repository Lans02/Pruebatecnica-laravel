<template>
    <div>
        <h3 class="text-center">Registrar Cliente </h3>
        <div class="row">
            <div class="col-md-6">
                <form methods="POST" @submit.prevent="addClient">
                    <div class="form-group">
                        <label>Nombre:</label>
                        <input type="text" class="form-control" v-model="client.nombres">
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
                
                    <button type="submit" class="btn btn-primary">Registrar</button>
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
        methods: {
            addClient() {
                this.axios
                    .post('http://localhost:8000/api/clients/', this.client)
                    .then(response => (
                        this.$router.push({ name: 'home' })
                    ))
                    .catch(err => console.log(err))
                    .finally(() => this.loading = false)
            }
        }
    }
</script>
