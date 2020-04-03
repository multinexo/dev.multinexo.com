---
resource: imports
permalink: /docs/0.0.23/resources/imports/
version: 0.0.23
singular: resource
section: Shared
partOf: company
attributes:
  -
    name: resource
    crud: 'create, read, update'
    filter: EnumFilter
    sortable: 'true'
    value_type: 'enum (entities, products)'
  -
    name: has_header
    crud: 'create, read, update'
    value_type: boolean
  -
    name: headers
    crud: 'create, read, update'
    value_type: string
  -
    name: records
    crud: read
    sortable: 'true'
  -
    name: status
    crud: read
    sortable: 'true'
  -
    name: observation
    crud: 'create, read, update'
relationships: {  }

---

### A tener en cuenta
Actualmente los archivos soportados para importar son en formato **.XLS** y **.CSV**.
Este recurso solo soporta POST por fuera de JSON-API

#### Entry points externos a JSON-API
`POST`{: .post} http://api.multinexo.com/v1/companies/{companyId}/imports

#### Datos obligatorios para POST
```
resource: string;
(binary) file;
```
