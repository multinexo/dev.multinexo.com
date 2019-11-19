---
resource: fiscalpos
version: 0.0.23
permalink: /docs/0.0.23/resources/fiscalpos/
singular: resource
section: Fiscal
partOf: company
attributes:
  -
    name: number
    crud: 'create, read, update'
    filter: StringFilter
    required: true
    rules:
      - 'max:4'
  -
    name: pos_type
    crud: 'create, read, update'
    filter: EnumFilter
    required: true
    value_type: 'in [manual_a, manual_b, manual_c, manual_e, fiscal_printer, electronic]'
  -
    name: status
    crud: 'create, read, update'
    filter: EnumFilter
  -
    name: fiscaltoken
    crud: 'create, read, update'
  -
    name: max_items_per_invoice
    crud: 'create, read, update'
    value_type: numeric
  -
    name: max_amount_per_invoice
    crud: 'create, read, update'
    value_type: numeric
relationships: {  }

---
