---
published: true
title: Biblioteca
permalink: /biblioteca/
ref: lib-list
lang: pt
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
    Nessa página reunimos as nossas publicações independentes, e outros conteúdos como: artigos, vídeos e guias produzidos por nós e pelos nossos parceiros. <br>
    <strong>Leia, assista e compartilhe.</strong>
</section>

# Nossas Publicações
<section class="home-items-wrapper">
    {% assign publications = site.library | where:"lang", page.lang | where:"type", "publication" %}
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

# Artigos, Vídeos e Guias

<section class="home-items-wrapper">
    {% assign articles = site.library | where:"lang", page.lang | where:"type", "article" %}
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

