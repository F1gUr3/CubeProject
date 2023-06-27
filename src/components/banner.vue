<script setup>

</script>


<template>
<div id="banner">
    <div id="darkened-banner"></div>
        <div class="arrow">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <h3 id="banner-text"> <span>Kocka </span> Projekt</h3>
</div>
</template>


<style scoped>
#darkened-banner{
    text-align: center;
    position: relative;
    background-image: 
            linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url("../assets/banner-img.png");
           
        height: 87vh;
        
}


#banner-text{
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 5rem;
    text-align: center;
}


span{
    color: #F9F871;
}

#arrow{
    position: absolute;
  bottom: 8px;
  left: 16px;

}

/* Arrow animation*/
.arrow {
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform: rotate(0deg);
}

.arrow span {
    display: block;
    width: 2.5vw;
    height: 2.5vw;
    border-bottom: 5px solid white;
    border-right: 5px solid white;
    transform: rotate(45deg);
    margin: -10px;
    animation: animate 2s infinite;
}

.arrow span:nth-child(2) {
    animation-delay: -0.2s;
}

.arrow span:nth-child(3) {
    animation-delay: -0.4s;
}

@keyframes animate {
    0% {
        opacity: 0;
        transform: rotate(45deg) translate(-20px, -20px);
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: rotate(45deg) translate(20px, 20px);
    }
}
/* Arrow animation*/

@media screen and (max-width: 768px) {
    .arrow span {
    display: block;
    width: 5vw;
    height: 5vw;
    border-bottom: 5px solid white;
    border-right: 5px solid white;
    transform: rotate(45deg);
    margin: -10px;
    animation: animate 2s infinite;
}

}

</style>