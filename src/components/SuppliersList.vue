<template>
    <div class="mt-4">
        <h1>Liste des fournisseurs</h1>
        <div v-for="supplier in suppliers.data" v-bind:key="supplier.id">
        <Supplier v-bind:name="supplier.name" v-bind:checkedAt="supplier.checkedAt" v-bind:status="supplier.status" />
        </div>
    </div>
</template>

<script>
    import Supplier from "./Supplier";
    import { format, render, cancel, register } from 'timeago.js';
    const axios = require('axios');
    export default {
        name: "SupplierList",
        components: {
            Supplier,
        },
        data() {
            return {
                suppliers: [], // au début la liste des fournisseurs est vide
                loading: false,
                error: null,
            }
        },
        created() {
            axios
                .get('https://api-suppliers.herokuapp.com/api/suppliers')
                .then(response => (this.suppliers = response))
        }
    }

</script>