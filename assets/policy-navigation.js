(() => {
  const homeLabels = {ko:'게임 홈', en:'Game home', ja:'ゲームのホーム', 'zh-Hans':'游戏首页', 'zh-Hant':'遊戲首頁'};
  function updateNavigation() {
    const hash = location.hash.slice(1);
    const selected = hash === 'delete-data' ? 'ko' : hash.startsWith('delete-data-') ? hash.slice(12) : hash;
    const query = new URL(location.href).searchParams.get('lang');
    const language = Object.hasOwn(homeLabels, selected) ? selected : Object.hasOwn(homeLabels, query) ? query : 'ko';
    for (const link of document.querySelectorAll('[data-home-link], [data-brand-link]')) {
      link.search = language === 'ko' ? '' : `?lang=${language}`;
      if (link.hasAttribute('data-home-link')) link.textContent = homeLabels[language];
    }
  }
  window.addEventListener('hashchange', updateNavigation);
  updateNavigation();
})();
