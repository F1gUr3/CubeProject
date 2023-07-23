<script setup>
import Navigation from '../components/nav.vue'
import Banner from '../components/banner.vue'
import aboutsection from '../components/aboutsection.vue';
import goal from '../components/goal.vue';
import humanrights from '../components/humanrights.vue';
import footerComponent from '../components/footerComponent.vue'

</script>

<template>
<link rel="stylesheet" href="../assets/main.css">
    <header>
        <Navigation></Navigation>
        
        <banner></banner>
    </header>
    <aboutsection></aboutsection>
    <humanrights></humanrights>
    <goal></goal>
    <footerComponent></footerComponent>
        
</template>

<style scoped>



</style>