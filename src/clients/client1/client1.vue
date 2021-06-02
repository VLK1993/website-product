<template>
    <div class="Container">
        <div class="section">
            <!--FACE, GLASSES, COAT -->
        <h1> YES VIBRATOR</h1>
        <div class="btnCont">
            <div data-button= 'face' class="btn" v-on:click='toggleActive'>Face</div>
            <div data-button= 'glasses' class="btn" v-on:click='toggleActive'>Glasses</div>
            <div data-button= 'coat' class="btn" v-on:click='toggleActive' >Coat</div>


        </div>
        <div class="imgCont">
        
                <img class="face above3" src="./client_img/face/face1.png" >
                <img class="face above3 active" src="./client_img/face/face2.png">
                <img class="face above3 active" src="./client_img/face/wet.png">

                <img class="glasses above3 active" src="./client_img/glasses/glasses.png">
                <img class="glasses above2 multiply active" src="./client_img/glasses/glasses-shadow.png">

            
                <img class="arm above3 active" src="./client_img/arm/arm1.png">

            
                <img class="above2 coat hard-light active" src="./client_img/coat/coat.png">
                <img class="active above coat multiply" src="./client_img/coat/coat-shadow.png" alt="">

            <img class="default" src="./client_img/default2.png" alt="">
             
        </div>
        </div>
        <div class="section">
        <h1> NO VIBRATOR</h1>
        <div class="btnCont">
            <div data-button= 'arm' class="btn" v-on:click='toggleActive'>Arm</div>
            <div data-button= 'glasses' class="btn" v-on:click='toggleActive'>Glasses</div>
            <div data-button= 'coat' class="btn" v-on:click='toggleActive' >Coat</div>


        </div>
        <div class="imgCont">
            <!--ARM, GLASSES, COAT -->
                <img class="face above3 active" src="./client_img/face/face1.png" >

                <img class="glasses above3 active" src="./client_img/glasses/glasses.png">
                <img class="glasses above2 multiply active" src="./client_img/glasses/glasses-shadow.png">

                <img class="arm above3 " src="./client_img/arm/arm2.png">
                <img class="arm above2 multiply" src="./client_img/arm/arm2-shadow.png">
                <img class="arm above3 active" src="./client_img/arm/arm1.png">
                
            
                <img class="above2 coat hard-light active" src="./client_img/coat/coat.png">
                <img class="active above coat multiply" src="./client_img/coat/coat-shadow.png" alt="">

            <img class="default" src="./client_img/default.png" alt="">
             
        </div>
        </div>

        <div class="section">
        <h1> NUDE VER</h1>
        <div class="btnCont">
            <div data-button= 'arm' class="btn" v-on:click='toggleActive'>Arm</div>
            <div data-button= 'glasses' class="btn" v-on:click='toggleActive'>Glasses</div>
            <div data-button= 'coat' class="btn" v-on:click='toggleActive' >Coat</div>


        </div>
        <div class="imgCont">
            <!--ARM, GLASSES, COAT -->
                <img class="face above3 active" src="./client_img/face/face1.png" >

                <img class="glasses above3 active" src="./client_img/glasses/glasses.png">
                <img class="glasses above2 multiply active" src="./client_img/glasses/glasses-shadow.png">

                <img class="arm above3 " src="./client_img/arm/arm2.png">
                <img class="arm above2 multiply" src="./client_img/arm/arm2-shadow.png">
                <img class="arm above3 active" src="./client_img/arm/arm1.png">
                
            
                <img class="above2 coat hard-light active" src="./client_img/coat/coat.png">
                <img class="active above coat multiply" src="./client_img/coat/coat-shadow.png" alt="">

            <img class="default" src="./client_img/default3.png" alt="">
             
        </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        toggleActive: function(event){
            /* toggleActive only active yes no */
            var buttonValue = event.target.dataset.button;
            var currentSection = event.target.parentNode.parentNode;
            /*ONLY SELECT FROM THAT SECTION*/
            console.log(currentSection);
            
            var activeValue = currentSection.getElementsByClassName(buttonValue);
        
         var i;
            for (i=0; i < activeValue.length ; i++) {
                activeValue[i].classList.toggle("active");
                
            }

        }

    }
}
</script>
<style lang="scss" scoped>
.btnCont {
    display:flex;
    flex-direction: row;
    justify-content: center;
}
.btn {
    padding: 10px 5px;
    border:black solid 1px;
}
.Container {
    width:100%;    
}
.imgCont {
    /* Image Container*/
    position:relative;
    width:70%;
    margin:auto;
}
.imgCont img {
width:auto;
position:absolute;
top:0;
left:0;
}
.above {
    z-index:1;
}
.above3 {
z-index:3;
}
.above2 {
z-index:2;
}
.hard-light {
    mix-blend-mode:hard-light;
}
.multiply {
    mix-blend-mode:multiply;
}


.imgCont img { width:100%; display: none; }
.imgCont img.active { display:block;}
.face {
    z-index: 1;
}
.default {
position:relative !important;
display:block !important;
z-index:0 !important;

}

</style>