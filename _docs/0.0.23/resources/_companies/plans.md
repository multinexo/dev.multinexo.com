---
version: 0.0.23
resource: plans
permalink: /docs/0.0.23/resources/plans/
singular: resource
section: Companies
partOf: guest
attributes:
  -
    name: name
    crud: 'create, read, update'
    required: true
  -
    name: key
    crud: 'create, read, update'
    required: true
  -
    name: amount
    crud: 'create, read, update'
    required: true
    value_type: numeric
  -
    name: limit
    crud: 'create, read, update'
    required: true
    value_type: numeric
  -
    name: price_per_document
    crud: 'create, read, update'
    value_type: numeric
relationships:
  -
    resource: company_payments
    alias: company_payments
    crud: 'create, read, update'

---
