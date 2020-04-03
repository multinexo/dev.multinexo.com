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
    sortable: 'true'
  -
    name: current_stock_qty
    crud: 'create, read'
    sortable: 'true'
  -
    name: unit_price
    crud: 'create, read'
    sortable: 'true'
  -
    name: total_price
    crud: 'create, read'
    sortable: 'true'
  -
    name: total
    crud: 'create, read'
    sortable: 'true'
  -
    name: created_at
    crud: read
    sortable: 'true'
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
