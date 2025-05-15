<template>
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="font-bold">Temukan Gaya Terbaikmu Hari Ini!</h1>
        <p>Jelajahi koleksi fashion pria dan wanita yang sedang tren.</p>
      </div>
    </section>
  </template>
  
  <style scoped>
  .hero-section {
    background-image: url('@/assets/images/Hero_Foto.png'); /* Ganti dengan path gambar yang sesuai */
    background-size: cover;
    background-position: center;
    color: white;
    padding: 210px 20px;
    text-align: center;
    position: relative;
  }
  
  .hero-section::after {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.4); /* overlay gelap agar teks jelas */
    z-index: 0;
  }
  
  .hero-content {
    position: relative;
    z-index: 1;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .hero-content h1 {
    font-size: 60px;
    /* margin-bottom: 20px; */
  }
  
  .hero-content p {
    font-size: 1.2rem;
    /* margin-bottom: 30px; */
  }
  
  .hero-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  .hero-btn {
    background-color: var(--color-putih);
    color: #333;
    padding: 12px 24px;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: 0.3s ease;
  }
  
  .hero-btn:hover {
    background-color: #ddd;
  }

  .font-bold {
    font-family: "Libre Baskerville", serif;
    font-weight: 1000;
    font-style: normal;
  }
  </style>
  