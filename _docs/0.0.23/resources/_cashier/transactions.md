---
resource: transactions
version: 0.0.23
permalink: /docs/0.0.23/resources/transactions/
singular: resource
section: Cashier
partOf: company
attributes:
  -
    name: due_date
    crud: 'create, read'
    rules:
      - nullable
      - iso_date
  -
    name: amount
    crud: 'create, read'
    required: true
    value_type: numeric
  -
    name: current_balance
    crud: read
    value_type: numeric
  -
    name: observations
    crud: 'create, read, update'
  -
    name: created_at
    crud: read
  -
    name: pdf_url
    crud: read
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
