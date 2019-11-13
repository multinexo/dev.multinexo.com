---
version: 0.0.23
resource: cashier_balances
permalink: /docs/0.0.23/resources/cashier_balances/
singular: resource
section: Cashier
partOf: company
attributes:
  -
    name: balance_amount
    crud: read
  -
    name: pdf_url
    crud: read
  -
    name: from
    crud: read
    filter: DateFilter
  -
    name: to
    crud: 'create, read, update'
    filter: DateFilter
    required: true
    rules:
      - iso_date
  -
    name: report_type
    crud: 'create, read, update'
    filter: EnumFilter
    required: true
    value_type: 'in [confirmed, draft]'
  -
    name: physicalpos_id
    crud: read
    filter: StringFilter
    required: true
    value_type: integer
  -
    name: date
    crud: read
    filter: CashierBalanceFilter
relationships:
  -
    resource: cashier_balance_details
    alias: cashier_balance_details
    crud: 'create, read, update'
  -
    resource: cashier_balance_current_accounts
    alias: cashier_balance_current_accounts
    crud: 'create, read, update'
  -
    resource: physicalpos
    alias: physicalpos
    crud: 'create, read, update'

---
