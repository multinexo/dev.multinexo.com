---
resource: payment_methods
permalink: /docs/resources/paymentmethods/
attributes:
  - name: name
  - name: created_at
    crud: read
    valuetype: datetimew3c
  - name: updated_at
    crud: read
    valuetype: datetimew3c
  - name: deleted_at
    crud: read
    valuetype: datetimew3c
relationships:
  - resource: companies
    hasMany: false
  - resource: currencies
    hasMany: true
  - resource: behaviors
    hasmany: false
filters: null
---