---
layout: default
title: Project Dandoeng
---

<div id="articles">
  <h2>Projects</h2>
  <ul class="posts noList">
        {% if post.type == "project" %}
          <li>
            <span class="date">{{ post.date | date_to_string }}</span>
            <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
            <p class="description">{% if post.description %}{{ post.description  | strip_html | strip_newlines | truncate: 120 }}{% else %}{{ post.content | strip_html | strip_newlines | truncate: 120 }}{% endif %}</p>
          </li>
        {% endif %}
      {% endfor %}
  </ul>
</div>