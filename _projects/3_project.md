---
layout: page
title: Human-AI Collaboration in Subjective Contexts
description: Uncovering the benefits and dangers of AI-supported subjective decision-making
img: assets/img/h-ai.jpg
importance: 3
project_key: h-ai
category: work
---

Traditional AI-supported decision-support systems are designed for objective contexts, where we can measure collaboration success based on how accurately the human performs when using the AI. These measures allow us to identify harmful reliance behaviours. With advances in large language models, humans are using AI to support subjective contexts, such as getting advice on interpersonal scenarios. In these cases with no one right answer, it is less clear what harmful reliance looks like, and how we can design against it. In collaboration with [Dr. Anastasia Kuzminykh](https://www.anastasia-kuzminykh.com/), [Dr. Young-Ho Kim](https://younghokim.net/), and [Paula Akemi Aoyagui](https://www.linkedin.com/in/paula-akemi/?locale=en_US), SHARE lab studies how AI influences human subjective decision-making.  

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
