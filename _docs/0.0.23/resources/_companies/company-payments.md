---
resource: company_payments
version: 0.0.23
permalink: /docs/0.0.23/resources/company_payments/
singular: resource
section: Companies
partOf: company
attributes:
  -
    name: amount
    crud: 'create, read, update'
    required: true
    value_type: numeric
  -
    name: plan_id
    crud: 'create, read, update'
  -
    name: description
    crud: 'create, read, update'
  -
    name: observations
    crud: 'create, read, update'
  -
    name: status
    crud: 'create, read, update'
    required: true
    value_type: 'in [uncredited, credited, in_observation]'
  -
    name: payment_code
    crud: 'create, read, update'
  -
    name: payment_type
    crud: 'create, read, update'
    required: true
    value_type: 'in [emitted_documents, auto_renovation, manual_activation]'
  -
    name: months
    crud: 'create, read, update'
    value_type: integer
  -
    name: updated_at
    crud: 'create, read, update'
relationships:
  -
    resource: plan
    alias: plan
    crud: 'create, read, update'

---
