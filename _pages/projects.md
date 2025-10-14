---
layout: page
title: projects
permalink: /projects/
description: A broad overview of the SHARE Lab areas of research
nav: true
nav_order: 3
horizontal: false
---

<div class="projects">
  {% assign sorted_projects = site.projects
      | where_exp:"p","p.hidden != true"
      | sort: "importance" %}

  {% if page.horizontal %}
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2">
        {% for project in sorted_projects %}
          {% include projects_horizontal.liquid %}
        {% endfor %}
      </div>
    </div>
  {% else %}
    <div class="row row-cols-1 row-cols-md-3">
      {% for project in sorted_projects %}
        {% include projects.liquid %}
      {% endfor %}
    </div>
  {% endif %}
</div>
