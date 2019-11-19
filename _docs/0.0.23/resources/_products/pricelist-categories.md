---
resource: pricelist_categories
permalink: /docs/0.0.23/resources/pricelist_categories/
version: 0.0.23
singular: resource
section: Products
partOf: company
attributes:
  -
    name: client_value_number
    crud: 'create, read, update'
  -
    name: client_value_type
    crud: 'create, read, update'
  -
    name: subdist_value_number
    crud: 'create, read, update'
  -
    name: subdist_value_type
    crud: 'create, read, update'
  -
    name: prevent_value_number
    crud: 'create, read, update'
  -
    name: prevent_value_type
    crud: 'create, read, update'
  -
    name: pricelist_id
    crud: 'create, read, update'
  -
    name: created_at
    crud: read
  -
    name: updated_at
    crud: read
relationships:
  -
    resource: category
    alias: category
    crud: 'create, read, update'
  -
    resource: pricelist
    alias: pricelist
    crud: 'create, read, update'

---
