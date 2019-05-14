<template>
    <div>
        <h1>{{name}}</h1>
        <h3 v-if="status=== true" class="green">A du stock ? OK</h3>
        <h3 v-if="status=== false" class="red">A du stock ? KO</h3>
        <h5>{{checkedAt}}</h5>
    </div>
</template>

<script>

    export default {
        name: 'Supplier',
        props: {
            name: String,
            status: Boolean,
            checkedAt: String,
        },
    }


</script>


<style scoped>
    .green {
        color: green;
    }

    .red {
        color: red;
    }
</style>