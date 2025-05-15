<template>
  <nav class="navbar">
    <div class="navbar-left">
      <router-link to="/" class="navbar-title">Vita Store</router-link>
    </div>

    <div class="navbar-center">
      <router-link to="/products" class="navbar-item">Produk</router-link>
      <router-link to="/about" class="navbar-item">Tentang kami</router-link>
      <router-link to="/contact" class="navbar-item">Kontak</router-link>
    </div>

    <div class="navbar-right">
       <router-link to="/cart" class="navbar-icon" title="Cart">🛒</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
};
</script>

<style scoped>
.navbar {
  background-color: var(--color-biruTua);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}

/* Bagian kiri */
.navbar-left .navbar-title {
  font-size: 2rem;
  font-weight: bold;
  color: var(--color-putih);
  text-decoration: none;
}

.navbar-title:hover {
  color: var(--color-biruMuda);
}

/* Bagian tengah */
.navbar-center {
  display: flex;
  gap: 1rem;
}

.navbar-item {
  color: var(--color-putih);
  text-decoration: none;
  padding: 0.5rem 1,5rem;
}

.navbar-item:hover {
  background-color: var(--color-biruMuda);
  border-radius: 4px;
  color: var(--color-hitam);
  padding: 10px;
}

/* Bagian kanan */
 .navbar-item {
  font-weight: bold;
}
.navbar-icon {
  /* color: white; */
  font-size: 1.5rem;
  text-decoration: none;
  transition: transform 0.3s;
}


</style>
