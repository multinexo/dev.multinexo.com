---
version: 0.0.23
title: Aplicaciones de servidor web
permalink: /docs/0.0.23/web_servers/
section: Autorización
---

La secuencia de autorización comienza cuando su aplicación redirige un navegador a una URL de Multinexo; la URL incluye 
parámetros de consulta que indican el tipo de acceso que se solicita. Multinexo maneja la autenticación del usuario y el
consentimiento del usuario. El resultado es un código de autorización, que la aplicación puede intercambiar por un token
de acceso y un token de actualización.

La aplicación debe almacenar el token de actualización para uso futuro y usal el token de acceso para acceder a la API
de Multinexo. Una vez que el token de acceso caduca, la aplicación usa el token de actualización para obtener uno nuevo.

##### Obtención de tokens de acceso

###### Paso 1: Establecer los parámetros de autorización

El primer paso es crear la solicitud de autorización. Esa solicitud establece parámetros que identifican su aplicación
y definen los permisos que el usuario deberá otorgar a su aplicación.

El punto final OAuth 2.0 de Multinexo está en `https://api.multinexo.com/auth/v1/authorize`. El servidor de autorización 
de Multinexo admite los siguientes parámetros de cadena de consulta para aplicaciones de servidor web.

 - client_id: **Requerido.** El ID de cliente para su aplicación. Lo puede encontrar en Mis Aplicaciones.
 - redirect_uri: **Requerido.** Determina dónde el servidor redirige al usuario después de que el usuario complete el 
 flujo de autorización. El valor debe coincidir exactamente con uno de los URI de redireccionamiento autorizador para el 
 cliente que se configuró en Mis Aplicaciones. Si no coincide obtendrá un error.
 
###### Paso 2: Redireccionar al servidor de Multinexo
 
 Redireccione al usuario al servidor de OAuth 2.0 de Multinexo para iniciar el proceso de autenticación y autorización.
 Por lo general, esto ocurre cuando su aplicación primero necesita acceder a los datos del usuario.
 
 Ejemplo de redireccionamiento al servidor de autorización de Multinexo:
 
 `https://api.multinexo.com/auth/v1/authorization?response_type=code&client_id=client_id&redirect_uri=http%3A%2F%2Foauth2.example.com%2Fcallback`
 
 El servidor de Multinexo autentica al usuario y obtiene el consentimiento del usuario para que su aplicación acceda a 
 los ámbitos solicitados. La respuesta se envía de vuelta a su aplicación utilizando la URL de redireccionamiento que
 especificó.
 
###### Paso 3: Multinexo solicita consentimiento del usuario
 
 En este paso, el usuario decide si concede a su aplicación el acceso solicitado. En esta etapa, Multinexo muestra una 
 ventana de consentimiento que muestra el nombre de su aplicación y los servicios API de Multinexo a los que solicita
 permiso para acceder con las credenciales de autorización al usuario. El usuario puede consentir o negarse a otorgar 
 acceso a su aplicación.
 
###### Paso 4: Manejar la respuesta del servidor
 
 El servidor responde a la solicitud de acceso de su aplicación utilizando la URL especificada en la solicitud. Si el 
 usuario aprueba la solicitud de acceso, la respuesta contiene un código de autorización. Si el usuario no aprueba la 
 solicitud, la respuesta contiene un mensaje de error.
 
 Respuesta de código de autorización: 
 
 `https://oauth2.example.com/auth?code=4MI67q7Wasd91a-oMsCeMao89fd87dasUB7`
 
___Importante:__ si su punto final de respuesta representa una página HTML, cualquier recurso en esa página podrá ver el 
código de autorización en la URL. Las secuencias de comandos pueden leer la URL directamente, y la URL en el Referer de
HTTP puede enviarse a cualquiera o a todos los recursos de la página. Considere cuidadosamente si desea enviar 
credenciales de autorización a todos los recursos en esa página (especialmente los scripts de terceros, como complementos
sociales y análisis). Para evitar este problema, recomendamos que el servidor primero maneje la solicitud, luego redirija
a otra URL que no incluya los parámetros de respuesta._

###### Paso 5: Intercambio de código de autorización para obtener tokens

Una vez que el servidor web recibe el código de autorización, puede intercambiar el código de autorización por un token 
de acceso.

Para intercambiar un código de autorización para un token de acceso, llame al siguiente punto final: 

`https://api.multinexo.com/auth/v1/token` 

y configure los siguientes parámetros:

- code: El código de autorización devuelto en la solicitud inicial.
- client_id: El ID de cliente obtenido en Mis Aplicaciones.
- client_secret: El secreto del cliente obtenido en Mis Aplicaciones.
- redirect_uri: El URI de redireccionamiento configurado para su aplicación en Mis Aplicaciones.
- grant_type: Como se define en la especificación OAuth 2.0, este campo debe contener un 'authorization_code'.

El siguiente fragmento muestra una solicitud de muestra:

```
POST /auth/v1/token HTTP/1.1
Host: api.multinexo.com
Content-Type: application/x-www-form-urlencoded

code=4MI67q7Wasd91a-oMsCeMao89fd87dasUB7
client_id=your_client_id&
client_secret=your_client_secret&
redirect_uri=https://oauth2.example.com/code&
grant_type=authorization_code
```
 
 Multinexo responde a esta solicitud devolviendo un objeto JSON que contiene un token de acceso de corta duración y un 
 token de actualización. La respuesta contiene los siguientes parámetros:
 
 - access_token: El token que enviará su aplicación para autorizar una solicitud de la API de Multinexo.
 - refresh_token: Un token que puede usar para obtener un nuevo token de acceso. Los tokens de actualización son válidos
 hasta que el usuario revoque el acceso.
 - expires_in: La vida útil restante del token de acceso en segundos.
 - token_type: El tipo de token devuelto. En este momento, el valor de este campo siempre se establece en Bearer.
 

___Importante:__ su aplicación debe almacenar ambos tokens en una ubicación segura y duradera que sea accesible entre 
diferentes invocaciones de su aplicación. El token de actualización permite que su aplicación obtenga un nuevo 
token de acceso si el que tiene caduca. Como tal, si su aplicación pierde el token de actualización, el usuario 
deberá repetir el flujo de consentimiento de OAuth 2.0 para que su aplicación pueda obtener un nuevo token de actualización._

El siguiente fragmento muestra una respuesta de muestra:

```json5
{
  "access_token":"23fFAGMKGLJru1FTz65GzhT3Zg",
  "expires_in":3920,
  "token_type":"Bearer",
  "refresh_token":"23xEoDS544iW3cxlI7yDbSDSMJKL01kVNJMK5C-769HOF2aQbI"
}
```
 
Después de que su aplicación obtenga un token de acceso, puede usar el token para realizar llamadas a la API de Multinexo
en nombre de una cuenta de usuario determinada. Para hacer esto, incluya el token de acceso en una solicitud a la API
incluyendo un access_token de consulta o un encabezado Authorization: Bearer de HTTP. Cuando sea posible, el encabezado
HTTP es preferible, porque las cadenas de consulta tienden a ser visibles en los registros del servidor.
