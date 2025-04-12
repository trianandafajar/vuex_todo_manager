<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Ini adalah proyek demo menggunakan <strong>Prisma ORM</strong> untuk mengelola data
      dalam aplikasi berbasis Node.js atau Vue/Next.js.
    </p>

    <h3>📦 Fitur yang Digunakan</h3>
    <ul>
      <li><a href="https://www.prisma.io/" target="_blank">Prisma ORM</a></li>
      <li><a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a> (atau MySQL/SQLite)</li>
      <li><a href="https://vuejs.org/" target="_blank">Vue.js</a></li>
      <li><a href="https://cli.vuejs.org/" target="_blank">Vue CLI</a></li>
    </ul>

    <h3>📚 Dokumentasi</h3>
    <ul>
      <li><a href="https://www.prisma.io/docs" target="_blank">Prisma Docs</a></li>
      <li><a href="https://www.prisma.io/docs/concepts/components/prisma-client" target="_blank">Prisma Client</a></li>
      <li><a href="https://www.prisma.io/docs/concepts/components/prisma-schema" target="_blank">Prisma Schema</a></li>
    </ul>

    <h3>🛠️ CLI Commands</h3>
    <ul>
      <li><code>npx prisma init</code> — Inisialisasi Prisma</li>
      <li><code>npx prisma migrate dev --name init</code> — Buat migrasi</li>
      <li><code>npx prisma studio</code> — Antarmuka UI data</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      default: "Selamat Datang di Prisma ORM Tutorial",
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 30px 0 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 5px 0;
}
a {
  color: #2c3e50;
  text-decoration: none;
}
code {
  background-color: #f4f4f4;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 90%;
}
</style>
