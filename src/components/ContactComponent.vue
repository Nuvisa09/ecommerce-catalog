<template>
  <div class="contact-container">
    <h1>Hubungi Kami</h1>
    <p>
      Kami senang mendengar dari Anda! Jika Anda memiliki pertanyaan, saran, atau membutuhkan bantuan, silakan hubungi kami melalui formulir di bawah ini atau langsung melalui kontak yang tersedia.
    </p>

    <form class="contact-form" @submit.prevent="submitForm">
      <input type="text" v-model="form.name" placeholder="Nama Anda" required />
      <input type="email" v-model="form.email" placeholder="Email Anda" required />
      <textarea v-model="form.message" placeholder="Pesan Anda" required></textarea>
      <button type="submit">Kirim</button>
    </form>

    <div class="contact-info">
      <p><strong>Email:</strong> support@vitastore.com</p>
      <p><strong>Telepon:</strong> +62 812 3456 7890</p>
      <p><strong>Alamat:</strong> Jl. Abdul Aziz No. 123, Kalimantan Tengah, Indonesia</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Simulasi pengiriman form
      alert(`Terima kasih, ${this.form.name}! Pesan Anda telah dikirim.`);
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
};
</script>

<style scoped>
.contact-container {
  max-width: 700px;
  margin: 20px auto;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
  background-color: var(--color-putih);
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.contact-container h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--color-men);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.contact-form input,
.contact-form textarea {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

.contact-form textarea {
  resize: vertical;
  min-height: 120px;
}

.contact-form button {
  background-color: var(--color-men);
  color: var(--color-putih);
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
}

.contact-form button:hover {
  background-color: var(--color-dua);
  color: var(--color-hitam);
}

.contact-info {
  font-size: 1rem;
  color: #333;
}
</style>
