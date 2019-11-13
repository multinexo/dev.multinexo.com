---
version: 0.0.23
resource: quotations
permalink: /docs/0.0.23/resources/quotations/
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
    value_type: numeric
  -
    name: pdf_url
    crud: read
  -
    name: letter
    crud: read
  -
    name: receipt_type
    crud: 'create, read, update'
    required: true
    value_type: 'in [quotation]'
  -
    name: section
    crud: 'create, read, update'
    filter: EnumFilter
    required: true
    value_type: 'in [sales, purchases]'
  -
    name: status
    crud: 'create, read, update'
    filter: EnumFilter
    required: true
    value_type: 'in [confirmed, draft]'
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
    name: emission_date
    crud: read
    filter: EmissionDateFilter
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
    crud: 'create, read, update'
  -
    resource: orders
    alias: orders
    crud: 'create, read, update'
  -
    resource: invoices
    alias: invoices
    crud: 'create, read, update'
  -
    resource: details
    alias: details
    crud: 'create, read, update'

---
