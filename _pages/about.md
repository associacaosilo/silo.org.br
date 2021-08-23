---
published: true
layout: post
title: About
permalink: /about/
parceiras:
  - link: 'https://swissnex.org/'
    cover: media/images/logos/swissnex.png
  - link: 'https://www.artscouncil.org.uk/'
    cover: media/images/logos/arts_council.png 
  - link: 'https://prohelvetia.ch'
    cover: media/images/logos/prohelvetia.png
  - link: 'http://crescentefertil.org.br/'
    cover: media/images/logos/crescentefertil.jpg
  - link: 'http://medialab-prado.es'
    cover: media/images/logos/medialabprado.jpg
  - link: 'http://www.procomum.org/'
    cover: media/images/logos/procomum.png
  - link: 'http://www.ciudadania20.org/'
    cover: media/images/logos/inovacionciudadana.png
  - link: 'http://segib.org/'
    cover: media/images/logos/segib.svg
  - link: 'http://www.lilo.zone'
    cover: media/images/logos/lilo.png
  - link: 'http://www.sitawi.net/'
    cover: media/images/logos/sitawi.svg
  - link: 'http://epicentrodalva.com.br/'
    cover: media/images/logos/epicentrodalva.png
  - link: 'https://oama.eco.br/'
    cover: media/images/logos/oama.jpg
  - link: 'https://ludmilalacerdabarros.com/'
    cover: media/images/logos/ludmila.png
  - link: 'https://oco.arq.br'
    cover: media/images/logos/oco.png
  - link: 'http://www.fundosocialelas.org/'
    cover: media/images/logos/elas.svg
ref: pagina-sobre
lang: en
---


<div class="about-section-title-wrapper">
  <h3 class="about-section-title" id="o-que-fazemos">Programs</h3>
</div>
The Silo’s Programs: 

<span class="about-subtitle">Resilience: Artist in Residence</span>
The artistic residence offers immersion to artistic research and experimentations directed to artists and curators interested in  developing their work in a rural and Natural environment. The residence to create narratives  for the present rural/environmental universe through Contemporary Art. 

<span class="about-subtitle">CaipiraTechLab</span>  The program collaborates with the strengthening of local agri-food systems and their cultural expression through mapping, courses and technology development.

<span class="about-subtitle"> Laboratories of Experimentation and Innovation</span> are a multidisciplinary space that allows the development of projects with the contribution of collaborators and different resources.The Labs are committed to production and research, especially in the arts, sciences and technologies

<span class="about-subtitle">EncontrADA</span> Feminis meeting focused on the exchange of knowledge between different feminine universes which make up social, economical and esthetics issues of women and trans-people’s life. It’s a meeting of generations and Technologies.

<span class="about-subtitle">Silo-School</span> A free and transdisciplinary school. A farm-area school created to offer training courses and workshops in immersion cycles, for adults, teenagers and kids for knowledge exchange and human development, working with art, science, technology and agroecology.
  
<div class="about-section-title-wrapper">
  <h3 class="about-section-title" id="historico">History</h3>
</div>
Silo was born in 2017, supported by the experience of some of us, in the development of laboratory models for experimentation and innovation, 10 years ago. The convergence of the association was made possible by the synergy between people who live, work and research rural spaces. Silo is a rural station that is designed to search for interrogations and answers to the challenging questions of our time, offering experiences for knowledge exchange and human development, working with art, science, technology and agroecology. It was born of the desire to promote the exchange of knowledge between country and city, showing that in the extreme peripheries there is art, science and technology. It reflects, on the one hand, the generational experience of children and grandchildren of country people, who relate to new technologies. On the other, it reflects the experience of an urban generation who want to live in the countryside.

<div class="about-section-title-wrapper">
  <h3 class="about-section-title" id="silo">Silo</h3>
</div>
A silo is a rural infrastructure, a kind of recipient dug into the soil to store cereal and biomass at the right temperature.

There are vestiges of ancient silage structures among agricultural peoples, as is the case of the silos of archeological sites found in Januária (MG), and in countries like Jordan and Egypt.

Silos are present in the cultures of peoples from different parts of the world: Amerindians and African tribes, among others. The Yawalapiti, for example, as with other people from the High Xingu, who live basically from agriculture and fishing, store manioc flour and dough in silos in the centre of their homes.

The name Silo refers to our capacity to interact with and act on the space we live in, producing technology, culture and communities. This capacity makes rural space a place of criticism and thought production. For us, using the name Silo is also a way of challenging the rural imagination, which has been devastated by large economic and industrial structures, of recovering, somehow, autonomy over smaller-scale production.

<div class="about-section-title-wrapper">
  <h3 class="about-section-title" id="apoio">Support</h3>
</div>

 <div class="parceiras-container">
  {% assign pCover = site.baseurl | append: '/' | append: 'media/images/logos/ford_color.svg' %}
  <a href="https://www.fordfoundation.org/" target="_blank">
    <div class="parceira-logo" style="background-image: url('{{ pCover }}');">
    </div>
  </a>
  
    
  {% assign pCover = site.baseurl | append: '/' | append: 'media/images/logos/serrapilheira.png' %} 
   <a href="https://serrapilheira.org" target="_blank">
    <div class="parceira-logo" style="background-image: url('{{ pCover }}');">
    </div>
  </a>
  
</div>

<div class="about-section-title-wrapper">
  <h3 class="about-section-title" id="parceiras">Partners</h3>
</div>

 <div class="parceiras-container">
    {% for parceira in page.parceiras%}
      {% assign pCover = site.baseurl | append: '/' | append: parceira.cover %}
    <a href="{{parceira.link}}" target="_blank">
      <div class="parceira-logo" style="background-image: url('{{ pCover }}');"></div>
    </a>
    {% endfor %}
</div>
