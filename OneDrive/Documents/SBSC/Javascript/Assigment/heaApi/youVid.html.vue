<template>
  <div>
    <div class="you-videos">
      <div>
        <iframe
          src="https://www.youtube.com/embed/xVu_I6WCsto"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""
        ></iframe>
      </div>
      <div>
        <iframe
          src="https://www.youtube.com/embed/uvCqSFHUuOI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""
        ></iframe>
      </div>
      <div>
        <iframe
          src="https://www.youtube.com/embed/8zSR5--M4IE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""
        ></iframe>
      </div>
      <div>
        <iframe
          src="https://www.youtube.com/embed/_2Fq2O9L10A"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscrgieen=""
        ></iframe>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.you-videos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30px, 4fr));
  grid-gap: 2%;
  width: 80%;
  margin: 0% 9%;
  justify-items: center;
}
iframe {
  width: 100%;
  height: 15rem;
  border-radius: 20px;
}
</style>
