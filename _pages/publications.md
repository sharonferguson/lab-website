---
layout: page
permalink: /publications/
title: publications
nav: true
nav_order: 5
---

{% bibliography --file papers --query @* --sort_by year --order descending %}


<!-- Start simple: show everything from the configured bib -->
<!-- {% bibliography --query @* %} -->

<!-- 
<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

<!-- {% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div> --> -->
