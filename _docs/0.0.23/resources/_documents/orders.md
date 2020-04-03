---
resource: orders
permalink: /docs/0.0.23/resources/orders/
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
    name: status
    crud: 'create, read, update'
    filter: EnumFilter
    sortable: 'true'
    required: true
    value_type: 'enum (confirmed, draft)'
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
    value_type: 'enum (order_sell, order_buy)'
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
    crud: 'create, read, update'
    filter: EmissionDateFilter
    sortable: 'true'
  -
    name: has_costs
    crud: read
    filter: HasCostsFilter
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
    resource: physicalpos
    alias: physicalpos
    crud: 'create, read, update'
  -
    resource: details
    alias: details
    crud: 'create, read, update'
  -
    resource: invoices
    alias: invoices
    crud: read
  -
    resource: quotations
    alias: quotations
    crud: read
  -
    resource: orders
    alias: orders
    crud: read
  -
    resource: cashier_entries
    alias: cashier_entries
    crud: 'create, read, update'
  -
    resource: costs
    alias: costs
    crud: 'create, update'
  -
    resource: seller
    alias: seller
    crud: 'create, read, update'

---
