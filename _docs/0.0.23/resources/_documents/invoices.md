---
resource: invoices
permalink: /docs/0.0.23/resources/invoices/
version: 0.0.23
singular: resource
section: Documents
partOf: company
attributes:
  -
    name: net
    crud: 'create, read, update'
    value_type: numeric
  -
    name: total
    crud: 'create, read, update'
    value_type: numeric
  -
    name: observation
    crud: 'create, read, update'
  -
    name: discount_percent
    crud: 'create, read, update'
    value_type: numeric
  -
    name: discount_amount
    crud: read
    value_type: numeric
  -
    name: show_amounts
    crud: 'create, read, update'
    required: true
    value_type: boolean
  -
    name: pdf_url
    crud: read
  -
    name: canceled
    crud: 'create, read, update'
  -
    name: fiscal_observation
    crud: 'create, read, update'
  -
    name: cae
    crud: read
  -
    name: cae_expiration_date
    crud: read
  -
    name: section
    crud: 'create, read, update'
    filter: EnumFilter
    required: true
    value_type: 'in [sales, purchases]'
  -
    name: receipt_type
    crud: 'create, read, update'
    filter: EnumFilter
    required: true
    value_type: 'in [invoice, credit, debit]'
  -
    name: letter
    crud: 'create, read, update'
    filter: LetterFilter
  -
    name: receipt_volume
    crud: 'create, read, update'
    filter: NumberFilter
    rules:
      - nullable
      - 'digits_between:0,4'
    value_type: integer
  -
    name: receipt_number
    crud: 'create, read, update'
    filter: NumberFilter
    rules:
      - nullable
      - 'digits_between:0,8'
    value_type: integer
  -
    name: status
    crud: 'create, read, update'
    filter: EnumFilter
    required: true
    value_type: 'in [draft, failed, queued, confirmed]'
  -
    name: emission_date
    crud: 'create, read, update'
    filter: EmissionDateFilter
relationships:
  -
    resource: currency
    alias: currency
    crud: read
  -
    resource: entity
    alias: entity
    crud: read
  -
    resource: fiscalpos
    alias: fiscalpos
    crud: read
  -
    resource: physicalpos
    alias: physicalpos
    crud: read
  -
    resource: seller
    alias: seller
    crud: read
  -
    resource: receipt
    alias: receipt
    crud: read
  -
    resource: cashier_entries
    alias: cashier_entries
    crud: read
  -
    resource: details
    alias: details
    crud: read
  -
    resource: orders
    alias: orders
    crud: read
  -
    resource: invoices
    alias: invoices
    crud: read
  -
    resource: quotations
    alias: quotations
    crud: read

---
