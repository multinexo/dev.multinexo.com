---
version: 0.0.23
resource: cost_reports
permalink: /docs/0.0.23/resources/cost_reports/
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
relationships: {  }

---