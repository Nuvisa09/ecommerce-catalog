<template>
  <div class="home-page">
    <HeroComponent/>
    <CatalogComponent/>
    <PromoComponent/>
    <extras-component/>
    <FooterComponent/>
  </div>
</template>

<script>
import HeroComponent from '@/components/HeroComponent.vue';
import CatalogComponent from '@/components/CatalogComponent.vue';
import PromoComponent from '@/components/PromoComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import ExtrasComponent from '@/components/ExtrasComponent.vue';


export default {
  name: 'HomePage',
  components: {
    HeroComponent,
    CatalogComponent,
    PromoComponent,
    FooterComponent,
    ExtrasComponent,
  },
  methods: {
  handleCategoryChange(newCategory) {
    this.category = newCategory;
  }
}
}
</script>

<style scoped>
.home-page {
  width: 100%;
  margin: auto;
  padding: 0;
}
button {
  padding: 10px 20px;
  margin-top: 20px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
