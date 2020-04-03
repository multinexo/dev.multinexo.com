---
resource: currencies
permalink: /docs/0.0.23/resources/currencies/
version: 0.0.23
singular: resource
section: Shared
partOf: company
attributes:
  -
    name: name
    crud: 'create, read, update'
    sortable: 'true'
  -
    name: code_iso
    crud: 'create, read, update'
    filter: StringFilter
    sortable: 'true'
  -
    name: code_afip
    crud: 'create, read, update'
    filter: StringFilter
    sortable: 'true'
  -
    name: symbol
    crud: 'create, read, update'
    sortable: 'true'
  -
    name: quotation_usd
    crud: 'create, read, update'
relationships: {  }

---
