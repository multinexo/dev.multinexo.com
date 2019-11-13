---
version: 0.0.23
resource: details
permalink: /docs/0.0.23/resources/details/
singular: resource
section: Documents
partOf: company
attributes:
  -
    name: qty
    crud: 'create, read, update'
    required: true
    value_type: numeric
    rules:
      - 'min:0.0001'
  -
    name: product_name
    crud: 'create, read, update'
  -
    name: cost
    crud: 'create, read, update'
    required: true
    value_type: numeric
  -
    name: net
    crud: 'create, read, update'
    rules:
      - 'required_without_all:price'
    value_type: numeric
  -
    name: price
    crud: 'create, read, update'
    rules:
      - 'required_without_all:net'
    value_type: numeric
  -
    name: commission
    crud: 'create, read, update'
    value_type: numeric
  -
    name: document_id
    crud: 'create, read, update'
    value_type: numeric
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
