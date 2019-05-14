<template>
    <div>
        <h1>Carte des fournisseurs</h1>
        <gmap-map
                :center="{lat:52, lng:-1}"
                :zoom="6"
                style="width: 100%; height: 800px">
            <GmapMarker
                    :key="id"
                    v-for="(m, id) in suppliers.data"
                    :position='({lat:parseFloat(m.latitude), lng:parseFloat(m.longitude)})'
                    :clickable="true"
                    :draggable="true"
                    @click="center=m.position"
            />
        </gmap-map>

    </div>
</template>

<script>
    const axios = require('axios');
    export default {
        name: 'SuppliersMap',
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
        },
    }
    </script>