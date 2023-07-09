<script setup>
</script>
<template>
    <div id="goal">
          <section>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2 class="section-heading">Project menete</h2>
                        <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur tenetur ipsam quas sit voluptatibus enim laboriosam dolorem voluptatum expedita nihil ab beatae est modi temporibus ipsum, dolorum distinctio laborum ea.</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <ul class="timeline">
                            <li>
                                <div class="timeline-image">
                                    <img class="img-circle img-responsive" src="img/asd/1.jpg" alt="">
                                </div>
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h4>2022 október</h4>
                                        <h4 class="subheading">Lorem Ipsum dolor</h4>
                                    </div>
                                    <div class="timeline-body">
                                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                    </div>
                                </div>
                            </li>
                            <li class="timeline-inverted">
                                <div class="timeline-image">
                                    <img class="img-circle img-responsive" src="img/asd/2.jpg" alt="">
                                </div>
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h4>2022 november</h4>
                                        <h4 class="subheading">Lorem Ipsum dolor</h4>
                                    </div>
                                    <div class="timeline-body">
                                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="timeline-image">
                                    <img class="img-circle img-responsive" src="img/asd/1.jpg" alt="">
                                </div>
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h4>2022 október</h4>
                                        <h4 class="subheading">Lorem Ipsum dolor</h4>
                                    </div>
                                    <div class="timeline-body">
                                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                    </div>
                                </div>
                            </li>
                            <li class="timeline-inverted">
                                  <div class="timeline-image">
                                      <img class="img-circle img-responsive" src="img/asd/2.jpg" alt="">
                                  </div>
                                  <div class="timeline-panel">
                                      <div class="timeline-heading">
                                          <h4>2022 november</h4>
                                          <h4 class="subheading">Lorem Ipsum dolor</h4>
                                      </div>
                                      <div class="timeline-body">
                                          <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                      </div>
                                  </div>
                              </li>
                            <li class="timeline-inverted">
                                <div class="timeline-image">
                                    <h4>Elkészült 
                                        <br>a
                                        <br>Kocka!</h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
          </section>
    </div>
</template>
<style scoped>

.timeline {
    position: relative;
    padding: 0;
    list-style: none;
}

.timeline:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 40px;
    width: 2px;
    margin-left: -1.5px;
    background-color: #f1f1f1;
}

.timeline>li {
    position: relative;
    margin-bottom: 50px;
    min-height: 50px;
}

.timeline>li:before,
.timeline>li:after {
    content: " ";
    display: table;
}

.timeline>li:after {
    clear: both;
}

.timeline>li .timeline-panel {
    float: right;
    position: relative;
    width: 100%;
    padding: 0 20px 0 100px;
    text-align: left;
}

.timeline>li .timeline-panel:before {
    right: auto;
    left: -15px;
    border-right-width: 15px;
    border-left-width: 0;
}

.timeline>li .timeline-panel:after {
    right: auto;
    left: -14px;
    border-right-width: 14px;
    border-left-width: 0;
}

.timeline>li .timeline-image {
    z-index: 100;
    position: absolute;
    left: 0;
    width: 80px;
    height: 80px;
    margin-left: 0;
    border: 7px solid #f1f1f1;
    border-radius: 100%;
    text-align: center;
    color: #fff;
    background-color: #1ee2e7;
}
section {
    padding: 100px 0;
}
.timeline>li .timeline-image h4 {
    margin-top: 12px;
    font-size: 10px;
    line-height: 14px;
}
h1{
    text-transform: uppercase;
    font-family: Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: 700;

}
h2{
    margin-top: 0;
    margin-bottom: 15px;
    font-size: 40px;
    text-transform: uppercase;
    font-family: Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: 700;
}
h3{
    text-transform: uppercase;
    font-family: Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: 700;
    margin-inline: 50px;
    margin-block: 120px;
    text-transform: none;
    font-size: 16px;
    font-style: italic;
    font-weight: 400;
}
h4{
    text-transform: uppercase;
    font-family: Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: 700;
}
.timeline>li.timeline-inverted>.timeline-panel {
    float: right;
    padding: 0 20px 0 100px;
    text-align: left;
}

.timeline>li.timeline-inverted>.timeline-panel:before {
    right: auto;
    left: -15px;
    border-right-width: 15px;
    border-left-width: 0;
}

.timeline>li.timeline-inverted>.timeline-panel:after {
    right: auto;
    left: -14px;
    border-right-width: 14px;
    border-left-width: 0;
}

.timeline>li:last-child {
    margin-bottom: 0;
}

@media(min-width:768px) {
  h3{
    margin-inline: 20px;
    margin-block: 60px;
  }
    .timeline:before {
        left: 50%;
    }

    .timeline>li {
        margin-bottom: 100px;
        min-height: 100px;
    }

    .timeline>li .timeline-panel {
        float: left;
        width: 41%;
        padding: 0 20px 20px 30px;
        text-align: right;
    }

    .timeline>li .timeline-image {
        left: 50%;
        width: 100px;
        height: 100px;
        margin-left: -50px;
    }

    .timeline>li .timeline-image h4 {
        margin-top: 16px;
        font-size: 13px;
        line-height: 18px;
    }

    .timeline>li.timeline-inverted>.timeline-panel {
        float: right;
        padding: 0 30px 20px 20px;
        text-align: left;
    }
}

@media(min-width:992px) {
    .timeline>li {
        min-height: 150px;
    }

    .timeline>li .timeline-panel {
        padding: 0 20px 20px;
    }

    .timeline>li .timeline-image {
        width: 150px;
        height: 150px;
        margin-left: -75px;
    }

    .timeline>li .timeline-image h4 {
        margin-top: 30px;
        font-size: 18px;
        line-height: 26px;
    }

    .timeline>li.timeline-inverted>.timeline-panel {
        padding: 0 20px 20px;
    }
}

@media(min-width:1200px) {
    .timeline>li {
        min-height: 170px;
    }

    .timeline>li .timeline-panel {
        padding: 0 20px 20px 100px;
    }

    .timeline>li .timeline-image {
        width: 170px;
        height: 170px;
        margin-left: -85px;
    }

    .timeline>li .timeline-image h4 {
        margin-top: 40px;
    }

    .timeline>li.timeline-inverted>.timeline-panel {
        padding: 0 100px 20px 20px;
    }
}
</style>