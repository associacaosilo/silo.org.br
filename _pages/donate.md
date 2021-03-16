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
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
    <input type="hidden" name="cmd" value="_s-xclick" />
    <input type="hidden" name="hosted_button_id" value="YDQYQUTLYYQ9N" />
    <input type="image" src="{{ paypal_button }}" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
    <img alt="" border="0" src="https://www.paypal.com/en_BR/i/scr/pixel.gif" width="1" height="1" />
    </form>
  </div>

