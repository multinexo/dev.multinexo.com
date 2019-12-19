---
version: 0.0.23
title: Crear aplicaciones
permalink: /docs/0.0.23/manage_apps/
section: Autorización
---

Para que los usuarios de Multinexo puedan utilizar tu aplicación, primero debes registrarla en la plataforma y obtener
los datos necesarios para conectarla con el sistema de gestión.

## Registrar tu aplicación en Multinexo

Podrás registrar tu apliación desde la sección **Mis aplicaciones**, que hallarás al hacer click sobre el menú de
usuario. Desde el botón **Agregar** ubicado en la esquina inferior izquierda podrás abrir el formulario de creación de
aplicaciones: 

![Mis aplicaciones]({{ site.baseurl }}/img/authorization/create_app.png){: .width-100}

En este formulario podrás definir:

- El nombre de tu aplicación: cómo quieres que los usuarios identifiquen a tu aplicación
- La URL de redirección: la URL a la que será redirigido el usuario después de dar permisos a tu aplicación.

Una vez que guardes la aplicación, verás que es ageregada a la lista de **Mis aplicaciones**. Haciendo click sobre la
misma podrás ver los detalles necesario para conectarte con el servidor de Multiexo:

- ID
- Secret

A partir de este momento tu aplicación quedará registrada en Mutlinexo. El próximo paso será obtener los datos de acceso
para poder hacer pedidos al servidor, para lo cual deberás seguir el procedimeinto correspondiente al tipo de aplicación
que estés desarrollando:

- [Aplicaciones de servidor]({{ "/docs/" | append: site.version | append: "/web_servers/" | prepend: site.baseurl }})
- [Aplicaciones de cliente (navegador)]({{ "/docs/" | append: site.version | append: "/clients_side_apps/" | prepend: site.baseurl }})
- [Aplicaciones instalables]({{ "/docs/" | append: site.version | append: "/installed_apps/" | prepend: site.baseurl }})
