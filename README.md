# VidaAhorroApp

## Tecnología
- **Angular 4.2**
- **Angular CLI 1.4.1o**
- **nodejs 6.11**
- **Atom Editor**

## Configuración del proyecto
**Instalación NodeJs**
Versión de Descarga: https://nodejs.org/download/release/v6.11.0/
* Una vez instalado nodejs, se debe instalar angular CLI (Opcional, ya que se han cargado los componentes a la plantilla, pero se recomienda su Instalación)
*       npm install -g @angular/cli@1.4.10

* Instalación de typescript para trabajar con el editor de texto (Atom) y reconozca la sintaxis y realice la compilación de los archivos .ts.
*       npm install -g typescript

**Ejecuion del aplicativo**

Se realizara mediante una consola o terminal. Nos debemos posicionar dentro de la carpeta del proyecto: **VidaAhorro/*** y ejecutamos:
*       npm install
Esto descargará las dependencias necesarias para el proyecto. Una vez terminado, ejecutar el comando:
*       ng serve -o
Este comando iniciara un servidor a través de nodejs y permitirá visualizar el aplicativo en la URL (por defecto) **http://localhost:4200/**, además de eso, con este comando indicamos que el servidor este a la escucha de cualquier cambio que se produzca en los componentes de la aplicación y re-compilará el proyecto.

## Estructura del proyecto

- **e2e --** Manejo de pruebas unitarias o integración (se ejecutan automáticamente)
- **node_modules --** paquetes instalados que requiere nodejs, por ejemplo: se encuentran todos los componentes para que se pueda ejecutar angular, contiene el server para ejecutar la aplicación, demás paquetes que requiramos para la funcionalidad de nuestra aplicación (es equivalente al m2 de maven, no es necesario versionarla).  
- **src --** código de la aplicación
- **.editorconfig --** archivo para configuraciones del editor que cuando se inicie la aplicación tomara en cuenta los que indique, por el ejmplo: encodig , identacion de espacios, etc.
- **angular.json --** indica al compilador de angular que y como funciona nuestra aplicación, normalmente aqui definimos estilos, assets o scripts js de apoyo para la aplicación.
- **package-lock.json --** indica a nodejs como fue generado el package.json, se genera automáticamente conforme instalamos paquetes.
- **package.json --** archivo donde se encuentran las dependencias que necesitamos para ejecutar nuestro aplicativo en diferentes ambiente, por defecto tiene desarrollo, además se encuentra para el ambiente de producción
- **tsconfig.json --** indica al leguaje (typescript) como "trabajar", es decir en que estandar javascript será compilado el código, en este caso será **es5** (soportado por todos los navegadores).
- **tslint.son --** permite definir reglas para el código que generamos, angular tomará de referencia este archivo para compilar el código verificando que estas reglas se cumplan.
