---
resource: cost_assignation_strategies
permalink: /docs/0.0.23/resources/cost_assignation_strategies/
version: 0.0.23
singular: resource
section: Funds
partOf: company
attributes:
  -
    name: name
    crud: 'create, read, update'
    filter: LikeFilter
    sortable: 'true'
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
