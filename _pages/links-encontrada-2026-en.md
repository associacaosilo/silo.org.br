---
published: true
title: EncontrADA 2026 Links
layout: links-encontrada
permalink: /links-encontrada-2026-en
lang: en
ref: links-encontrada-2026
---

<style>
  #links-encontrada {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-color: #5a1f1f;
    font-family: 'Open Sans', sans-serif;
    display: flex;
    justify-content: center;
  }

  #links-encontrada .le-wrap {
    width: 100%;
    max-width: 480px;
    padding: 48px 24px 32px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  /* Logos */
  #links-encontrada .le-logos {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 24px;
  }

  #links-encontrada .le-logo {
    display: inline-block;
    background-color: #D4AF37;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-position: center;
    -webkit-mask-size: contain;
    mask-size: contain;
  }

  #links-encontrada .le-logo-img--encontrada {
    width: 170px;
    height: auto;
    display: block;
  }

  #links-encontrada .le-divider {
    width: 1px;
    height: 90px;
    background-color: #D4AF37;
    opacity: 0.6;
  }

  #links-encontrada .le-logo--silo {
    width: 96px;
    height: 56px;
    -webkit-mask-image: url('{{ site.baseurl }}/media/images/logos/silo.svg');
    mask-image: url('{{ site.baseurl }}/media/images/logos/silo.svg');
  }

  /* Data / local */
  #links-encontrada .le-date {
    color: #C7A94A;
    font-weight: 700;
    font-size: 1.1rem;
    letter-spacing: 0.03em;
    margin: 0 0 4px;
  }

  #links-encontrada .le-local {
    color: #C7A94A;
    font-size: 0.9rem;
    margin: 0 0 32px;
    opacity: 0.9;
  }

  /* Botões */
  #links-encontrada .le-buttons {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 36px;
  }

  #links-encontrada .le-btn {
    display: block;
    width: 100%;
    box-sizing: border-box;
    background-color: #FAF6EF;
    color: #5a1f1f;
    text-decoration: none;
    font-family: 'Font3', 'Font1', 'Arial', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-size: 0.9rem;
    text-align: center;
    padding: 16px 20px;
    border-radius: 6px;
    border: 1px solid transparent;
    transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
  }

  #links-encontrada .le-btn:hover {
    background-color: #5a1f1f;
    color: #D4AF37;
    border-color: #D4AF37;
    transform: translateY(-1px);
  }

  #links-encontrada .le-btn--disabled {
    cursor: not-allowed;
    opacity: 0.55;
    position: relative;
  }

  #links-encontrada .le-btn--disabled:hover {
    background-color: #FAF6EF;
    color: #5a1f1f;
    border-color: transparent;
    transform: none;
  }

  #links-encontrada .le-btn--disabled .le-badge {
    display: block;
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #5a1f1f;
    opacity: 0.6;
    margin-top: 4px;
  }

  /* Ícones sociais */
  #links-encontrada .le-social {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 22px;
    margin-bottom: 20px;
  }

  #links-encontrada .le-social a {
    color: #D4AF37;
    font-size: 1.3rem;
    text-decoration: none;
    transition: opacity 0.15s ease;
  }

  #links-encontrada .le-social a:hover {
    opacity: 0.75;
  }

  /* Link do site */
  #links-encontrada .le-site {
    color: #C7A94A;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-decoration: none;
    margin-bottom: 28px;
  }

  #links-encontrada .le-site:hover {
    color: #D4AF37;
  }

  /* Rodapé */
  #links-encontrada .le-footer {
    color: #C7A94A;
    opacity: 0.75;
    font-size: 0.7rem;
    line-height: 1.5;
    margin: 0;
  }

  /* Seletor de idioma */
  #links-encontrada .le-lang {
    position: fixed;
    top: 16px;
    right: 16px;
    z-index: 10;
    font-family: 'Open Sans', sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.05em;
  }

  #links-encontrada .le-lang .menu-language-section {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  #links-encontrada .le-lang .menu-language-option {
    color: #C7A94A;
    opacity: 0.7;
  }

  #links-encontrada .le-lang a {
    text-decoration: none;
  }

  #links-encontrada .le-lang a:hover .menu-language-option {
    opacity: 1;
  }

  #links-encontrada .le-lang .menu-language-option-selected {
    color: #D4AF37;
    opacity: 1;
    border-bottom: 2px solid #D4AF37;
  }
</style>

<div class="le-lang">
  {% include language-selection.html %}
</div>

<div class="le-wrap">

  <div class="le-logos">
    <img class="le-logo-img--encontrada" src="{{ site.baseurl }}/media/images/logos/Encontrada-2026-mono-dourado-transparente.png" alt="EncontrADA 2026 — Entanglements">
    <span class="le-divider"></span>
    <span class="le-logo le-logo--silo" role="img" aria-label="Silo"></span>
  </div>

  <p class="le-date">Jul 30 — Aug 02, 2026</p>
  <p class="le-local">Serrinha do Alambari</p>

  <div class="le-buttons">
    <!-- <a class="le-btn" href="https://forms.gle/Wz8fFBofchbfY4hB8" target="_blank" rel="noopener">Open Call: Volunteers</a> -->
    <a class="le-btn" href="/media/docs/grade-horarios-encontrada-2026.pdf" target="_blank" rel="noopener">Full Program</a>
    <a class="le-btn" href="/media/docs/grade-horarios-encontrada-2026.pdf" target="_blank" rel="noopener">Schedule</a>
    <a class="le-btn" href="https://silo.org.br/encontrada-entrelacamentos-en/" target="_blank" rel="noopener">Everything about EncontrADA</a>
  </div>

  <div class="le-social">
    {% for social in site.social %}
      {% unless social[1] == "" %}
        {% if social[0] == "instagram" or social[0] == "facebook" or social[0] == "youtube" or social[0] == "linkedin" or social[0] == "envelope-o" %}
          <a href="{{ social[1] }}" target="_blank" rel="noopener">
            <i class="fa fa-{{ social[0] }}" aria-hidden="true"></i>
          </a>
        {% endif %}
      {% endunless %}
    {% endfor %}
  </div>

  <a class="le-site" href="https://silo.org.br/" target="_blank" rel="noopener">SILO.ORG.BR</a>

  <p class="le-footer">
    EncontrADA 2026 · Entanglements<br>
    an initiative by Silo — Art and Rural Latitude
  </p>

</div>
