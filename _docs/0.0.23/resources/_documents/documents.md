---
resource: documents
version: 0.0.23
permalink: /docs/0.0.23/resources/documents/
singular: resource
section: Documents
partOf: company
attributes:
  -
    name: cae
    crud: 'create, read, update'
  -
    name: cae_expiration_date
    crud: 'create, read, update'
  -
    name: net
    crud: 'create, read, update'
    value_type: numeric
  -
    name: total
    crud: 'create, read, update'
    value_type: numeric
  -
    name: emission_date
    crud: 'create, read, update'
    filter: EmissionDateFilter
  -
    name: observation
    crud: 'create, read, update'
  -
    name: discount_percent
    crud: 'create, read, update'
    value_type: numeric
  -
    name: discount_amount
    crud: 'create, read, update'
    value_type: numeric
  -
    name: pdf_url
    crud: 'create, read, update'
  -
    name: canceled
    crud: 'create, read, update'
  -
    name: fiscal_observation
    crud: 'create, read, update'
  -
    name: show_amounts
    crud: 'create, read, update'
    required: true
    value_type: boolean
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
    value_type: 'in [invoice, credit, debit, order_sell, order_buy, no_fiscal, quotation, zeta]'
  -
    name: status
    crud: 'create, read, update'
    filter: EnumFilter
    required: true
    value_type: 'in [draft, failed, queued, confirmed]'
  -
    name: letter
    crud: read
    filter: LetterFilter
  -
    name: receipt_volume
    crud: 'create, read, update'
    filter: StringFilter
    rules:
      - nullable
      - 'digits_between:0,4'
    value_type: integer
  -
    name: receipt_number
    crud: 'create, read, update'
    filter: StringFilter
    rules:
      - nullable
      - 'digits_between:0,8'
    value_type: integer
relationships:
  -
    resource: details
    alias: details
    crud: 'create, read, update'
  -
    resource: currency
    alias: currency
    crud: 'create, read, update'
  -
    resource: entity
    alias: entity
    crud: 'create, read, update'
  -
    resource: physicalpos
    alias: physicalpos
    crud: 'create, read, update'
  -
    resource: closureReceipt
    alias: closureReceipt
    crud: 'create, read, update'
  -
    resource: cashier_entries
    alias: cashier_entries
    crud: 'create, read, update'
  -
    resource: receipt
    alias: receipt
    crud: 'create, read, update'
  -
    resource: documents
    alias: documents
    crud: 'create, read, update'
  -
    resource: seller
    alias: seller
    crud: 'create, read, update'

---
