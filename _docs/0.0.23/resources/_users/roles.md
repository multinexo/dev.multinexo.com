---
resource: roles
permalink: /docs/0.0.23/resources/roles/
version: 0.0.23
singular: resource
section: Users
partOf: company
attributes:
  -
    name: deleted
    crud: read
    filter: DeletedFilter
    sortable: 'true'
  -
    name: name
    crud: 'create, read, update'
    filter: StringFilter
    sortable: 'true'
    required: true
    value_type: string
  -
    name: is_admin
    crud: read
    sortable: 'true'
  -
    name: description
    crud: 'create, read, update'
    value_type: string
relationships:
  -
    resource: users
    alias: users
    crud: 'create, read, update'
  -
    resource: permissions
    alias: permissions
    crud: 'create, read, update'

---
