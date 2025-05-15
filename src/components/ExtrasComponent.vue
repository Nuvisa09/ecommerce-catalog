<template>
  <div class="home-page">
    <div class="testimonial-container">
      <!-- Testimonial Carousel -->
      <div class="testimonial-carousel">
        <div class="carousel-container">
          <!-- Carousel Items -->
          <div
            class="carousel-item"
            :key="index"
            v-for="(item, index) in testimonials"
            :class="{ active: currentSlide === index }"
          >
            <!-- Gambar testimoni -->
            <img :src="item.image" alt="Author photo" class="testimonial-image" />
            <p>"{{ item.text }}"</p>
            <span>- {{ item.author }}</span>
          </div>
        </div>

        <!-- Carousel Controls -->
        <button class="carousel-control-prev" @click="prevSlide">&#10094;</button>
        <button class="carousel-control-next" @click="nextSlide">&#10095;</button>

        <!-- Carousel Indicators -->
        <div class="carousel-indicators">
          <div
            v-for="(item, index) in testimonials"
            :key="index"
            :class="['indicator', { active: currentSlide === index }]"
            @click="goToSlide(index)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      currentSlide: 0,
      testimonials: [
        {
          text: "Pelayanan sangat ramah dan produk berkualitas!",
          author: "Anisa",
           image: "https://randomuser.me/api/portraits/women/45.jpg"
        },
        {
          text: "Pengiriman cepat dan harga terjangkau.",
          author: "Budi",
          image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
          text: "Barang sesuai pesanan dan kualitas bagus.",
          author: "Siti",
          image: "https://randomuser.me/api/portraits/women/42.jpg"
        },
        {
          text: "Webshop mudah digunakan dan pengiriman cepat.",
          author: "Dani",
          image: "https://randomuser.me/api/portraits/men/12.jpg"
        },
      ],
    };
  },
  methods: {
    prevSlide() {
      this.currentSlide = this.currentSlide === 0 ? this.testimonials.length - 1 : this.currentSlide - 1;
    },
    nextSlide() {
      this.currentSlide = this.currentSlide === this.testimonials.length - 1 ? 0 : this.currentSlide + 1;
    },
    goToSlide(index) {
      this.currentSlide = index;
    },
  },
};
</script>

<style scoped>
.home-page {
  padding: 30px;
}

.testimonial-container {
  display: flex;
  justify-content: center;
}

.testimonial-carousel {
  width: 80%;
  max-width: 700px;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  position: relative;
  margin: 50px;
}

.carousel-container {
  position: relative;
}

.carousel-item {
  display: none;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
}

.carousel-item.active {
  display: block;
}

.carousel-item p {
  font-style: italic;
  margin-bottom: 20px;
}

.carousel-item span {
  font-weight: bold;
  padding-bottom: 30px;
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-hitam);
  border: none;
  font-size: 2rem;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
}

.carousel-control-prev {
  left: 10px;
}

.carousel-control-next {
  right: 10px;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--color-abuabu);
  margin: 10px 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.indicator.active {
  background-color: #333;
}
.testimonial-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
}
</style>
