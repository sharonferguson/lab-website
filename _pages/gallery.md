---
layout: page
title: Gallery
permalink: /gallery/
nav: true
nav_order: 5
images:
  photoswipe: true
_styles: |
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-auto-rows: 110px;
    gap: 12px;
    margin-top: 2rem;
  }

  .gallery-tile {
    display: block;
    overflow: hidden;
    grid-column: span 3;
    grid-row: span 3;
    border-radius: 6px;
    background: var(--global-card-bg-color);
  }

  .gallery-tile.wide {
    grid-column: span 12;
  }

  .gallery-tile.tall {
    grid-column: span 6;
    grid-row: span 5;
  }

  .gallery-tile.feature {
    grid-column: span 6;
    grid-row: span 5;
  }

  .gallery-tile img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 180ms ease;
  }

  .gallery-tile.reveal-ready {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 600ms ease, transform 600ms ease;
  }

  .gallery-tile.reveal-ready.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .gallery-tile:hover img {
    transform: scale(1.04);
  }

  .gallery-collection {
    margin-top: 3rem;
  }

  .gallery-collection:first-child {
    margin-top: 2rem;
  }

  .gallery-collection h2 {
    margin-bottom: 0.35rem;
  }

  .gallery-caption {
    margin-bottom: 1.25rem;
    color: var(--global-text-color-light);
  }

  @media (max-width: 767px) {
    .gallery-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-auto-rows: 120px;
      gap: 8px;
    }

    .gallery-tile,
    .gallery-tile.wide,
    .gallery-tile.tall,
    .gallery-tile.feature {
      grid-column: span 1;
      grid-row: span 2;
    }

    .gallery-tile.wide,
    .gallery-tile.feature {
      grid-column: span 2;
    }
  }
---

{% for collection in site.data.gallery.collections %}
  <section class="gallery-collection">
    <h2>{{ collection.title }}</h2>
    {% if collection.caption %}
      <p class="gallery-caption">{{ collection.caption }}</p>
    {% endif %}

    <div class="pswp-gallery gallery-grid" id="lab-gallery-{{ forloop.index }}">
      {% for photo in collection.photos %}
        <a class="gallery-tile {{ photo.layout }}"
           href="{{ '/assets/img/gallery/' | append: photo.file | relative_url }}"
           data-pswp-width="{{ photo.width }}"
           data-pswp-height="{{ photo.height }}">
          <img src="{{ '/assets/img/gallery/' | append: photo.file | relative_url }}"
               alt="{{ photo.alt }}"
               loading="lazy">
        </a>
      {% endfor %}
    </div>
  </section>
{% endfor %}

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const tiles = document.querySelectorAll(".gallery-tile");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      return;
    }

    tiles.forEach((tile) => tile.classList.add("reveal-ready"));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    }, { threshold: 0.12 });

    tiles.forEach((tile) => observer.observe(tile));
  });
</script>