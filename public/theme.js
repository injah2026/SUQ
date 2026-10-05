'use strict';
(function initMajazTheme(){
  const key='majaz-atelier-theme';
  let theme='light';
  try{const saved=localStorage.getItem(key);if(saved==='dark'||saved==='light')theme=saved;}catch{}
  document.documentElement.dataset.theme=theme;
  function reflect(){
    document.querySelectorAll('[data-theme-toggle]').forEach(button=>{
      const dark=document.documentElement.dataset.theme==='dark';
      button.setAttribute('aria-pressed',String(dark));
      button.setAttribute('aria-label',dark?'تفعيل الوضع الفاتح':'تفعيل الوضع الداكن');
      button.title=dark?'الوضع الفاتح':'الوضع الداكن';
    });
  }
  document.addEventListener('DOMContentLoaded',reflect);
  document.addEventListener('click',event=>{
    if(!event.target.closest('[data-theme-toggle]'))return;
    theme=document.documentElement.dataset.theme==='dark'?'light':'dark';
    document.documentElement.dataset.theme=theme;
    try{localStorage.setItem(key,theme);}catch{}
    reflect();
  });
  addEventListener('storage',event=>{
    if(event.key!==key)return;
    document.documentElement.dataset.theme=event.newValue==='dark'?'dark':'light';
    reflect();
  });
})();
