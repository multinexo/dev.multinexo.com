---
resource: cost_assignation_strategies
permalink: /docs/0.0.23/resources/cost_assignation_strategies/
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
  -
    name: name
    crud: 'create, read, update'
    filter: LikeFilter
    required: true
  -
    name: description
    crud: 'create, read, update'
relationships:
  -
    resource: cost_assignation_percents
    alias: cost_assignation_percents
    crud: 'create, read, update'

---
