<template>
  <div class="about-container">
    <h1>Tentang Kami</h1>
    <p>
      Selamat datang di <strong>Store Vita</strong>, destinasi fashion modern Anda! Kami menghadirkan koleksi baju pria dan wanita dengan desain terkini, kualitas terbaik, dan harga terjangkau.
    </p>
    <p>
      Store Vita didirikan dengan semangat untuk membantu setiap individu tampil percaya diri dan stylish dalam setiap kesempatan. Mulai dari gaya kasual hingga formal, kami memiliki berbagai pilihan yang terus diperbarui mengikuti tren dunia mode.
    </p>
    <p>
      Kami berkomitmen pada kepuasan pelanggan melalui pelayanan yang cepat, ramah, dan produk yang terjamin kualitasnya. Belanja baju kini jadi lebih mudah, aman, dan menyenangkan bersama Vita Store.
    </p>
    <p>
      Terima kasih telah mempercayai kami sebagai partner gaya Anda.
    </p>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
};
</script>

<style >
.about-container {
  max-width: 800px;
  margin :40px auto ;
  padding: 2rem;
  line-height: 1.7;
  font-family: 'Arial', sans-serif;
  background-color: var(--color-putih);
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  text-align: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.about-container h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--color-men);
}

.about-container p {
  margin-bottom: 1rem;
  font-size: 1.1rem;
}
</style>
