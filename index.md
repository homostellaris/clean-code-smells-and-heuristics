---
layout: homepage
---
{% include_relative intro.md %}

{% for collection in site.collections %}
{% unless collection.label == 'posts' %}
# {{ collection.label | capitalize }}
{% for doc in collection.docs %}
## [{{ doc.code }}: {{ doc.title }}]({{ doc.url | relative_url }})
{{ doc.content | markdownify }}
{% endfor %}
{% endunless %}
{% endfor %}
