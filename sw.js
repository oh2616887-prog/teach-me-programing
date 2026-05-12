const cacheName = 'almni-v1';
const assets = [
  '/',
  '/index.html',
  '/css/style.css', // اتأكد من مسار ملف الـ CSS بتاعك
  '/icon.png'
];

// تثبيت الـ Service Worker
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// تشغيل التطبيق وجلب البيانات
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
