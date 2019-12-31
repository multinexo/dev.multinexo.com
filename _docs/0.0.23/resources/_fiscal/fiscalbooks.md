---
resource: fiscalbooks
permalink: /docs/0.0.23/resources/fiscalbooks/
version: 0.0.23
singular: resource
section: Fiscal
partOf: company
attributes:
  -
    name: alias
    crud: 'create, read, update'
    value_type: string
  -
    name: from
    crud: 'create, read, update'
    rules:
      - iso_date
  -
    name: initial_folio
    crud: 'create, read, update'
  -
    name: total
    crud: read
  -
    name: net
    crud: read
  -
    name: url_pdf
    crud: read
  -
    name: url_xls
    crud: read
  -
    name: url_csv
    crud: read
  -
    name: url_citi
    crud: read
  -
    name: fiscalbook_type
    crud: 'create, read, update'
    filter: EnumFilter
    value_type: 'in [sells, buys]'
  -
    name: to
    crud: 'create, read, update'
    filter: DateFilter
    rules:
      - iso_date
relationships: {  }

---

#### Special entry points

Actualiza datos de la AFIP
`GET`{: .get} [...]/v1/companies/{company_id}/fiscalpos/update

#### Token fiscalpos

- Sólo hay token cuando `type=fiscal_printer`{: .code}
- Si fiscaltoken es seteado a "", se genera un nuevo fiscaltoken.

#### Condiciones

- Si `max_amount_per_invoice` o `max_items_per_invoice` se setean en 0, implicará no tener límites.
- Si `fiscaltoken` es seteado a '', se genera un nuevo `fiscaltoken`.
- Sólo hay token cuando `type=fiscal_printer`
