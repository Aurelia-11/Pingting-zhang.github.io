// 图片画廊切换
document.querySelectorAll('.project-gallery img').forEach(img => {
  img.addEventListener('click', function() {
    this.classList.toggle('active');
  });
});

// 奖项悬停效果
const awardCards = document.querySelectorAll('.award-card');
awardCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = 'none';
  });
});