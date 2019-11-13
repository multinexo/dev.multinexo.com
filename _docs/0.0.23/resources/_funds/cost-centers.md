---
version: 0.0.23
resource: cost_centers
permalink: /docs/0.0.23/resources/cost_centers/
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
relationships:
  -
    resource: cost_assignation_strategy
    alias: cost_assignation_strategy
    crud: 'create, read, update'
  -
    resource: costs
    alias: costs
    crud: 'create, read, update'
  -
    resource: cost_center_parent
    alias: cost_center_parent
    crud: 'create, read, update'
  -
    resource: cost_center_children
    alias: cost_center_children
    crud: 'create, read, update'

---
