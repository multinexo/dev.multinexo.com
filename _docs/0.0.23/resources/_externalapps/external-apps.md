---
resource: external_apps
permalink: /docs/0.0.23/resources/external_apps/
version: 0.0.23
singular: resource
section: ExternalApps
partOf: guest
attributes:
  -
    name: app_type
    crud: 'create, read, update'
    filter: StringFilter
    sortable: 'true'
    required: true
    value_type: string
  -
    name: name
    crud: 'create, read, update'
    filter: StringFilter
    sortable: 'true'
relationships:
  -
    resource: company_external_apps
    alias: company_external_apps
    crud: 'create, read, update'

---
