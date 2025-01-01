# Proyecto Universitario: Identificación de Personajes de Cartoon Network  

Este proyecto fue desarrollado como parte de un trabajo universitario. El objetivo es crear un sistema que identifique automáticamente personajes de **Cartoon Network** en imágenes, utilizando herramientas modernas para análisis de imágenes y gestión de archivos.  

## Tecnologías utilizadas  
- **Azure Custom Vision**: Para entrenar un modelo de reconocimiento de personajes.  
- **React** con **TypeScript**: Para construir la interfaz de usuario.  
- **Cloudinary**: Para almacenar y gestionar imágenes en la nube.  

## Funcionalidades  
- Subida de imágenes a través de la interfaz.  
- Identificación automatizada de personajes de Cartoon Network.  
- Gestión de imágenes mediante Cloudinary.  

## Requisitos previos  
Antes de ejecutar el proyecto, necesitas:  
1. **Cuenta en Azure**:  
   - Crea una cuenta en [Azure](https://azure.microsoft.com/).  
   - Configura un proyecto en **Azure Custom Vision**.  
   - Entrena un modelo para reconocer los personajes de Cartoon Network.  
   - Obtén el **endpoint** y la **clave de predicción** desde el portal de Azure.  

2. **Cuenta en Cloudinary**:  
   - Regístrate en [Cloudinary](https://cloudinary.com/).  
   - Crea un nuevo entorno y obtén la URL de conexión (formato `cloudinary://API_KEY:API_SECRET@CLOUD_NAME`).  

3. **Node.js**:  
   - Asegúrate de tener instalado [Node.js](https://nodejs.org/).  

