---
version: 0.0.23
resource: pricelist_products
permalink: /docs/0.0.23/resources/pricelist_products/
singular: resource
section: Products
partOf: company
attributes:
  -
    name: pricelist_id
    crud: 'create, read, update'
    required: true
    value_type: integer
  -
    name: fortype
    crud: 'create, read, update'
  -
    name: client_value_number
    crud: 'create, read, update'
  -
    name: client_value_type
    crud: 'create, read, update'
  -
    name: client_price
    crud: read
  -
    name: client_net_price
    crud: read
  -
    name: subdist_value_number
    crud: 'create, read, update'
  -
    name: subdist_value_type
    crud: 'create, read, update'
  -
    name: subdist_price
    crud: read
  -
    name: prevent_value_number
    crud: 'create, read, update'
  -
    name: prevent_value_type
    crud: 'create, read, update'
  -
    name: prevent_price
    crud: read
relationships:
  -
    resource: product
    alias: product
    crud: 'create, read, update'
  -
    resource: pricelist
    alias: pricelist
    crud: 'create, read, update'

---
