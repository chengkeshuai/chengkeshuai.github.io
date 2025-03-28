
document.addEventListener('DOMContentLoaded', function() {
    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'screenshot-modal';
    modal.innerHTML = `
      <span class="close-button">&times;</span>
      <img src="" alt="">
    `;
    document.body.appendChild(modal);
  
    // 为所有游戏截图添加点击事件
    document.querySelectorAll('.screenshot-item img').forEach(img => {
      img.addEventListener('click', function() {
        modal.querySelector('img').src = this.src;
        modal.style.display = 'block';
        
        // 记录查看截图事件
        if (typeof gtag !== 'undefined') {
          gtag('event', 'view_screenshot', {
            'event_category': 'Screenshots',
            'event_label': this.alt
          });
        }
      });
    });
  
    // 关闭模态框
    modal.addEventListener('click', function(e) {
      if (e.target === modal || e.target.className === 'close-button') {
        modal.style.display = 'none';
      }
    });
  });