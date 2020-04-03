---
resource: costs
permalink: /docs/0.0.23/resources/costs/
version: 0.0.23
singular: resource
section: Funds
partOf: company
attributes:
  -
    name: description
    crud: 'create, read, update'
  -
    name: amount
    crud: 'create, read, update'
    value_type: numeric
    required: true
relationships:
  -
    resource: cost_center
    alias: cost_center
    crud: 'create, read, update'
  -
    resource: document
    alias: document
    crud: 'create, read, update'

---
