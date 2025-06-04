---
published: true
title: Library
permalink: /en/library/
ref: lib-list
lang: en
layout: library
category: 
  - caipiratechlab
  - encontrada
  - labs
  - residence
  - siloescola
  - ocupa-silo
---

<section class="content-text">
    <h2>{{ page.title }}</h2>
    On this page we gather our independent publications, and other content such as: articles, videos and guides produced by us and our partners. <br>
    <strong>Read, watch and share.</strong>
</section>

# Our Publications

<section class="home-items-wrapper">
    {% assign publications = site.library | where:"type", "publication" %}
    {% for publication in publications %}
      {% assign pCover = site.baseurl | append: '/' | append: publication.cover %}
      {% if publication.file %}
        {% assign pLink = site.baseurl | append: '/' | append: publication.file %}
      {% else %}
        {% assign pLink = publication.link %}
      {% endif %}
      <a class="home-item home-card library-card" href="{{ pLink }}" target="_blank">
        <div class="list-item-image" style="background-image: url('{{ pCover }}');">
          <div class="list-item-title">{{ publication.title }}</div>
        </div>
      </a>
    {% endfor %}
</section>

# Articles, Videos and Guides

<section class="home-items-wrapper">
    {% assign articles = site.library | where:"type", "article" %}
    {% for article in articles %}
      {% assign pCover = site.baseurl | append: '/' | append: article.cover %}
      {% if article.file %}
        {% assign pLink = site.baseurl | append: '/' | append: article.file %}
      {% else %}
        {% assign pLink = article.link %}
      {% endif %}
      <a class="home-item home-card library-card" href="{{ pLink }}" target="_blank">
        <div class="list-item-image" style="background-image: url('{{ pCover }}');">
          <div class="list-item-title">{{ article.title }}</div>
        </div>
      </a>
    {% endfor %}
</section>

