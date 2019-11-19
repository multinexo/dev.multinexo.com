---
resource: company_external_apps
version: 0.0.23
permalink: /docs/0.0.23/resources/company_external_apps/
singular: resource
section: ExternalApps
partOf: company
attributes:
  -
    name: url
    crud: read
  -
    name: status
    crud: 'create, read, update'
    filter: EnumFilter
  -
    name: observation
    crud: read
  -
    name: updated_at
    crud: read
relationships:
  -
    resource: external_app
    alias: external_app
    crud: 'create, read, update'

---
