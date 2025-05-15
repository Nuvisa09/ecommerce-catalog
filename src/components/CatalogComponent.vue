<template>
  <div class="product-catalog">
    <h2>Best Selling Clothes for Men and Women</h2>

    <div class="product-cards">
      <!-- Menampilkan hanya 3 produk dari kategori pakaian pria dan wanita -->
      <div
        v-for="(product, index) in filteredProducts.slice(0, 3)"
        :key="index"
        class="product-card"
      >
        <img :src="product.image" :alt="product.title" class="product-image" />
        <div class="product-info">
          <h3 class="product-title">{{ product.title }}</h3>
          <p class="price">${{ product.price }}</p>
        </div>
          <div class="rating">
            <span class="rating-value"> Rating {{ product.rating }} / 5</span>
          </div>
          <div class="row-sold">
            <div class="love-section" @click="toggleLove(product)">
              <span :class="{ loved: product.loved }">
                {{ product.loved ? '❤️' : '🤍' }}
              </span>
            </div>
            <p class="sold-count">{{ product.sold }} sold</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      products: [],
    }
  },
  computed: {
    // Mengambil produk yang hanya termasuk kategori pakaian pria dan wanita
    filteredProducts() {
      return this.products.filter(product => 
        (product.category === "men's clothing" || product.category === "women's clothing") && product.rating >= 4.5
      )
      .sort((a, b) => {
        // Mengurutkan produk berdasarkan harga tertinggi
        return b.sold - a.sold
      })
    }
  },
  created() {
    this.fetchProducts()
  },
  methods: {
    async fetchProducts() {
      try {
        const res = await axios.get("https://fakestoreapi.com/products")
        this.products = res.data.map(product => ({
          ...product,
          loved: false,
          likes: 0,
          sold: Math.floor(Math.random() * 300) + 1, 
          rating: parseFloat(Math.random() * 1.5+3.5) . toFixed (1) 
        }))
      } catch (err) {
        console.error("Error fetching products:", err)
      }
    },
    toggleLove(product) {
      console.log('Sebelum:', product.loved); 
      product.loved = !product.loved;
      console.log('Sesudah:', product.loved); 
    }
  }
}
</script>

<style scoped>
.product-catalog {
  padding: 20px;
  text-align: center;
  background: var(--color-putih);
}

.product-cards {
  margin: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
}

.product-card {
  border: 1px solid #ddd;
  padding: 20px;
  width: 300px;
  height: auto;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.product-title {
  height: 100px;
}

.product-image {
  max-width: 100%;
  height: 200px;
  object-fit: contain;
  border-radius: 8px;
}

.price {
  font-size: 1.2em;
  color: #333;
}

.love-section {
  cursor: pointer;
  font-size: 1.3em;
}

.loved {
  color: red;
}

.like-count {
  display: block;
  font-size: 0.9em;
  margin-top: 5px;
}

.rating {
  margin-top: 10px;
  font-size: 1.2em;

}

.rating-value {
  margin-left: 10px;
  font-size: 1em;
  color: #333;
}
.row-sold {
  display: flex;      
  justify-content: space-between;
  margin: 10px; 
}
</style>
