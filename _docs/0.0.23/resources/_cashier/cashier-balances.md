---
resource: cashier_balances
permalink: /docs/0.0.23/resources/cashier_balances/
version: 0.0.23
singular: resource
section: Cashier
partOf: company
attributes:
  -
    name: balance_amount
    crud: read
    sortable: 'true'
  -
    name: pdf_url
    crud: read
    sortable: 'true'
  -
    name: from
    crud: read
    filter: DateFilter
    sortable: 'true'
  -
    name: to
    crud: 'create, read, update'
    filter: DateFilter
    sortable: 'true'
    required: true
    rules:
      - iso_date
  -
    name: report_type
    crud: 'create, read, update'
    filter: EnumFilter
    sortable: 'true'
    required: true
    value_type: 'enum (confirmed, draft)'
  -
    name: physicalpos_id
    crud: read
    filter: StringFilter
    sortable: 'true'
    required: true
    value_type: integer
  -
    name: date
    crud: read
    filter: CashierBalanceFilter
    sortable: 'true'
relationships:
  -
    resource: cashier_balance_details
    alias: cashier_balance_details
    crud: read
  -
    resource: cashier_balance_current_accounts
    alias: cashier_balance_current_accounts
    crud: read
  -
    resource: physicalpos
    alias: physicalpos
    crud: 'create, read, update'

---
