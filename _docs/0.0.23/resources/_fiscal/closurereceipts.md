---
resource: closurereceipts
version: 0.0.23
permalink: /docs/0.0.23/resources/closurereceipts/
singular: resource
section: Fiscal
partOf: company
attributes:
  -
    name: receipt_volume
    crud: 'create, read, update'
    required: true
    rules:
      - 'max:4'
  -
    name: receipt_number
    crud: 'create, read, update'
    required: true
    rules:
      - 'max:8'
  -
    name: sales_total
    crud: 'create, read, update'
    required: true
    value_type: numeric
  -
    name: sales_tax
    crud: 'create, read, update'
    required: true
    value_type: numeric
  -
    name: sales_last_a
    crud: 'create, read, update'
    required: true
    rules:
      - 'max:8'
  -
    name: sales_last_bc
    crud: 'create, read, update'
    required: true
    rules:
      - 'max:8'
  -
    name: credit_total
    crud: 'create, read, update'
    required: true
    value_type: numeric
  -
    name: credit_tax
    crud: 'create, read, update'
    required: true
    value_type: numeric
  -
    name: credit_last_a
    crud: 'create, read, update'
    required: true
    rules:
      - 'max:8'
  -
    name: credit_last_bc
    crud: 'create, read, update'
    required: true
    rules:
      - 'max:8'
  -
    name: sales_documents
    crud: 'create, read, update'
    required: true
  -
    name: credit_documents
    crud: 'create, read, update'
    required: true
  -
    name: standard_no_fiscal_documents
    crud: 'create, read, update'
    required: true
  -
    name: no_fiscal_documents
    crud: 'create, read, update'
    required: true
  -
    name: canceled_qty
    crud: 'create, read, update'
    required: true
  -
    name: blocks_qty
    crud: 'create, read, update'
    required: true
  -
    name: letter
    crud: 'create, read, update'
  -
    name: fiscal_blocked
    crud: 'create, read, update'
  -
    name: fiscal_observation
    crud: 'create, read, update'
  -
    name: emission_date
    crud: 'create, read, update'
    filter: EmissionDateFilter
relationships:
  -
    resource: document
    alias: document
    crud: 'create, read, update'

---
