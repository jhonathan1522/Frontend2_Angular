ng serve
ng serve -o

//modulos
ng generate module modulos/seguridad --routing
ng generate module modulos/administracion --routing

//componentes por modulos
ng g component modulos/seguridad/login
ng g c modulos/seguridad/cambioClave
ng g c modulos/seguridad/recuperarClave
ng g c modulos/seguridad/cerrar-sesion

//componentes por modulos
ng g c modulos/administracion/clientes/crear-cliente
ng g c modulos/administracion/clientes/editar-cliente
ng g c modulos/administracion/clientes/eliminar-cliente
ng g c modulos/administracion/clientes/buscar-cliente


ng g c modulos/administracion/empleados/crear-empleado
ng g c modulos/administracion/empleados/editar-empleado
ng g c modulos/administracion/empleados/eliminar-empleado
ng g c modulos/administracion/empleados/buscar-empleado


npm install materialize-css@next

ng g c template/navbar
ng g c template/home
ng g c template/footer
ng g c template/error

npm install crypto-js

#ng generate service
ng g s services/autenticacion

ng g s services/cliente



npm i @types/crypto-js