<template>
  <div id="app">
    <NavbarComponent/>  
    <router-view v-slot="{ Component }">
      <component :is="Component" @category-changed="handleCategoryChange" />
    </router-view>
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue';
import HomePage from './views/HomePage.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent,

  },
  views:{
    HomePage
  },
   methods: {
    handleCategoryChange(category) {
       if (!this.$route.path.startsWith('/products')) return;
      document.body.classList.remove('men-body', 'women-body', 'unavailable-body')

      // Tambahkan class baru sesuai kategori
      if (category === "men's clothing") {
        document.body.classList.add('men-body')
      } else if (category === "women's clothing") {
        document.body.classList.add('women-body')
      } else {
        document.body.classList.add('unavailable-body')
      }
    }
  },
  watch: {
  '$route.path'(newPath) {
    if (!newPath.startsWith ( '/products')) {
      document.body.classList.remove('men-body', 'women-body', 'unavailable-body');
    }
  }
}
}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 0;
}

body {
  transition: background 0.5s ease;
}
.body-men {
  background: linear-gradient(to bottom, var(--color-biruMuda) 70%, white 50%);
  /* warna latar untuk men's clothing */
}

.body-women {
  background: linear-gradient(to bottom, var(--color-unguMuda) 70%, white 50%);
}

.body-unavailable {
  background: linear-gradient(to bottom, var(--color-abuMuda) 70%, white 50%);
}

</style>
