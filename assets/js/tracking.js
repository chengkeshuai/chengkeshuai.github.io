// 跟踪游戏链接点击
document.addEventListener('DOMContentLoaded', function() {
    // 跟踪游戏链接点击
    document.querySelectorAll('.game-card a').forEach(function(link) {
        link.addEventListener('click', function() {
            gtag('event', 'game_click', {
                'event_category': 'Games',
                'event_label': this.textContent
            });
        });
    });

    // 跟踪搜索行为
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('change', function() {
            gtag('event', 'search', {
                'event_category': 'Search',
                'event_label': this.value
            });
        });
    }

    // 跟踪标签点击
    document.querySelectorAll('.tag-item').forEach(function(tag) {
        tag.addEventListener('click', function() {
            gtag('event', 'tag_click', {
                'event_category': 'Tags',
                'event_label': this.textContent.trim()
            });
        });
    });
});
