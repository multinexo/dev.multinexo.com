---
resource: cashier_entries
permalink: /docs/0.0.23/resources/cashier_entries/
version: 0.0.23
singular: resource
section: Cashier
partOf: company
attributes:
  -
    name: amount
    crud: 'create, read, update'
    required: true
    value_type: numeric
relationships:
  -
    resource: author
    alias: author
    crud: 'create, read, update'
  -
    resource: physicalpos
    alias: physicalpos
    crud: 'create, read, update'
  -
    resource: payment_method
    alias: payment_method
    crud: 'create, read, update'

---
