---
resource: users
version: 0.0.23
permalink: /docs/0.0.23/resources/users/
singular: resource
section: Users
partOf: guest
attributes:
  -
    name: first_name
    crud: 'create, read, update'
    filter: StringFilter
  -
    name: last_name
    crud: 'create, read, update'
    filter: StringFilter
  -
    name: email
    crud: 'create, read, update'
    required: true
    rules:
      - email
  -
    name: actual_status
    crud: read
  -
    name: avatar_url
    crud: read
  -
    name: activated
    crud: read
  -
    name: deleted_at
    crud: read
  -
    name: status
    crud: read
  -
    name: activation_reset
    crud: 'create, read, update'
relationships:
  -
    resource: notifications
    alias: notifications
    crud: read
  -
    resource: company_users
    alias: company_users
    crud: read

---
