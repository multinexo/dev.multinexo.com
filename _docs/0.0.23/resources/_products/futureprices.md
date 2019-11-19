---
resource: futureprices
permalink: /docs/0.0.23/resources/futureprices/
version: 0.0.23
singular: resource
section: Products
partOf: company
attributes:
  -
    name: replacement_cost
    crud: 'create, read, update'
    required: true
    value_type: numeric
  -
    name: fortype
    crud: 'create, read, update'
    required: true
    value_type: 'in [cost, promotion, auto]'
  -
    name: date_from
    crud: 'create, read, update'
    rules:
      - iso_date
    required: true
  -
    name: date_to
    crud: 'create, read, update'
  -
    name: stock_end
    crud: 'create, read, update'
  -
    name: sold_units
    crud: 'create, read, update'
  -
    name: activated
    crud: read
relationships:
  -
    resource: product
    alias: product
    crud: 'create, read, update'
  -
    resource: pricelist_products
    alias: pricelist_products
    crud: 'create, read, update'

---
