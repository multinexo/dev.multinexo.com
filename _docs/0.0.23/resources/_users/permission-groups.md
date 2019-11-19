---
resource: permission_groups
permalink: /docs/0.0.23/resources/permission_groups/
version: 0.0.23
singular: resource
section: Users
partOf: guest
attributes:
  -
    name: name
    crud: 'create, read, update'
    required: true
    rules:
      - 'unique:permission_groups'
      - 'max:255'
  -
    name: slug
    crud: 'create, read, update'
  -
    name: description
    crud: 'create, read, update'
relationships:
  -
    resource: permissions
    alias: permissions
    crud: 'create, read'

---
