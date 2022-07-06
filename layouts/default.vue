<template>
  <div>
    <header class="header">
      <nav class="inner" role="navigation">
        <router-link :to="`/`">
          New Stories
        </router-link>
        <router-link :to="`/best`">
          Best Stories
        </router-link>
        <router-link :to="`/top`">
          Top Stories
        </router-link>
        <router-link :to="`/ask`">
          Ask Stories
        </router-link>
      </nav>
    </header>
    <nuxt/>
  </div>
</template>


<style>

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}


.container {
    padding: 20px;
}
.store-new {
    background: #f1f1f1;
    border: 1px solid #d6d6d6;
    margin-bottom: 10px;
    padding: 10px;
}
nav.inner{
    text-align: center;
    background: #104e83;
    padding: 10px;
}

nav.inner a{
    color: #ffffff;
    text-decoration: none;
    margin: 0 20px;
    font-size: 1em;
}
.story-text{
    margin: 20px 0;
}
</style>

