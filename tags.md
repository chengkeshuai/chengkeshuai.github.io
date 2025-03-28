---
layout: default
title: 游戏标签
permalink: /tags/
---

<div class="tags-cloud">
  {% assign tags = site.posts | map: 'tags' | join: ',' | split: ',' | uniq | sort %}
  {% for tag in tags %}
    {% assign tag_count = site.posts | where_exp: "post", "post.tags contains tag" | size %}
    <a href="#{{ tag }}" class="tag-item" data-count="{{ tag_count }}">
      {{ tag }}
      <span class="tag-count">{{ tag_count }}</span>
    </a>
  {% endfor %}
</div>

{% for tag in tags %}
<div class="tag-section" id="{{ tag }}">
  <h2>{{ tag }}</h2>
  {% for post in site.posts %}
    {% if post.tags contains tag %}
      <div class="game-card">
        <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
        <div class="game-meta">发布时间：{{ post.date | date: "%Y-%m-%d" }}</div>
        {% if post.description %}
        <div class="game-description">{{ post.description }}</div>
        {% endif %}
      </div>
    {% endif %}
  {% endfor %}
</div>
{% endfor %}
