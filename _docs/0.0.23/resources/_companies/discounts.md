---
resource: discounts
permalink: /docs/0.0.23/resources/discounts/
version: 0.0.23
singular: resource
section: Companies
partOf: guest
attributes:
  -
    name: months
    crud: 'create, read, update'
    required: true
    value_type: integer
  -
    name: percent
    crud: 'create, read, update'
    required: true
    value_type: numeric
relationships: {  }

---
