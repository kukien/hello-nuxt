<template>
  <div class="ct">
    <event-alert class="mt_3" />
    <div class="banner">
      <div class="thumbnail-banner"></div>
    </div>
    <div class="popular-decks">
      <h3 class="text_center my_3">3 Popular Deck For You</h3>
      <div class="r">
        <div class="c_4">
          <div class="card">Deck 1</div>
        </div>
        <div class="c_4">
          <div class="card">Deck 1</div>
        </div>
        <div class="c_4">
          <div class="card">Deck 1</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.banner {
  height: 220px;
  margin-top: 2rem;
  .thumbnail-banner {
    background: url('~assets/images/banner.jpg') center center;
    background-size: cover;
    height: inherit;
  }
}
</style>
