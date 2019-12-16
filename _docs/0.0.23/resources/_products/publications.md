---
resource: publications
permalink: /docs/0.0.23/resources/publications/
version: 0.0.23
singular: resource
section: Products
partOf: company
attributes:
  -
    name: enabled
    crud: 'create, read, update'
  -
    name: item_price
    crud: 'create, read, update'
  -
    name: item_url
    crud: read
  -
    name: item_last_update
    crud: read
  -
    name: item_status
    crud: read
  -
    name: observations
    crud: read
relationships:
  -
    resource: product
    alias: product
    crud: 'create, read, update'
  -
    resource: publisher
    alias: publisher
    crud: 'create, read, update'
  -
    resource: mercadolibre_attributes
    alias: mercadolibre_attributes
    crud: 'create, read, update'
  -
    resource: publication_metas
    alias: publication_metas
    crud: 'create, read, update'

---
