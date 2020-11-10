---
layout: default
title: Articles Dandoeng
---

<div id="articles">
  <h2>Articles</h2>
   <ul class="posts noList">
      {% assign post_project = 0 %}
      {% for post in site.posts %}
          {% if post.type != "Project" %}
          {% increment post_project %}
            <li>
              <span class="date">{{ post.date | date_to_string }}</span>
              <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
              <p class="description">{% if post.description %}{{ post.description  | strip_html | strip_newlines | truncate: 120 }}{% else %}{{ post.content | strip_html | strip_newlines | truncate: 120 }}{% endif %}</p>
            </li>
          {% endif %}
      {% endfor %}
      {% if post_project < 1 %}
        <p>Sorry guys, There are no posts on this page at this time</p>
      {% endif %}
  </ul>
</div>