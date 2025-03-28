SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('search-results'),
  json: '/search.json',
  searchResultTemplate: '<div class="search-item"><a href="{url}"><h3>{title}</h3><p>{description}</p></a></div>',
  noResultsText: '没有找到相关游戏',
  limit: 10,
  fuzzy: false
});
