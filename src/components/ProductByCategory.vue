<template>
    <div class="product-container" :class="categoryClass">
  
      <!-- Loading Spinner -->
      <div v-if="isLoading" class="spinner-container">
        <div class="spinner"></div>
        <p>Loading product...</p>
      </div>
  
      <!-- Product Display -->
      <div v-else-if="product" class="product-card">
        <img :src="product.image" :alt="product.title" class="product-image" />
        <div class="product-details">
          <h3>{{ product.title }}</h3>
          <div class="info-row">
            <span class="category">{{ product.category }}</span>
      
            <div class="rating">
            <span class="rating-value">{{  product.rating?.rate }} / 5</span>
            <span v-for="circle in 5" :key="circle" class="circle" :class="{
              'filled': circle <= product.rating?.rate,
              'filled-men': circle <= product.rating?.rate && product.category === `men's clothing`,
              'filled-women': circle <= product.rating?.rate && product.category === `women's clothing`
              }" >
              
            </span>
          </div>
          </div>
          <hr class="solid-line" />
          <p class="deskription">{{ product.description }}</p>
          <hr class="solid-line" />
          <p class="price"><strong></strong> ${{ product.price }}</p>
          <div class="tombol-row">
            <button class="buy-product" :class="categoryClass">Buy Now</button>
            <button @click="fetchNextProduct" class="next-product" :class="categoryClass">Next Product</button>
          </div>
        </div>
      </div>
  
      <!-- Nexr Product -->
        <div v-else>
            <div class="image-container">
                 
                <div class="overlay-text">
                  <p>No available product to display.</p>
                  <button @click="fetchNextProduct " class="next-product-unavailable" :class="categoryClass">Next Product</button>
                </div>
            </div>
          </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductByCategory',
    data() {
      return {
        index: 1,
        product: null,
        isUnvailable: false,
        isLoading: false
      }
    },
    computed: {
      categoryClass() {
        if (!this.product) return 'page-unavailable'
        if (this.product.category === "men's clothing") return 'page-men'
        if (this.product.category === "women's clothing") return 'page-women'
        return 'page-unavailable'
      }
    },
    watch: {
      '$route.path'(newPath) {
        console.log("Route berubah ke:", newPath)
        if (!newPath.startsWith('/products')) {
          document.body.classList.remove('men-body', 'women-body', 'unavailable-body');
        }
      }
    },
    methods: {
      async fetchNextProduct() {
        this.isLoading = true
        const endpoint = `https://fakestoreapi.com/products/${this.index}`
  
        try {
          const response = await fetch(endpoint)
          const data = await response.json()
  
          const isMen = data.category === "men's clothing"
          const isWomen = data.category === "women's clothing"
  
          if (isMen || isWomen) {
            this.product = data;
            this.isUnvailable = false;
            this.updateBodyClass(data.category)
            this.$emit('category-changed', data.category)
          } else {
            this.product = null;
            this.isUnvailable = true; 
            this.updateBodyClass('unavailable')
            this.$emit('category-changed', 'unavailable')     
          }
          this.index = this.index >= 20 ? 1 : this.index + 1;
        } catch (error) {
          console.error('Error fetching product:', error)
          this.product = null;
          this.isUnvailable = true; 
          this.index = this.index >= 20 ? 1 : this.index + 1;
          this.updateBodyClass('unavailable')
          this.$emit('category-changed', 'unavailable')
        } finally {
          this.isLoading = false
        }
      },
      updateBodyClass(category) {
        const body = document.body;
        body.classList.remove('body-men', 'body-women', 'body-unavailable');

        if (category === "men's clothing") {
          body.classList.add('body-men');
        } else if (category === "women's clothing") {
          body.classList.add('body-women');
        } else {
          body.classList.add('body-unavailable');
        }
      },
      beforeRouteLeave(to, from, next) {
        document.body.classList.remove('men-body', 'women-body', 'unavailable-body');
        next();
      },
      beforeDestroy() {
        document.body.classList.remove('men-body', 'women-body', 'unavailable-body');
      }

    },
    
  mounted() {
      this.fetchNextProduct()
    },
  }
  </script>
  
  <style scoped>
    .image-container {
    position: relative;
    margin: auto;
    width: 100%;
    height: 500px; 
    background-image: url('@/assets/images/bg-unvailable.png'); 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    }

  .overlay-text {
    position: absolute;
    top: 50%;            
    left: 50%;          
    transform: translate(-50%, -50%); 
    color: var(--color-hitam);
    text-align: center;
    padding: 20px;
  }

    .no-product-text {
    position: absolute;
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
    color: var(--color-putih);
    font-size: 20px;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.6); 
    padding: 10px 20px;
    border-radius: 8px;
    }

  .product-container {
    max-width: 800px;
    margin: 40px auto;
    padding: 20px;
    text-align: center;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: var(--color-biruTua);
  }
  
  .product-card {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    text-align: left;
    gap: 30px;
    margin: 20px 0;
  }
  
  .product-image {
    width: 300px;
    height: auto;
    border-radius: 8px;
    margin: 0 auto;
  }
  
  .product-details {
    max-width: 450px;
  }
  
  button {
    margin-top: 16px;
    padding: 10px 20px;
    border: none;
    background-color: #444;
    color: #fff;
    cursor: pointer;
    border-radius: 6px;
  }
  
  .spinner-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 0;
  }
  
  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(0,0,0,0.1);
    border-top: 4px solid #444;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 10px;
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  
  .page-men {
  background-color: var(--color-putih); 
  color: var(--color-biruTua);
  }

  .page-women {
    background-color: var(--color-putih); 
    color: var(--color-unguTua);
  }

  .page-unavailable {
    background-color: var(--color-putih);
    color: var(--color-abuabu);
  }

  .product-card {
    background-color: rgba(255, 255, 255, 0.1); 
    border-radius: 12px;
    padding: 20px;
  }

  .product-details h3, .price {
    font-size: 1.5rem;
    margin-bottom: 10px;
    font-weight: bold;
  }

  .deskription {
    color: var(--color-hitam);
    min-height: 200px
  }

  .product-image {
    background-color: var(--color-putih); 
    padding: 8px;
    border-radius: 8px;
  }

  .info-row {
    display: flex;
    justify-content: space-between;
    margin: 8px 0;
    font-size: 14px;
    color: var(--color-abuabu);
  }

  .category {
    text-transform: capitalize;
  }

  .solid-line {
    border: none;
    height: 1px;
    background-color:var(--color-hitam); 
    margin: 10px 0;
  }

  .tombol-row {
    display: flex;      
    justify-content: space-between;
    margin-top: 20px; 
  }

  .tombol-row button {
    flex: 1;
    margin: 0 5px; 
  }

  .circle.filled-men {
    background-color: var(--color-biruTua);
    border-color: var(--color-biruTua);
  }

  .circle.filled-women {
    background-color: var(--color-unguTua);
    border-color: var(--color-unguTua);
  }

  .next-product {
    margin-top: 16px;
    padding: 10px 20px;
    border: 2px solid currentColor;
    background-color: transparent;
    color: inherit;
    cursor: pointer;
    border-radius: 6px;
    transition: all 0.3s ease;
  }

  .next-product.page-men:hover {
    background-color: var(--color-biruTua);
    color: white;
  }

  .next-product.page-women:hover {
    background-color: var(--color-unguTua);
    color: white;
  }

  .next-product-unavailable {
    margin-top: 16px;
    padding: 10px 20px;
    border: 2px solid currentColor;
    background-color: transparent;
    width: 100%;
    color: inherit;
    cursor: pointer;
    border-radius: 6px;
    transition: all 0.3s ease;
  }
  .next-product-unavailable.page-unavailable:hover {
    background-color: gray;
    color: white;
  }


  .buy-product.page-men {
    background-color: var(--color-biruTua);
    color: white;
  }

  .buy-product.page-women {
    background-color: var(--color-unguTua);
    color: white;
  }

  .rating {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .rating-value {
    font-size: 14px;
    color: #666;
  }

  .rating-value {
    margin-left: 10px;
    font-size: 1em;
    color: #333;
  }

  .circle {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid #ccc;
    background-color: transparent;
    display: inline-block;
  }

</style>
  