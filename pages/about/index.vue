<template>
    <div :class=themeName>
      <h2>About</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem adipisci enim nisi, sed laboriosam possimus atque optio sunt dicta deserunt?</p>

      <button @click=toggleTheme>Change theme {{ themeName }}</button>
    </div>
  </template>
  
  <script setup>
    const themeValue = ref(true);
    const themeName = (themeValue.value === true) ? ref("dark-theme") : ref("light-theme");

    const toggleTheme = () => {
      console.log("here");
      themeValue.value = !themeValue.value;
      themeName.value = (themeValue.value === true) ? "dark-theme" : "light-theme";
    }
  </script>
  
  <style lang="scss" scoped>
    @import '../../styles/style';

    /* Dark/Light theme*/
    @include themify($themes) {
      p {
        color: themed("text");
        background-color: themed("bg");
      }
      button {
        background-color: themed("brand");
        color: themed("text");
      }
      a {
        color: themed("brand");
      }
    } ;

    h2 {
      @include flexCenter(row, $defaultBackground);
      margin-bottom: 20px;
      font-size: 36px;
      color: $text;
      &:hover {
        color: $hoveredText;
      }
    }
    p {
      margin: 20px 0;
    }
  </style>