/* ===== Navigation ===== */
(function() {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  });

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
})();

/* ===== WeChat copy ===== */
function copyWechat(e) {
  e.preventDefault();
  const wechatId = 'your_wechat_id';
  navigator.clipboard?.writeText(wechatId).then(() => {
    alert('微信号已复制到剪贴板：' + wechatId);
  }).catch(() => {
    prompt('微信号：', wechatId);
  });
}
