---
layout: profiles
permalink: /people/
title: people
description: Current and past members of SHARE Lab
nav: true
nav_order: 7

profiles:
  # if you want to include more than one profile, just replicate the following block
  # and create one content file for each profile inside _pages/
  - align: right
    image: headshot10-v2.jpg
    content: about_sharon.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>Management Science and Engineering, University of Waterloo</p>
      <p>sharon.ferguson@uwaterloo.ca</p>



  # - align: left
  #   image: prof_pic.jpg
  #   content: about_einstein.md
  #   image_circular: false # crops the image to make it circular
  #   more_info: >
  #     <p>555 your office number</p>
  #     <p>123 your address street</p>
  #     <p>Your City, State 12345</p>


#   ## Graduate Students (Ph.D.)
# {% include people-grid.liquid list=site.data.people.phd %}

## Graduate Students (MASc)
{% include people-grid.liquid list=site.data.people.masters %}

## Undergraduate Researchers
{% include people-grid.liquid list=site.data.people.undergrad %}

## Alumni
{% include people-grid.liquid list=site.data.people.alumni %}

---
