<template>
  <div class="player">
    <div class="info">
      <img
        src="~/assets/img/logo.png"
        alt="Podcast cover"
        class="info__cover"
      />
      <div class="info__box">
        <p class="info__box__title">Research and Innovation</p>
        <p class="info__box__author">Felipe podcast</p>
      </div>
    </div>

    <div class="control">
      <div class="btns">
        <button class="btn">
          <svg class="btn__icon">
            <use
              xlink:href="~/assets/img/sprite.svg#icon-controller-jump-to-start"
            ></use>
          </svg>
        </button>
        <button class="btn">
          <svg class="btn__icon">
            <use
              xlink:href="~/assets/img/sprite.svg#icon-controller-play"
            ></use>
          </svg>
        </button>
        <button class="btn">
          <svg class="btn__icon">
            <use
              xlink:href="~/assets/img/sprite.svg#icon-controller-stop"
            ></use>
          </svg>
        </button>
        <button class="btn">
          <svg class="btn__icon">
            <use
              xlink:href="~/assets/img/sprite.svg#icon-controller-next"
            ></use>
          </svg>
        </button>
        <button class="btn">
          <svg class="btn__icon">
            <use xlink:href="~/assets/img/sprite.svg#icon-loop"></use>
          </svg>
        </button>
      </div>
      <div class="progress">Progress</div>
    </div>

    <div class="volume">
      <svg class="volume__icon">
        <use xlink:href="~/assets/img/sprite.svg#icon-sound"></use>
      </svg>
      <div class="volume__slider">Slider</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
