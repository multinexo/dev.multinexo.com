---
version: 0.0.23
resource: publications
permalink: /docs/0.0.23/resources/publications/
singular: resource
section: Products
partOf: company
attributes:
  -
    name: percent
    crud: 'create, read, update'
    sortable: 'true'
    required: true
  -
    name: name
    crud: 'create, read, update'
    filter: LikeFilter
    sortable: 'true'
    required: true
  -
    name: description
    crud: 'create, read, update'
  -
    name: deleted
    crud: 'create, read, update'
    filter: DeletedFilter
  -
    name: parent_id
    crud: read
    filter: StringFilter
  -
    name: from
    crud: 'create, read, update'
    filter: DateFilter
    rules:
      - iso_date
    required: true
  -
    name: to
    crud: 'create, read, update'
    filter: DateFilter
    rules:
      - iso_date
    required: true
  -
    name: total
    crud: read
    value_type: numeric
  -
    name: pdf_url
    crud: read
  -
    name: amount
    crud: 'create, read, update'
    value_type: numeric
    required: true
  -
    name: product_id
    crud: 'create, read, update'
  -
    name: supplier_id
    crud: 'create, read, update'
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
