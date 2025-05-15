<template>
  <section class="promo-section">
    <div class="promo-content">
      <h2 class="promo-title">🎉 Big Sale This Week!</h2>
      <p class="promo-subtitle">Diskon hingga <strong>70%</strong> untuk koleksi terbaru pria & wanita.</p>
      <router-link to="/products" class="promo-button">Belanja Sekarang</router-link>
    </div>
  </section>
</template>

<style scoped>
.promo-section {
  background-image: url('@/assets/images/Hero_Foto.png');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
}

.promo-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7); 
}

.promo-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
}

.promo-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.promo-subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.promo-button {
  background-color: var(--color-biruMuda);
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  color: var(--color-hitam);
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.promo-button:hover {
  background-color: var(--color-biruTua);
  color: var(--color-putih);
}
</style>
