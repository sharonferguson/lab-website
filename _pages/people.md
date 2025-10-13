---
layout: page           # or: page   (both work; profiles shows a nice bio block)
permalink: /people/
title: people
description: Current and past members of SHARE Lab
nav: true
nav_order: 7


---

{% capture bio %}
{% include_relative about_sharon.md %}
{% endcapture %}
{{ bio | markdownify }}

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
