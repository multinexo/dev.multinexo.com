---
resource: cost_centers
permalink: /docs/0.0.23/resources/cost_centers/
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
  -
    name: deleted
    crud: 'create, read, update'
    filter: DeletedFilter
    sortable: 'true'
  -
    name: parent_id
    crud: read
    filter: StringFilter
    sortable: 'true'
relationships:
  -
    resource: cost_assignation_strategy
    alias: cost_assignation_strategy
    crud: 'create, read'
  -
    resource: costs
    alias: costs
    crud: read
  -
    resource: cost_center_parent
    alias: cost_center_parent
    crud: 'create, read, update'
  -
    resource: cost_center_children
    alias: cost_center_children
    crud: 'create, read, update'

---
