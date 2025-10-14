---
layout: page
title: Flexible Working Configuration
description: Studying how collaboration norms change in the modern workplace
img: assets/img/office.jpg
importance: 2
category: work
project_key: flexible
---

COVID-19 demonstrated that much work can be done just as successfully, from home. However, when we change something about our working practices, we often break our collaboration norms. As modern organizations continue to experiment with new working congifigurations, including hybrid work, four day work-weeks, and meeting-free days, SHARE lab is interested in investigating how these configurations challenge existing collaboration, and how technical and non-technical solutions can support more effective collaboration.  

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
