<template>
  <div>
    <NuxtRouteAnnouncer />
    <div class="container">
      <div class="services-block">
        <h2>🚀 Мои услуги: DEV</h2>
        <ul class="services-list">

          <li><strong style="color: #f9f978">Python разработка</strong>: Телеграм боты, парсеры, скрипты</li>
          <li><strong style="color: #2bff80">Frontend</strong>: Разработка на Nuxt.js, Vue.js</li>
          <li><strong style="color: #2bff80">Backend</strong>: Laravel, PHP, JavaScript, API-интеграции</li>
          <li><strong style="color: #ff5555">Поддержка сайтов</strong>: Vue.js, Nuxt.js, Laravel Filament, Opencart, October CMS, 1С-Битрикс, WordPress</li>
        </ul>
        <p>Готов к сотрудничеству! 💻🔥</p>
        <a href="https://t.me/idev2022" target="_blank" class="telegram-button">
          Написать в Telegram
        </a>
      </div>
      <img src="/img/logo.webp" alt="">
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap');
body {
  /*background: linear-gradient(to right, #1e1f27, #4a8998);*/
  background: linear-gradient(to right, #202126, #263940, #1f5542);
}

img {
  width: 550px;
  margin-top: 80px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
}

.container {
  display: flex;
  align-content: center;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
}
/* Переменные */
.telegram-button {
  margin-top: 20px;
  margin-left: 10px;
  display: inline-block;
  padding: 10px 20px;
  background-color: #0088cc;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  transition: background-color 0.3s ease;
}

.telegram-button:hover {
  background-color: #006f99;
}

.services-block {
  color: #f8f8f2;
  padding: 20px;
  border-radius: 8px;
  font-family: 'Fira Code', monospace;
  max-width: 500px;
}

.services-block h2 {
  font-size: 1.4em;
  margin-bottom: 15px;
}

.services-list {
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 20px;
}

.services-list li {
  font-size: 1.2em;
  line-height: 1.5;
  padding-left: 25px;
  position: relative;
}

.services-list li::before {
  content: '🔹';
  position: absolute;
  left: 0;
}

.services-block p {
  font-size: 1.1em;
  font-weight: bold;
  color: #66d9ef;
}
</style>
