---
resource: orders
version: 0.0.23
permalink: /docs/0.0.23/resources/orders/
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
    name: status
    crud: 'create, read, update'
    filter: EnumFilter
    required: true
    value_type: 'in [confirmed, draft]'
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
    value_type: 'in [order_sell, order_buy]'
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
    crud: 'create, read, update'
    filter: EmissionDateFilter
  -
    name: has_costs
    crud: read
    filter: HasCostsFilter
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
    resource: physicalpos
    alias: physicalpos
    crud: read
  -
    resource: details
    alias: details
    crud: read
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
    crud: read
  -
    resource: costs
    alias: costs
    crud: read
  -
    resource: seller
    alias: seller
    crud: read

---
