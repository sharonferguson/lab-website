---
layout: page
title: Developing AI-Enabled Teamwork Support
description: AI-enabled support for human-human teamwork
img: assets/img/teamwork.jpg
importance: 1
category: work
project_key: teamwork   # <-- add this line
---

Pulling from theories of successful collaboration in Management and Pyschology, SHARE Lab aims to measure these constructs from a team's digital trace data (e.g., Slack messages, Zoom transcripts) to predict when they might need a bit of help. Then, our collaboration technology can provide research-backed interventions, exactly where and when they are needed. 

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
