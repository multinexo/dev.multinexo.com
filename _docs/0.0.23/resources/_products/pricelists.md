---
resource: pricelists
permalink: /docs/0.0.23/resources/pricelists/
version: 0.0.23
singular: resource
section: Products
partOf: company
attributes:
  -
    name: name
    crud: 'create, read, update'
    required: true
    rules:
      - 'max:96'
  -
    name: company_id
    crud: 'create, read, update'
    required: true
    value_type: integer
  -
    name: client_percent
    crud: 'create, read, update'
    rules:
      - pricelist_percent
  -
    name: subdist_percent
    crud: 'create, read, update'
    rules:
      - pricelist_percent
  -
    name: prevent_percent
    crud: 'create, read, update'
    rules:
      - pricelist_percent
  -
    name: deleted
    crud: 'create, read, update'
    filter: DeletedFilter
    sortable: 'true'
relationships:
  -
    resource: entities
    alias: entities
    crud: read
  -
    resource: pricelist_products
    alias: pricelist_products
    crud: 'create, read, update'

---
