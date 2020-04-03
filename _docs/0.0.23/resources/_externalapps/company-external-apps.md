---
resource: company_external_apps
permalink: /docs/0.0.23/resources/company_external_apps/
version: 0.0.23
singular: resource
section: ExternalApps
partOf: company
attributes:
  -
    name: url
    crud: read
    sortable: 'true'
  -
    name: status
    crud: 'create, read, update'
    filter: EnumFilter
    sortable: 'true'
  -
    name: observation
    crud: read
    sortable: 'true'
  -
    name: updated_at
    crud: read
    sortable: 'true'
relationships:
  -
    resource: external_app
    alias: external_app
    crud: 'create, read, update'

---
