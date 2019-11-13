---
version: 0.0.23
resource: no_fiscal_documents
permalink: /docs/0.0.23/resources/no_fiscal_documents/
singular: resource
section: Documents
partOf: company
attributes:
  -
    name: receipt_number
    crud: 'create, read, update'
    rules:
      - nullable
      - 'digits_between:0,8'
    value_type: integer
  -
    name: receipt_volume
    crud: 'create, read, update'
    rules:
      - nullable
      - 'digits_between:0,4'
    value_type: integer
  -
    name: emission_date
    crud: 'create, read, update'
  -
    name: observation
    crud: 'create, read, update'
  -
    name: status
    crud: 'create, read, update'
    required: true
    value_type: 'in [draft, failed, queued, confirmed]'
relationships:
  -
    resource: currency
    alias: currency
    crud: 'create, read, update'
  -
    resource: physicalpos
    alias: physicalpos
    crud: 'create, read, update'
  -
    resource: entity
    alias: entity
    crud: 'create, read, update'
  -
    resource: receipt
    alias: receipt
    crud: 'create, read, update'

---
