---
resource: inventories
permalink: /docs/0.0.23/resources/inventories/
version: 0.0.23
singular: resource
section: Products
partOf: company
attributes:
  -
    name: qty
    crud: 'create, read'
  -
    name: current_stock_qty
    crud: 'create, read'
  -
    name: unit_price
    crud: 'create, read'
  -
    name: total_price
    crud: 'create, read'
  -
    name: total
    crud: 'create, read'
  -
    name: created_at
    crud: read
relationships:
  -
    resource: product
    alias: product
    crud: 'create, read, update'
  -
    resource: document
    alias: document
    crud: 'create, read, update'

---
