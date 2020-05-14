<template>
  <section class="player">
    <div class="player__info">
      <img
        src="~/assets/img/logo.png"
        alt="Podcast cover"
        class="player__info__cover"
      />
      <div class="player__info__box">
        <p class="player__info__box__title">Research and Innovation</p>
        <p class="player__info__box__author">Felipe podcast</p>
      </div>
    </div>

    <div class="control">
      <ul class="player__control">
        <li class="player__control__btn">
          <svg class="player__control__icon player__control__icon--small">
            <use xlink:href="~/assets/img/sprite.svg#icon-replay_10"></use>
          </svg>
        </li>
        <li class="player__control__btn">
          <svg class="player__control__icon">
            <use
              xlink:href="~/assets/img/sprite.svg#icon-play_circle_outline"
            ></use>
          </svg>
        </li>
        <!-- <li class="player__control__btn">
          <svg class="player__control__icon">
            <use
              xlink:href="~/assets/img/sprite.svg#icon-pause_circle_outline"
            ></use>
          </svg>
        </li> -->
        <li class="player__control__btn">
          <svg class="player__control__icon player__control__icon--small">
            <use xlink:href="~/assets/img/sprite.svg#icon-forward_30"></use>
          </svg>
        </li>
      </ul>

      <div class="player__timer">
        <div class="player__timer__elapsed">0:00</div>
        <div class="slider player__timer__progress-bar">
          <input type="range" value="0" max="5:55" />
        </div>
        <div class="player__timer__total">5:00</div>
      </div>
    </div>

    <div class="player__volume">
      <svg class="player__volume__icon">
        <use xlink:href="~/assets/img/sprite.svg#icon-volume_up"></use>
      </svg>
      <div class="slider player__volume__slider">
        <input type="range" />
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>
