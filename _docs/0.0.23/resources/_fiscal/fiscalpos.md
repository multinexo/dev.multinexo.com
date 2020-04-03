---
resource: fiscalpos
permalink: /docs/0.0.23/resources/fiscalpos/
version: 0.0.23
singular: resource
section: Fiscal
partOf: company
attributes:
  -
    name: number
    crud: 'create, read, update'
    filter: StringFilter
    sortable: 'true'
    required: true
    rules:
      - 'max:4'
  -
    name: pos_type
    crud: 'create, read, update'
    filter: EnumFilter
    sortable: 'true'
    required: true
    value_type: 'enum (manual_a, manual_b, manual_c, manual_e, fiscal_printer, electronic)'
  -
    name: enabled
    crud: 'create, read, update'
    filter: EnumFilter
    sortable: 'true'
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
