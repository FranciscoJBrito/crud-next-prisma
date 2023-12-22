# Limetask
Limetask es un proyecto open source diseñado para la gestión de tareas y proyectos, con funcionalidades similares a Trello. Facilita la organización y seguimiento de tareas en un entorno colaborativo.

# Instalación
## Sin Docker
Clona el repositorio:
`git clone https://github.com/tu-usuario/limetask.git`

Instala las dependencias:
`npm install`

Ejecuta las migraciones de la base de datos:
`npx prisma migrate dev`

Inicia el servidor:
`npm run dev`

## Con Docker
Construye la imagen Docker:
`docker build -t limetask .`

Ejecuta el contenedor:
`docker run limetask`

# Tecnologías Utilizadas
* TypeScript
* Prisma ORM
* Next.js
* Tailwind CSS

#Contribuciones
¡Contribuciones son bienvenidas! Si deseas contribuir al proyecto, sigue estos pasos:

Haz un fork del repositorio.
Crea una rama para tu contribución: git checkout -b feature/nueva-funcionalidad.
Realiza tus cambios y haz commit: git commit -m "Añadir nueva funcionalidad".
Haz push a tu rama: git push origin feature/nueva-funcionalidad.
Abre un Pull Request en GitHub.

# Licencia
Este proyecto está bajo la licencia MIT.