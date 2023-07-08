<script setup>

</script>


<template>
    <div id="aboutsection">
      <div><h2 class="cim"><span class="span1">Mi ez az oldal?</span></h2></div>

      <div class="container cont">
      
        <div class="row" id="row">
          <div class="col-md-6 szoveg">
        
          <p class="section1">2014-ben Svédországban a Raoul Wallenberg Academy álltal kezdeményezett országos „Kockaprojekt” 2016-re nemzetközivé vált. A Kockaprojekt célja az ENSZ Emberjogi nyilatkozat megismertetése diákokkal. Svédországban minden évben egy-egy iskola feldolgoz egy-egy paragrafust a 30-ból. A külföldi – így a magyarországi - Kockaprojektek esetén az érintett iskolák választhatják meg, mely paragrafust mutatják be, melyeket kocka alakú konténerben mutatnak be. Az elkészült kockákat minden évben augusztusban Stockholmban bemutatják egy ünnepség keretében. Az oldal célja a magyar Kockaprojektek bemutatása.</p>
          </div>
          <div class="col-md-6">
          <img id="img" class="img-fluid" src="" alt="" width="350px">
          </div>
        </div>
	    </div>
        
    </div>
</template>


<style scoped>
.cim {
  font-family: Playfair Display, serif;
  font-size: 5vW;
  justify-content: center;
  text-align: center;
  padding-top: 70px;
  margin-bottom: 50px;
}
p {
  text-align: justify;
  padding: 10px;
  left: 50%;
}

.cont {
  width: 100%;
  padding: 10px;
  margin-bottom: 80px;

  box-shadow: 0 13px 15px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin-top: 30px;
}
.cont .row {
  display: flex;
  padding-top: 30px;
  padding-bottom: 30px;
}
.cont .row .card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
}
.cont .row .card-body h5 {
  text-align: center;
}
.cont .row img {
  display: block;
  align-items: end;
  max-width: 100%;
  height: auto;
  margin-top: 80px;
  margin-left: auto;
  margin-bottom: auto;
  margin-right: auto;
}
</style>