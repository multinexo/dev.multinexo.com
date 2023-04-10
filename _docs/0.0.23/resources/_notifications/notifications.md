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
    value_type: 'enum (error, warning, info, success)'
  -
    name: message
    crud: 'create, read, update'
    required: true
  -
    name: image
    crud: read
    sortable: 'true'
  -
    name: icon
    crud: read
    sortable: 'true'
  -
    name: href
    crud: read
    sortable: 'true'
  -
    name: read
    crud: 'read, update'
    sortable: 'true'
  -
    name: viewed
    crud: 'read, update'
    sortable: 'true'
  -
    name: created_at
    crud: read
    filter: DateFilter
    sortable: 'true'
relationships: {  }

---
