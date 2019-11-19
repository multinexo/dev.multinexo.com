---
resource: costs
version: 0.0.23
permalink: /docs/0.0.23/resources/costs/
singular: resource
section: Funds
partOf: company
attributes:
  -
    name: percent
    crud: 'create, read, update'
    sortable: 'true'
    required: true
  -
    name: name
    crud: 'create, read, update'
    filter: LikeFilter
    sortable: 'true'
    required: true
  -
    name: description
    crud: 'create, read, update'
  -
    name: deleted
    crud: 'create, read, update'
    filter: DeletedFilter
  -
    name: parent_id
    crud: read
    filter: StringFilter
  -
    name: from
    crud: 'create, read, update'
    filter: DateFilter
    rules:
      - iso_date
    required: true
  -
    name: to
    crud: 'create, read, update'
    filter: DateFilter
    rules:
      - iso_date
    required: true
  -
    name: total
    crud: read
    value_type: numeric
  -
    name: pdf_url
    crud: read
  -
    name: amount
    crud: 'create, read, update'
    value_type: numeric
    required: true
relationships:
  -
    resource: cost_center
    alias: cost_center
    crud: 'create, read, update'
  -
    resource: document
    alias: document
    crud: 'create, read, update'

---
