---
resource: cost_assignation_percents
permalink: /docs/0.0.23/resources/cost_assignation_percents/
version: 0.0.23
singular: resource
section: Funds
partOf: company
attributes:
  -
    name: percent
    crud: 'create, read, update'
    sortable: 'true'
    required: true
relationships:
  -
    resource: cost_center
    alias: cost_center
    crud: 'create, read, update'
  -
    resource: cost_assignation_strategy
    alias: cost_assignation_strategy
    crud: 'create, read, update'

---
