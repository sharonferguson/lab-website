---
layout: page           # or: page   (both work; profiles shows a nice bio block)
permalink: /people/
title: people
description: Current and past members of SHARE Lab
nav: true
nav_order: 7


---

<div class="row align-items-start">
  <div class="col-12 col-md-3 mb-4 text-center">
    {% include figure.html path="assets/img/headshot10-v2.jpg" alt="Sharon Ferguson" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-12 col-md-9">
    {% capture about %}{% include_relative about_sharon.md %}{% endcapture %}
    {{ about | markdownify }}
  </div>
</div>

## Graduate Students (MASc)
{% include people-grid.liquid list=site.data.people.masters %}

## Undergraduate Researchers
{% include people-grid.liquid list=site.data.people.undergrads %}

## Alumni
{% include people-grid.liquid list=site.data.people.alumni %}

## Graduate Students (MASc)
{% include people-grid.liquid list=site.data.people.masters %}

## Undergraduate Researchers
{% include people-grid.liquid list=site.data.people.undergrad %}

## Alumni
{% include people-grid.liquid list=site.data.people.alumni %}
