---
resource: transactions
permalink: /docs/0.0.23/resources/transactions/
version: 0.0.23
singular: resource
section: Cashier
partOf: company
attributes:
  -
    name: due_date
    crud: 'create, read'
    sortable: 'true'
    rules:
      - nullable
      - iso_date
  -
    name: amount
    crud: 'create, read'
    sortable: 'true'
    required: true
    value_type: numeric
  -
    name: current_balance
    crud: read
    sortable: 'true'
    value_type: numeric
  -
    name: observations
    crud: 'create, read, update'
  -
    name: created_at
    crud: read
    sortable: 'true'
  -
    name: pdf_url
    crud: read
    sortable: 'true'
relationships:
  -
    resource: documents
    alias: documents
    crud: 'create, read'
  -
    resource: entity
    alias: entity
    crud: 'create, read'
  -
    resource: currency
    alias: currency
    crud: 'create, read'
  -
    resource: cashier_entries
    alias: cashier_entries
    crud: 'create, read'

---
