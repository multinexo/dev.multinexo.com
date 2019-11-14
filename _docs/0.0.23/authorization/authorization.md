---
version: 0.0.23
title: Descripción general
permalink: /docs/0.0.23/authorization/
section: Autorización
---

## OAuth2 para registro de aplicaciones

La API de Multinexo utiliza el <a href="https://tools.ietf.org/html/rfc6749" target="\_blank">protocolo OAuth 2.0</a> 
para autenticación y autorización. Multinexo admite escenarios comunes de OAuth 2.0, como de servidor web, aplicaciones
instaladas y del lado del cliente. OAuth 2.0 permite a los usuarios compartir datos específicos con una aplicación, 
manteniendo la información privada. Por ejemplo, una aplicación puede usar OAuth 2.0 para obtener permiso de los 
usuarios para crear productos.

Para comenzar, obtenga las credenciales del cliente OAuth 2.0 desde la sección Mis Aplicaciones dentro de su Perfil.
Luego, su aplicación cliente solicitará un token de acceso al Servidor de Autorización de Multinexo, extrae el token
de la respuesta y lo envía a la API de Multinexo.

A continuación se muestra una descripción de los escenarios de autorización de OAuth 2.0 que admite Multinexo.

### Pasos básicos

Todas las aplicaciones siguen un patrón básico cuando acceden a la API de Multinexo usando OAuth 2.0. En un nivel alto,
sigue cuatro pasos:

##### 1. Obtenga las credenciales OAuth 2.0 desde Mis Aplicaciones de su cuenta de Multinexo.

Visite Mis Aplicaciones para obtener credenciales de OAuth 2.0, como un ID de cliente y una llave secreta de cliente
que tanto Multinexo como su aplicación conocen. La cantidad de valores varía según el tipo de aplicación que se está 
creando. Por ejemplo, una aplicación de JavaScript no requiere una llave secreta, pero una aplicación de servidor web sí.

##### 2. Obtenga un token de acceso al servidor de autorización de Multinexo.

Antes de que su aplicación pueda acceder a datos privados utilizando nuestra API, debe obtener un token de acceso que
le otorgue acceso a esa API. 

Hay varias formas de hacer esta solicitud, y varían según el tipo de aplicación que se está creando. Por ejemplo, una
aplicación de JavaScript podría solicitar un token de acceso utilizando un navegador redirigido a Multinexo, mientras 
que una aplicación instalada en un dispositivo que no tiene navegador utiliza solicitudes de servicio web.

Algunas solicitudes requieren un paso de autenticación donde el usuario inicia sesión con su cuenta de Multinexo. 
Después de iniciar sesión, se le pregunta al usuario si está dispuesto a otorgar los permisos que solicita su aplicación.
Este proceso se llama "consentimiento del usuario".

Si el usuario otorga el permiso, el servidor de autorización de Multinexo envía a su aplicación un token de acceso (o un
código de autorización que su aplicación puede usar para obtener un token de acceso). Si el usuario no otorga el permiso, 
el servidor devuelve un error.

##### 3. Envíe el token de acceso a la API

Después de que una aplicación obtiene un token de acceso, envía el token a la API de Multinexo en un encabezado de 
autorización HTTP. Es posible enviar tokens como parámetros de cadena de consulta de URI, pero no se recomienda.

##### 4. Actualice el token de acceso, si es necesario

Los tokens de acceso tienen vidas limitadas. Si su aplicación necesita acceso a la API más allá de la vida útil de un 
sólo token de acceso, puede obtener un token de actualización, que permite que su aplicación obtenga nuevos tokens.

### Escenarios
