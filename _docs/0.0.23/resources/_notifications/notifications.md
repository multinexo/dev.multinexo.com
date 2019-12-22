---
resource: notifications
permalink: /docs/0.0.23/resources/notifications/
version: 0.0.23
singular: resource
section: Notifications
partOf: user
attributes:
  -
    name: content_type
    crud: 'create, read, update'
    filter: StringFilter
    sortable: 'true'
    required: true
    value_type: 'in [error, warning, info, success]'
  -
    name: message
    crud: 'create, read, update'
    required: true
  -
    name: href
    crud: read
  -
    name: read
    crud: 'read, update'
  -
    name: viewed
    crud: 'read, update'
  -
    name: created_at
    crud: read
    filter: DateFilter
    sortable: 'true'
relationships: {  }

---
