---
version: 0.0.23
resource: permissions
permalink: /docs/0.0.23/resources/permissions/
singular: resource
section: Users
partOf: guest
attributes:
  -
    name: name
    crud: 'create, read, update'
    required: true
    value_type: string
    rules:
      - 'max:96'
relationships:
  -
    resource: permission_group
    alias: permission_group
    crud: 'create, read, update'

---
