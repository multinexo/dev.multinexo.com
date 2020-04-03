---
resource: quotations
permalink: /docs/0.0.23/resources/quotations/
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
    name: show_amounts
    crud: 'create, read, update'
    required: true
    value_type: boolean
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
    name: pdf_url
    crud: read
    sortable: 'true'
  -
    name: letter
    crud: read
    sortable: 'true'
  -
    name: receipt_type
    crud: 'create, read, update'
    required: true
    value_type: 'enum (quotation)'
  -
    name: section
    crud: 'create, read, update'
    filter: EnumFilter
    sortable: 'true'
    required: true
    value_type: 'enum (sales, purchases)'
  -
    name: status
    crud: 'create, read, update'
    filter: EnumFilter
    sortable: 'true'
    required: true
    value_type: 'enum (confirmed, draft)'
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
    name: emission_date
    crud: read
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
    resource: seller
    alias: seller
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
    resource: details
    alias: details
    crud: 'create, read, update'

---
