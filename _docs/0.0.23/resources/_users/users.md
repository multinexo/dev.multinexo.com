---
resource: users
permalink: /docs/0.0.23/resources/users/
version: 0.0.23
singular: resource
section: Users
partOf: guest
attributes:
  -
    name: first_name
    crud: 'create, read, update'
    filter: StringFilter
    sortable: 'true'
  -
    name: last_name
    crud: 'create, read, update'
    filter: StringFilter
    sortable: 'true'
  -
    name: email
    crud: 'create, read, update'
    required: true
    rules:
      - email
  -
    name: actual_status
    crud: read
    sortable: 'true'
  -
    name: avatar_url
    crud: read
    sortable: 'true'
  -
    name: activated
    crud: read
    sortable: 'true'
  -
    name: deleted_at
    crud: read
    sortable: 'true'
  -
    name: status
    crud: read
    sortable: 'true'
  -
    name: activation_reset
    crud: 'create, read, update'
relationships:
  -
    resource: notifications
    alias: notifications
    crud: 'create, read, update'
  -
    resource: company_users
    alias: company_users
    crud: read
  -
    resource: auth_clients
    alias: auth_clients
    crud: 'create, read, update'

---
