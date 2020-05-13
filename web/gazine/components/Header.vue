<template>
  <header class="header">
    <form action="#" class="search">
      <input
        type="text"
        class="search__input"
        placeholder="Search for Podcasts"
      />
      <button class="search__button">
        <svg class="search__icon">
          <use xlink:href="~/assets/img/sprite.svg#icon-magnifying-glass"></use>
        </svg>
      </button>
    </form>

    <nav class="user-nav">
      <div class="user-nav__user">
        <svg class="user-nav__user-photo">
          <use xlink:href="~/assets/img/sprite.svg#icon-user"></use>
        </svg>
        <span class="user-nav__user-name">Felipe</span>
      </div>
    </nav>
  </header>
</template>

<script>
export default {}
</script>
