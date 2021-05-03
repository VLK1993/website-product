<template>
    <div class="Container">
        <h1> CLIENT 1</h1>
        <div class="btnCont">
            <div data-button= 'face' class="btn" v-on:click='toggleActive'>Face</div>
            <div data-button= 'glasses' class="btn" v-on:click='toggleActive'>Glasses</div>
            <div data-button= 'coat' class="btn" v-on:click='toggleActive' >Coat</div>
            <div data-button= 'arm' class="btn" v-on:click='toggleActive'>Arm</div>
        </div>
        <div class="imgCont">
        
                <img class="face above3" src="./client_img/client1/face/face1.png" >
                <img class="face above3 active" src="./client_img/client1/face/face2.png">

                <img class="glasses above3 active" src="./client_img/client1/glasses/glasses.png">
                <img class="glasses above2 multiply active" src="./client_img/client1/glasses/glasses-shadow.png">

            
                <img class="arm above3 " src="./client_img/client1/arm/arm1.png">
                <img class="arm above3 active" src="./client_img/client1/arm/arm2.png">
                <img class="arm above2 multiply active" src="./client_img/client1/arm/arm2-shadow.png">
            
                <img class="above2 coat hard-light active" src="./client_img/client1/coat/coat.png">
                <img class="active above coat multiply" src="./client_img/client1/coat/coat-shadow.png" alt="">

            <img class="default" src="./client_img/client1/default.png" alt="">
             
        </div>

    </div>
</template>
<script>
export default {
    methods:{
        toggleActive: function(event){
            var buttonValue = event.target.dataset.button;
            
            
            var activeValue = document.getElementsByClassName(buttonValue);
            

            
            activeValue[0].classList.toggle("active");
            activeValue[1].classList.toggle("active");
            

        }

    }
}
</script>
<style scoped>
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