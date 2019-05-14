<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Que voulez-vous faire?"/>
    <div>
      <button type="button" class="btn btn-outline-success">
        <router-link to="/suppliers" >Afficher la liste</router-link>
      </button>
      <button type="button" class="btn btn-outline-success">
        <router-link to="/map">Afficher la map</router-link>
      </button>
      <select v-model="selected">
        <option>OK</option>
        <option>KO</option>
        <option>*</option>
      </select>
      <span>Sélectionné : {{ selected }}</span>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SuppliersList from "./components/SuppliersList";
import SuppliersMap from "./components/SuppliersMap";

export default {
  name: 'app',
  components: {
    SuppliersMap,
    SuppliersList,
    HelloWorld
  },


}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
