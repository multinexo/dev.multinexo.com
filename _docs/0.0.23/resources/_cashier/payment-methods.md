---
resource: payment_methods
permalink: /docs/0.0.23/resources/payment_methods/
version: 0.0.23
singular: resource
section: Cashier
partOf: company
attributes:
  -
    name: name
    crud: 'create, read, update'
    filter: StringFilter
    sortable: 'true'
    required: true
  -
    name: behavior
    crud: 'create, read, update'
    filter: EnumFilter
    sortable: 'true'
    required: true
    value_type: 'enum (cash, cash_adjustment, stock_adjustment, current_account, check, card, other, difference, mercado_pago)'
  -
    name: enabled
    crud: 'create, read, update'
    filter: BooleanFilter
    sortable: 'true'
    value_type: boolean
relationships:
  -
    resource: currency
    alias: currency
    crud: 'create, read, update'

---
