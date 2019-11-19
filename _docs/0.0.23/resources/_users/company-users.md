---
resource: company_users
version: 0.0.23
permalink: /docs/0.0.23/resources/company_users/
singular: resource
section: Users
partOf: company
attributes:
  -
    name: email
    crud: 'create, read'
    rules:
      - email
  -
    name: invitation_status
    crud: read
    required: true
    value_type: 'in [pending, accepted, rejected]'
  -
    name: company_id
    crud: 'create, read, update'
  -
    name: deleted
    crud: 'create, read, update'
    filter: DeletedFilter
relationships:
  -
    resource: permissions
    alias: permissions
    crud: ''
  -
    resource: roles
    alias: roles
    crud: ''
  -
    resource: user
    alias: user
    crud: ''
  -
    resource: entity
    alias: entity
    crud: ''
  -
    resource: user_register_schema
    alias: user_register_schema
    crud: ''

---
