<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-column">
        <h3>Vita Store</h3>
        <p>Temukan gaya terbaru dan penawaran menarik setiap hari.</p>
      </div>
      <div class="footer-column">
        <h4>Menu</h4>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/products">Produk</router-link></li>
          <li><router-link to="/about">Tentang Kami</router-link></li>
          <li><router-link to="/contact">Kontak</router-link></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Ikuti Kami</h4>
         <!-- Google Maps Section -->
        <div class="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
          </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} Vita Store. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
.footer {
  background-color: var(--color-abuMuda);
  color: var(--color-hitam);
  padding: 2rem 1rem 1rem;
  font-size: 0.9rem;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
}

.footer-column {
  flex: 1;
  min-width: 200px;
}

.footer-column h3,
.footer-column h4 {
  margin-bottom: 0.75rem;
  color: var(--color-biruTua);
  font-weight: bold;
}

.footer-column p,
.footer-column ul {
  margin: 0;
  padding: 0;
}

.footer-column ul {
  list-style: none;
}

.footer-column ul li {
  margin-bottom: 0.5rem;
}

.footer-column a {
  color: var(--color-hitam);
  text-decoration: none;
}

.footer-column a:hover {
  color:  var(--color-biruMuda);;
}

.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  border-top: 1px solid #555;
  padding-top: 1rem;
  font-size: 0.8rem;
}
.social-icons {
  display: flex;
  flex-direction: column; 
}

</style>
