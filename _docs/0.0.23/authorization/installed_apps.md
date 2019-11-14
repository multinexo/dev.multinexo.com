---
version: 0.0.23
title: Aplicaciones instaladas
permalink: /docs/0.0.23/installed_apps/
section: Autorización
---

Cuando cree su aplicación se le otorga un ID de cliente y, en algunos casos, una llave secreta de cliente, que debe usar
en el código de su aplicación. (En este caso, esta llave obviamente no se trata como un secreto).

La secuencia de autorización comienza cuando su aplicación redirige un navegador a una URL de Multinexo; la URL incluye
parámetros de consulta que indican el tipo de acceso que se solicita. Multinexo maneja la autenticación del usuario y el
consentimiento del usuario. El resultado es un código de autorización, que la aplicación puede intercambiar por un token
de acceso y un token de actualización.

La aplicación debe almacenar el token de actualización para uso futuro y usar el token de acceso para acceder a la API 
de Multinexo. Una vez que el token de acceso caduca, la aplicación usa el token de actualización para obtener uno nuevo.

##### Obtención de tokens de acceso

Los siguientes pasos muestran cómo su aplicación interactúa con el servidor OAuth 2.0 de Multinexo para obtener el 
consentimiento de un usuario para realizar una solicitud de API en nombre del usuario. Su aplicación debe tener ese 
consentimiento antes de poder ejecutar una solicitud de API de Multinexo que requiera autorización del usuario.

###### Paso 1: Envíe una solicitud al servidor de Multinexo

Para obtener la autorización del usuario, envíe una solicitud al servidor de autorización de Multinexo a 
`https://api.multinexo.com/auth/v1/authorization`. Este punto final maneja la búsqueda de sesión activa, autentica al
usuario y obtiene el consentimiento del usuario. El servidor de autorización admite los siguientes parámetros de cadena 
de consulta para las aplicaciones instaladas:

 - client_id: **Requerido.** El ID de cliente para su aplicación. Lo puede encontrar en Mis Aplicaciones.
 - redirect_uri: **Requerido.** Determina cómo el servidor envía una respuesta a su aplicación. Hay varias opciones de 
 redireccionamiento disponibles para las aplicaciones instaladas. El valor debe coincidir exactamente con el configurado
 en Mis Aplicaciones. Elija el valor apropiado para su método seleccionado.
    - Esquema de URI personalizado: com.example.app:redirect_uri_path o com.multinexocontent.apps.123:redirect_uri_path
        - com.example.app: es la notación DNS inversa de un dominio bajo su control. El esquema personalizado debe 
     contener un período para ser válido. 
        - com.multinexocontent.apps: es la notación DNS inversa del ID del cliente.
        - redirect_uri_path: es un componente de ruta opcional, como /oauth2redirect. Tenga en cuenta que la ruta debe
        comenzar con una barra diagonal única, que es diferente de las URL HTTP normales.
    - Dirección IP de bucle invertido: http://127.0.0.1:port o http://[::1]:port Consulte en su plataforma la dirección 
    IP de bucle de retorno relevante e inice una escucha HTTP en un puerto aleatorio disponible. Sustituya el puerto con
    el número de puerto real en que el que escucha su aplicación.
 - response_type: **Requerido.** Determina si el punto final devuelve un código de autorización. Establezca el valor del
 parámetro en 'code' para aplicaciones instaladas.
 
###### Ejemplo de URL de autorización con dirección IP de bucle invertido
 
 ```
https://api.multinexo.com/auth/v1/authorization?
 response_type=code&
 redirect_uri=http://127.0.0.1:9004&
 client_id=client_id
```

###### Paso 3: Multinexo solicita consentimiento al usuario

En este paso, el usuario decide si concede a su aplicación el acceso solicitado. En esta etapa, Multinexo muestra una 
ventana de consentimiento que muestra el nombre de su aplicación y los servicios API de Multinexo a los que solicita permiso
para acceder con las credenciales de autorización del usuario. El usuario puede consentir o negarse a otorgar acceso a
su aplicación.

###### Paso 4: Intercambio del código de autorización para obtener tokens

Una vez que el servidor web recibe el código de autorización, puede intercambiar el código de autorización por un token 
de acceso.

Para intercambiar un código de autorización para un token de acceso, llame al siguiente punto final: 
`https://api.multinexo.com/auth/v1/token` y configure los siguientes parámetros:

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
diferentes invocaciones de su aplicación. El token de actualización permite que su aplicación obtenga un nuevo token de 
acceso si el que tiene caduca. Como tal, si su aplicación pierde el token de actualización, el usuario deberá repetir el
flujo de consentimiento de OAuth 2.0 para que su aplicación pueda obtener un nuevo token de actualización._

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
