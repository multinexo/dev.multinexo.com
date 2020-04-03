---
resource: product_products
permalink: /docs/0.0.23/resources/product_products/
version: 0.0.23
singular: resource
section: Products
partOf: company
attributes:
  -
    name: parent_product_id
    crud: 'create, read'
    sortable: 'true'
  -
    name: product_id
    crud: 'create, read'
    sortable: 'true'
  -
    name: qty
    crud: 'create, read, update'
  -
    name: product_name
    crud: 'create, read, update'
relationships:
  -
    resource: parent
    alias: parent
    crud: 'create, read, update'
  -
    resource: child
    alias: child
    crud: 'create, read, update'

---
