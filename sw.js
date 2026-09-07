// Service worker แบบเรียบง่ายที่สุด — มีไว้เพื่อให้เบราว์เซอร์อนุญาตให้ "ติดตั้งเป็นแอป" เท่านั้น
// ไม่แคชข้อมูลใด ๆ (ระบบนี้ต้องเชื่อมต่อ Supabase แบบสด ๆ ตลอดเวลา จึงไม่ควรใช้ข้อมูลเก่าที่แคชไว้)
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
