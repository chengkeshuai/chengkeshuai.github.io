---
layout: default
---

# 欢迎来到游戏列表

这里收集了精选的网页游戏，希望你能找到喜欢的游戏！

## 最新游戏

{% for post in site.posts limit:5 %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}

## 游戏分类

- [益智解谜](/categories/puzzle)
- [动作游戏](/categories/action)
- [策略游戏](/categories/strategy)
- [休闲游戏](/categories/casual)

## 热门游戏

- [2048 - 经典数字益智游戏](/puzzle/2048/)