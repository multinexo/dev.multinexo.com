---
resource: details
permalink: /docs/0.0.23/resources/details/
version: 0.0.23
singular: resource
section: Documents
partOf: company
attributes:
  -
    name: qty
    crud: 'create, read, update'
  -
    name: product_name
    crud: 'create, read, update'
  -
    name: cost
    crud: 'create, read, update'
  -
    name: net
    crud: 'create, read, update'
  -
    name: price
    crud: 'create, read, update'
  -
    name: commission
    crud: 'create, read, update'
  -
    name: document_id
    crud: 'create, read, update'
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
