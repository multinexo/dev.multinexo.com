---
resource: cost_reports
permalink: /docs/0.0.23/resources/cost_reports/
version: 0.0.23
singular: resource
section: Funds
partOf: company
attributes:
  -
    name: from
    crud: 'create, read, update'
    filter: DateFilter
    sortable: 'true'
    rules:
      - iso_date
    required: true
  -
    name: to
    crud: 'create, read, update'
    filter: DateFilter
    sortable: 'true'
    rules:
      - iso_date
    required: true
  -
    name: total
    crud: read
    sortable: 'true'
    value_type: numeric
  -
    name: pdf_url
    crud: read
    sortable: 'true'
relationships: {  }

---
