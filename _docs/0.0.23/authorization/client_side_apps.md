---
version: 0.0.23
title: Aplicaciones del lado del cliente
permalink: /docs/0.0.23/clients_side_apps/
section: Autorización
---

La secuencia de autorización comienza cuando su aplicación redirige un navegador a una URL de Multinexo; la URL incluye
parámetros de consulta que indican el tipo de acceso que se solicita. Multinexo maneja la autenticación del usuario y el
consentimiento del usuario. El resultado es un token de acceso, que el cliente debe validar antes de incluirlo en una 
solicitud de API de Multinexo. Cuando el token caduca, la aplicación repite el proceso.

##### Obtención de tokens de acceso

Los siguientes pasos muestran cómo su aplicación interactúa con el servidor OAuth 2.0 de Multinexo para obtener el 
consentimiento de un usuario para realizar una solicitud de API en nombre del usuario. Su aplicación debe tener ese 
consentimiento antes de poder ejecutar una solicitud de API de Multinexo que requiera autorización del usuario.

###### Paso 1: Redireccionar al sevidor de Multinexo

Para solicitar permiso para acceder a los datos de un usuario, redirija al usuario al servidor de Multinexo.

Genere una URL para solicitar acceso desde el punto final OAuth 2.0 de Multinexo en: 

`https://api.multinexo.com/auth/v1/authorization`

El servidor de autorización de Multinexo admite los siguientes parámetros de cadena de consulta para sus aplicaciones.

 - client_id: **Requerido.** El ID de cliente para su aplicación. Lo puede encontrar en Mis Aplicaciones.
 - redirect_uri: **Requerido.** Determina dónde el servidor redirige al usuario después de que el usuario complete el 
 flujo de autorización. El valor debe coincidir exactamente con uno de los URI de redireccionamiento autorizador para el 
 cliente que se configuró en Mis Aplicaciones. Si no coincide obtendrá un error.
 
 Ejemplo de redireccionamiento al servidor de autorización de Multinexo:
  
 `https://api.multinexo.com/auth/v1/authorization?response_type=code&client_id=client_id&redirect_uri=http://oauth2.example.com/callback`
  
El siguiente fragmento de JavaScript muestra cómo iniciar el flujo de autorización.

```js
/*
 * Create form to request access token from Multinexo's OAuth 2.0 server.
 */
function oauthSignIn() {
  // Multinexo's OAuth 2.0 endpoint for requesting an access token
  var oauth2Endpoint = 'https://api.multinexo.com/auth/v1/authorization';

  // Create <form> element to submit parameters to OAuth 2.0 endpoint.
  var form = document.createElement('form');
  form.setAttribute('method', 'GET'); // Send as a GET request.
  form.setAttribute('action', oauth2Endpoint);

  // Parameters to pass to OAuth 2.0 endpoint.
  var params = {'client_id': 'YOUR_CLIENT_ID',
                'redirect_uri': 'YOUR_REDIRECT_URI',
                'response_type': 'token'};

  // Add form parameters as hidden input values.
  for (var p in params) {
    var input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', p);
    input.setAttribute('value', params[p]);
    form.appendChild(input);
  }

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();
}
```

###### Paso 2: Multinexo solicita consentimiento del usuario

En este paso, el usuario decide si concede a su aplicación el acceso solicitado. En esta etapa, Multinexo muestra una 
ventana de consentimiento que muestra el nombre de su aplicación y los servicios API de Multinexo a los que solicita permiso
para acceder con las credenciales de autorización del usuario. El usuario puede consentir o negarse a otorgar acceso a
su aplicación.

###### Paso 3: Manejar la respuesta del servidor

El servidor envía una respuesta a la redirect_uri especificada en sus solicitud de token de acceso. Si el usuario aprueba 
la solicitud, la respuesta contiene un token de acceso. Si el usuario no aprueba la solicitud, la respuesta contiene un 
mensaje de error.

Respuesta de token de acceso:
 
 `https://oauth2.example.com/callback?access_token=NS489fnd904NDFSe9&token_type=Bearer&expires_in=3600`

##### Llamadas a la API

Después de que su aplicación obtenga un token de acceso, puede usar el token para realizar llamadas a una API de Multinexo
en nombre de una cuenta de usuario determinada. Para hacer esto, incluya el token de acceso en una solicitud a la API
incluyendo un access_token de consulta o un encabezado Authorization: Bearer de HTTP. Cuando sea posible, el encabezado
HTTP es preferible, porque las cadenas de consulta tienden a ser visibles en los registros del servidor.

###### Código de muestra de JavaScript

```js
var xhr = new XMLHttpRequest();
xhr.open('GET',
    'https://api.multinexo.com/v2/companies' +
    'access_token=' + params['access_token']);
xhr.onreadystatechange = function (e) {
  console.log(xhr.response);
};
xhr.send(null);
```
