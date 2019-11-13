---
version: 0.0.23
resource: params
permalink: /docs/0.0.23/resources/params/
singular: resource
section: Companies
partOf: company
attributes:
  -
    name: company_id
    crud: 'create, read, update'
  -
    name: value
    crud: 'create, read, update'
relationships: {  }

---

Donde **params_id** es un atributo de los descritos anteriormente, exceptuando `company_id`{: .code} y `value`{: .code}.  
Por ejemplo:  `PATCH`{: .patch} [...]v1/company/{company_id}/params/**primary_color**  
En el ejemplo anterior podemos observar que usamos el atributo `primary_color`{: .code} como key.
