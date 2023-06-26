<script setup>

</script>


<template>
<div id="banner">
    <div id="darkened-banner"></div>

    <h3 id="banner-text"> <span>Kocka </span> <br > Projekt</h3>
</div>
</template>


<style scoped>
#darkened-banner{
    text-align: center;
    position: relative;
    background-image: 
            linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url("../assets/banner-img.png");
            width: 100vw;
        height: 100vh;
        top: -50;
        left: 0;
}


#banner-text{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 100px;
}


span{
    color: #F9F871;
}
</style>