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
    sortable: 'true'
    value_type: numeric
  -
    name: show_amounts
    crud: 'create, read, update'
    required: true
    value_type: boolean
  -
    name: pdf_url
    crud: read
    sortable: 'true'
  -
    name: canceled
    crud: 'create, read, update'
  -
    name: fiscal_observation
    crud: 'create, read, update'
  -
    name: cae
    crud: read
    sortable: 'true'
  -
    name: cae_expiration_date
    crud: read
    sortable: 'true'
  -
    name: section
    crud: 'create, read, update'
    filter: EnumFilter
    sortable: 'true'
    required: true
    value_type: 'enum (sales, purchases)'
  -
    name: receipt_type
    crud: 'create, read, update'
    filter: EnumFilter
    sortable: 'true'
    required: true
    value_type: 'enum (invoice, credit, debit)'
  -
    name: letter
    crud: 'create, read, update'
    filter: LetterFilter
    sortable: 'true'
  -
    name: receipt_volume
    crud: 'create, read, update'
    filter: NumberFilter
    sortable: 'true'
    rules:
      - nullable
      - 'digits_between:0,4'
    value_type: integer
  -
    name: receipt_number
    crud: 'create, read, update'
    filter: NumberFilter
    sortable: 'true'
    rules:
      - nullable
      - 'digits_between:0,8'
    value_type: integer
  -
    name: status
    crud: 'create, read, update'
    filter: EnumFilter
    sortable: 'true'
    required: true
    value_type: 'enum (draft, failed, queued, confirmed)'
  -
    name: emission_date
    crud: 'create, read, update'
    filter: EmissionDateFilter
    sortable: 'true'
relationships:
  -
    resource: currency
    alias: currency
    crud: 'create, read, update'
  -
    resource: entity
    alias: entity
    crud: 'create, read, update'
  -
    resource: fiscalpos
    alias: fiscalpos
    crud: 'create, read, update'
  -
    resource: physicalpos
    alias: physicalpos
    crud: 'create, read, update'
  -
    resource: seller
    alias: seller
    crud: 'create, read, update'
  -
    resource: receipt
    alias: receipt
    crud: 'create, read, update'
  -
    resource: cashier_entries
    alias: cashier_entries
    crud: 'create, read, update'
  -
    resource: details
    alias: details
    crud: 'create, read, update'
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
