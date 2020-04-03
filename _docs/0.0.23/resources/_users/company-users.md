---
resource: company_users
permalink: /docs/0.0.23/resources/company_users/
version: 0.0.23
singular: resource
section: Users
partOf: company
attributes:
  -
    name: email
    crud: 'create, read'
    sortable: 'true'
    rules:
      - email
  -
    name: invitation_status
    crud: read
    sortable: 'true'
    required: true
    value_type: 'enum (pending, accepted, rejected)'
  -
    name: company_id
    crud: 'create, read, update'
  -
    name: deleted
    crud: 'create, read, update'
    filter: DeletedFilter
    sortable: 'true'
relationships:
  -
    resource: permissions
    alias: permissions
    crud: read
  -
    resource: roles
    alias: roles
    crud: 'create, read, update'
  -
    resource: user
    alias: user
    crud: 'create, read, update'
  -
    resource: entity
    alias: entity
    crud: 'create, read, update'
  -
    resource: user_register_schema
    alias: user_register_schema
    crud: ''

---
