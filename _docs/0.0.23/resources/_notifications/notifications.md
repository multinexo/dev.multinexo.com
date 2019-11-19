---
resource: notifications
version: 0.0.23
permalink: /docs/0.0.23/resources/notifications/
singular: resource
section: Notifications
partOf: user
attributes:
  -
    name: content_type
    crud: 'create, read, update'
    filter: StringFilter
    required: true
    value_type: 'in [error, warning, info, success]'
  -
    name: message
    crud: 'create, read, update'
    required: true
  -
    name: read_at
    crud: 'read, update'
    filter: DateFilter
  -
    name: created_at
    crud: read
    filter: DateFilter
relationships: {  }

---
