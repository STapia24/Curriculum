<template>
    <div>
        <!-- lander section -->
        <section class="section">
            <div class="container-fliud">
                 <img alt="Profile Picture" class="rounded-circle img-custome" src="https://media-exp1.licdn.com/dms/image/C4E03AQGXYNjGlyL0ow/profile-displayphoto-shrink_400_400/0?e=1609372800&v=beta&t=rZSgWhc5ykaQWorqhsLVsGxXIEyFMVUgN9w8nLkCgik">
                <h1>Sergio Tapia</h1>
                <p>Computer Science student at Tecnológico de Monterrey</p>
                <button type="button" class="btn btn-success btn-lg" data-toggle="modal" data-target=".bd-example-modal-lg">Contact Me</button>
                
            </div>
        </section>

        <!-- portfolio section -->
        <section class="portfolio">
            <h1>My curriculum</h1>
            <p>Here you have some of my information</p>
            <div class="container">
                <div class="row">

                    <div class="col-md-4">
                            <div class="card" style="background-color: #236142; outline-style: solid; outline-color:#0b5032">
                                <div class="card-head">
                                    <img alt="Vue logo" class="rounded-circle img-custome" src="https://www.thoughtwavesoft.com/wp-content/uploads/2018/12/web-development-trends-2019.jpg">
                                    <h3>Programming languages</h3>
                                </div>
                                <hr>
                                <div class="card-body">
                                    <p>
                                        C#          <br>          
                                        C++         <br>     
                                        Python      <br> 
                                        Java        <br>
                                        Haskell     
                                    </p>
                                    <button type="button" class="btn btn-outline-info">Learn More</button>
                                </div>
                            </div>
                            <br>
                    </div>

                    <div class="col-md-4">
                            <div class="card" style="background-color: #236142; outline-style: solid; outline-color:#0b5032">
                                <div class="card-head">
                                    <img alt="Vue logo" class="rounded-circle img-custome" src="https://image.freepik.com/free-vector/light-bulb-idea_23-2147504759.jpg">
                                    <h3>Projects and Leadership</h3>
                                </div>
                                <hr>
                                <div class="card-body">
                                    <p>
                                        Finance Director (2019)<br>
                                        Customer Service Coordinator (2018)<br>
                                        Conferences Staff (2017)<br>
                                        Book Fair Organizer (2017)<br>
                                        Book Club Coordinator (2016)
                                    </p>
                                    <button type="button" class="btn btn-outline-info">Learn More</button>
                                </div>
                            </div>
                        <br>
                    </div>  

                    <div class="col-md-4">
                        <div class="card" style="background-color: #236142; outline-style: solid; outline-color:#0b5032">
                            <div class="card-head">
                                <img alt="About Me" class="rounded-circle img-custome" src="https://lh3.googleusercontent.com/proxy/-7FAllyMzs-7eAsgwzHjzt9bECw28_Osp4fBV7MpeWgPm9Vnv9-pUUq-IK3XhsbvYsT4Jv7dplLMG45DJT_PuGS7cd8ddzkt5wNNUcpmNZBG54dFNA1Gs9uz0BrNbMSNqdZ5wXJJP5-LFYt63DjnpwVRY-99NuWfC8ttB3y-YawZ3Gy9Xj3v0jcvtcShD4XH8A1mA5rqeWXzQ7LvdA">
                                <h3>More about me</h3>
                            </div>
                            <hr>
                            <div class="card-body">
                                <p>
                                    More information on:<br>
                                    Spoken languages<br>
                                    Education<br>
                                    Courses<br>
                                    Other interests
                                </p>
                                <button type="button" class="btn btn-outline-info">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- modal for contact -->
        
        <section class="">
            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <talk/>
                    </div>
                </div>
            </div>
        </section>
        
    </div>
</template>

<script lang="ts">
import talk from './Contact.vue'
export default {
    name:'Lander',
    components:{
        talk
    }  
}
</script>

<style lang="css" scoped>
    .section{
        padding-top: 10%;
        padding-bottom: 10%;
    }
    .portfolio{
        color: white;
        background-color:#236142;
        padding-top: 8%;
        padding-bottom: 15%;
        /* padding:15% */
    }
    .img-custome{
        width: 140px;
        height: 140px;
        margin-top: 15px;
    }
</style>