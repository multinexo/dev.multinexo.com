---
resource: publications
version: 0.0.23
permalink: /docs/0.0.23/resources/publications/
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
    crud: 'create, read, update'
  -
    name: item_last_update
    crud: 'create, read, update'
  -
    name: item_status
    crud: 'create, read, update'
  -
    name: observations
    crud: 'create, read, update'
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

---
