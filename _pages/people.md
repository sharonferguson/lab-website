---
layout: profiles            # or: page   (both work; profiles shows a nice bio block)
permalink: /people/
title: people
description: Current and past members of SHARE Lab
nav: true
nav_order: 7

# Only needed if you keep layout: profiles (it renders this PI bio block)
profiles:
  - align: right
    image: /assets/img/headshot10-v2.jpg
    content: about_sharon.md
    image_circular: false
    more_info: "<p>Management Science and Engineering, University of Waterloo</p><p><a href='mailto:sharon.ferguson@uwaterloo.ca'>sharon.ferguson@uwaterloo.ca</a></p>"
---

## Graduate Students (MASc)
{% include people-grid.liquid list=site.data.people.masters %}

## Undergraduate Researchers
{% include people-grid.liquid list=site.data.people.undergrads %}

## Alumni
{% include people-grid.liquid list=site.data.people.alumni %}
