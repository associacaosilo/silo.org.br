---
published: true
title: Donate
permalink: /donate/
ref: donate
lang: en
---
A Silo é uma organização sem fins lucrativos que se sustenta com doações de institutos, fundações e pessoas físicas.
<br><br>
Colabore também doando qualquer quantia:

  {% assign paypal_button = 'https://www.paypalobjects.com/pt_BR/i/btn/btn_donate_LG.gif' %}
  {% if page.lang == 'en' %}
    {% assign paypal_button = 'https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif' %}
  {% endif %}
  <div class="footer-line" style="margin-top: 10px;">
    <form action="https://www.paypal.com/donate" method="post" target="_top">
    <input type="hidden" name="business" value="contato@silo.org.br" />
    <input type="hidden" name="currency_code" value="USD" />
    <input type="image" src="https://silo.org.br/media/images/botao_donate.png" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
    <img alt="" border="0" src="https://www.paypal.com/en_BR/i/scr/pixel.gif" width="1" height="1" />
    </form>
  </div>

