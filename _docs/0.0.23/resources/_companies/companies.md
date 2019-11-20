---
resource: companies
permalink: /docs/0.0.23/resources/companies/
version: 0.0.23
singular: resource
section: Companies
partOf: user
attributes:
  -
    name: name
    crud: 'create, read, update'
    required: true
    value_type: string
    rules:
      - 'max:96'
  -
    name: legal_name
    crud: 'create, read, update'
  -
    name: status
    crud: read
    required: true
    value_type: 'in [activated, suspended, redeem]'
  -
    name: abbreviation
    crud: 'create, read, update'
    value_type: string
    rules:
      - 'max:5'
  -
    name: description
    crud: 'create, read, update'
    value_type: string
    rules:
      - 'max:96'
  -
    name: cuit
    crud: 'create, read, update'
    rules:
      - 'cuit:no_strict'
  -
    name: activities_start_date
    crud: 'create, read, update'
    rules:
      - iso_date
  -
    name: gross_income
    crud: 'create, read, update'
  -
    name: email
    crud: 'create, read, update'
    rules:
      - email
  -
    name: seat_tim
    crud: 'create, read, update'
  -
    name: establishment_number
    crud: 'create, read, update'
  -
    name: department
    crud: 'create, read, update'
  -
    name: province
    crud: 'create, read, update'
  -
    name: logo_url
    crud: read
  -
    name: street_name
    crud: 'create, read, update'
    value_type: string
    rules:
      - 'max:96'
  -
    name: street_number
    crud: 'create, read, update'
    value_type: numeric
  -
    name: phone
    crud: 'create, read, update'
    value_type: string
  -
    name: fiscal_ws_status
    crud: read
    value_type: 'in [, waiting, ok]'
  -
    name: started_at
    crud: read
  -
    name: expire_at
    crud: read
  -
    name: remaining_documents
    crud: read
  -
    name: csr_url
    crud: 'create, read, update'
  -
    name: deleted_at
    crud: read
  -
    name: deleted
    crud: read
    filter: DeletedFilter
relationships:
  -
    resource: fiscalpos
    alias: fiscalpos
    crud: 'create, read, update'
  -
    resource: user
    alias: user
    crud: 'create, read, update'
  -
    resource: responsibility
    alias: responsibility
    crud: 'create, read, update'
  -
    resource: company_payments
    alias: company_payments
    crud: 'create, read, update'
  -
    resource: plan
    alias: plan
    crud: 'create, read, update'
  -
    resource: notifications
    alias: notifications
    crud: 'create, read, update'

---

#### Special entry points

`POST`{: .post} [...]v1/users/{user_id}/companies/{company_id}/logo
`POST`{: .post} [...]v1/users/{user_id}/companies/{company_id}/upload/crt
`DELETE`{: .delete} [...]v1/users/{user_id}/companies/{company_id}/logo/{nameImage}
`PATCH`{: .get} [...]v1/users/{user_id}/companies/{company_id}/restore
`GET`{: .get} [...]v1/users/{user_id}/companies/{company_id}/download/csr
