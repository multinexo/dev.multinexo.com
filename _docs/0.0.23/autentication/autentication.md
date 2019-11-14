---
version: 0.0.23
title: Autenticación
permalink: /docs/0.0.23/autentication/
section: Autenticación
---

Multinexo sigue la especificación Oauth 2.0 para identificar y autorizar a los usuarios cuando utilizan los servicios 
ofrecidos por la API.Si no conoces la especificación puedes visitar la 
<a href="https://tools.ietf.org/html/rfc6749" target="\_blank">RFC</a> para más información.

Para utilizar la API, tu aplicación deberá ser capaz de enviar el usuario, contraseña, Client ID y Client Secret a 
Multinexo para solicitar un Access Token y un Refresh Token. El Access Token servirá para solicitar recursos a la API, 
mientras que el Refresh Token servirá para solicitar un nuevo Access Token cuando éste quede obsoleto.

A continuación tienes una representación del flujo de autenticación para identificarte en Multinexo, solicitar un 
recurso y renovar el Access Token:

![JWT]({{ '/img/autentication/oauth2-diagram.svg' | prepend: site.baseurl }}){: .width-100}

## Cómo generar el token

Cuando inicias sesión en Multinexo, tus datos privados (nombre de usuario, contraseña, Client ID y Client Secret) son 
enviados a la API por única vez. Una vez verificados, el servidor responde con un Access Token, un Refresh Token y el 
tiempo de expiración del Access Token. Podrás utilizar este Access Token para hacer las peticiones a la API durante 
este tiempo, una vez que expire, deberás renovarlo utilizando el Refresh Token como se muestra en el diagrama ilustrado 
anteriormente.

## Rutas

### Registro:

- `POST` https://api.multinexo.com/v1/users (no requiere token)

En los datos del request deberás enviar un JSON con una instancia del recurso User (siguiendo la especificación 
JSONAPI). El servidor responderá con el recurso creado.

### Token

- `POST` https://api.multinexo.com/auth/v1/token

En los datos del request deberás enviar:

```
grant_type: password
scope: openid profile email voucher
username: Tu nombre de usuario
password: Tu contraseña
client_id: Tu Client ID
client_secret: Tu Client Secret
```

A lo que el servidor responderá con:

```
access_token: El Access Token
expires_in: 900
first_name: Nombre de usuario
last_name: Apellido del usuario
refresh_token: El Refresh Token
token_type: "Bearer"
uid: ID del usuario
```
