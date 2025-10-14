---
layout: page
title: Promoting Student Persistence in AI
description: Studying the factors that influence student pathways in AI careers
img: assets/img/persistence.jpg
importance: 4
project_key: persistence
category: work
---

While engineering education has spent decades studying student career pathways in order to improve retention, when new subdisciplines emerge, they tend to be initially dominated by few demographic groups. To improve persistence of AI students, this project, in collaboration with [Dr. Alison Olechowski (University of Toronto)](https://readylab.mie.utoronto.ca/) and [Dr. James Magarian (MIT)](https://gel.mit.edu/faculty/jim-magarian/), this project investigates how students decide whether or not to pursue a career in AI after taking an introductory class. 


{% assign key = page.project_key | default: page.title | downcase %}

## Publications
{% capture _list %}
  {% bibliography --template bib --group_by none --query @*[project={{ key }}]* %}
{% endcapture %}

{%- if _list contains '<li' -%}
  {{ _list }}
{%- else -%}
  <p>No publications are tagged with this project yet.</p>
{%- endif -%}
