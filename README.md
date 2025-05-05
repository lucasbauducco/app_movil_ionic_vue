# 📱 App Móvil Ionic Vue

Esta es una aplicación móvil básica creada con [Ionic](https://ionicframework.com/) y [Vue.js](https://vuejs.org/), lista para desplegar en Android e iOS.

## 🚀 Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes:

- [Node.js](https://nodejs.org/) (v16 o superior recomendado)
- [Ionic CLI](https://ionicframework.com/docs/cli) `npm install -g @ionic/cli`
- [Capacitor](https://capacitorjs.com/) (v4 o superior): incluido con Ionic
- [Android Studio](https://developer.android.com/studio) (para Android)
- [Xcode](https://developer.apple.com/xcode/) (solo en macOS, para iOS)

---

## 🧪 Instalación del proyecto

Clona este repositorio y entra en el directorio:

```bash
git clone https://github.com/usuario/app-movil.git
cd app-movil/app_start
```
## Instala las dependencias:
```bash
cd app_start
npm install
```
## Ejecutar la app en navegador
```bash
ionic serve
```
## Build para producción
```bash
ionic build
```
Esto generará los archivos en el directorio dist/ o www/ dependiendo de tu configuración.

# Integrar con Capacitor
Después de construir tu app, debes integrar Capacitor:
```bash
npx cap sync
```
## Ejecutar en Android
Asegúrate de tener un emulador o un dispositivo conectado.

Abre el proyecto en Android Studio:
```bash
npx cap open android
```
Desde Android Studio, ejecuta el proyecto (Run > Run 'app').

## Ejecutar en iOS (solo en macOS)
Asegúrate de tener Xcode instalado(Necesitas una mac!).

Abre el proyecto en Xcode:
```bash
npx cap open ios
```
Desde Xcode, selecciona tu dispositivo y presiona el botón de ejecutar.

## Notas adicionales
Cada vez que hagas cambios en el código fuente y construyas de nuevo (ionic build), recuerda sincronizar con Capacitor:
```bash
npx cap sync
```
Si agregas nuevos plugins de Capacitor, también necesitas npx cap update.
