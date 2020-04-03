---
resource: messages
permalink: /docs/0.0.23/resources/messages/
version: 0.0.23
singular: resource
section: Shared
partOf: company
attributes:
  -
    name: subject
    crud: 'create, read, update'
  -
    name: content
    crud: 'create, read, update'
    required: true
  -
    name: to
    crud: 'create, read, update'
    filter: LikeFilter
    sortable: 'true'
    required: true
  -
    name: status
    crud: 'create, read, update'
    filter: EnumFilter
    sortable: 'true'
    value_type: 'enum (sent, queued, draft, failed)'
  -
    name: resources
    crud: read
    filter: ResourceFilter
    sortable: 'true'
relationships:
  -
    resource: documents
    alias: documents
    crud: 'create, read, update'
  -
    resource: fiscalbooks
    alias: fiscalbooks
    crud: 'create, read, update'
  -
    resource: pricelist_reports
    alias: pricelist_reports
    crud: 'create, read, update'
  -
    resource: cost_reports
    alias: cost_reports
    crud: 'create, read, update'

---
