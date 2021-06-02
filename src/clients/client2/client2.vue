<template>
    <div>
        <div class="Animation">
            <div class="Animation-frames">
                
                <div class="Animation-frame"><img src="./client_img/0.5.png"></div>
                <div class="Animation-frame"><img src="./client_img/1.png"></div>
                <div class="Animation-frame"><img src="./client_img/2.png"></div>
                <div class="Animation-frame"><img src="./client_img/2.3.png"></div>
                <div class="Animation-frame"><img src="./client_img/2.5.png"></div>
                <div class="Animation-frame"><img src="./client_img/3.png"></div>
                <div class="Animation-frame"><img src="./client_img/3.3.png"></div>
                <div class="Animation-frame"><img src="./client_img/3.5.png"></div>
                <div class="Animation-frame"><img src="./client_img/4.png"></div>
                <div class="Animation-frame"><img src="./client_img/4.5.png"></div>
                <div class="Animation-frame"><img src="./client_img/5.png"></div>
                <div class="Animation-frame"><img src="./client_img/5.5.png"></div>
                <div class="Animation-frame"><img src="./client_img/6.png"></div>
            </div>
        </div>


    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
$time: 2000ms;
$number-of-frames: 13;
$frame-duration: $time / $number-of-frames;

@keyframes frame-animation {
  100% {
    transform: translateX(-100%);
  }
}

.Animation {
  overflow: hidden;
}

.Animation-frames {
  animation: frame-animation $time infinite;
  animation-timing-function: steps($number-of-frames) ;
  display: flex;
  width: $number-of-frames * 100%; 
}

.Animation-frame {
  display: block;
  width: 100% / $number-of-frames;
  max-width: 100% / $number-of-frames;
  flex-basis: 100% / $number-of-frames;
}

</style>