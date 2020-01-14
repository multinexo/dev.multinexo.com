---
resource: physicalpos
permalink: /docs/0.0.23/resources/physicalpos/
version: 0.0.23
singular: resource
section: Cashier
partOf: company
attributes:
  -
    name: number
    crud: 'create, read, update'
    filter: StringFilter
    required: true
    value_type: integer
  -
    name: enabled
    crud: 'create, read, update'
    filter: StringFilter
    value_type: boolean
  -
    name: alias
    crud: 'create, read, update'
    filter: LikeFilter
  -
    name: mercadopago_qr_url
    crud: read
  -
    name: mercadopago_qr_pdf
    crud: read
relationships:
  -
    resource: cashier_balances
    alias: cashier_balances
    crud: read

---
