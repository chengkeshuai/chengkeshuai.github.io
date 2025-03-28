---
layout: default
---

# 精选游戏列表

{% for post in site.posts %}
<div class="game-card">
  <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
  <div class="game-meta">发布时间：{{ post.date | date: "%Y-%m-%d" }}</div>
  {% if post.description %}
  <div class="game-description">{{ post.description }}</div>
  {% endif %}
  {% if post.tags %}
  <div class="game-tags">
    {% for tag in post.tags %}
    <span>{{ tag }}</span>
    {% endfor %}
  </div>
  {% endif %}
</div>
{% endfor %}

## 游戏分类导航

<div class="category-grid">
  <div class="category-card">
    <h3>益智解谜</h3>
    <p>锻炼大脑的益智游戏</p>
    <a href="/categories/puzzle">查看全部</a>
  </div>
  
  <div class="category-card">
    <h3>动作游戏</h3>
    <p>考验反应的动作游戏</p>
    <a href="/categories/action">查看全部</a>
  </div>
  
  <div class="category-card">
    <h3>策略游戏</h3>
    <p>需要战略思维的游戏</p>
    <a href="/categories/strategy">查看全部</a>
  </div>
</div>