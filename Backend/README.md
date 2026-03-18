# Backend API - Test Wiber

Este es el backend de la aplicación **Test Wiber**, desarrollado con **FastAPI** y **MongoDB**. Proporciona una API REST para gestionar scripts, incluyendo operaciones CRUD y control de versiones.

## Características

- **Framework**: FastAPI para APIs rápidas y modernas.
- **Base de datos**: MongoDB con Motor para operaciones asíncronas.
- **Autenticación y validación**: Usando Pydantic para modelos de datos.
- **Documentación automática**: Disponible en `/docs` (Swagger UI) y `/redoc`.
- **CORS habilitado**: Para integración con frontends.
- **Control de versiones**: Para scripts, con historial de cambios.

## Requisitos

- **Python**: 3.8 o superior.
- **MongoDB**: Una instancia de MongoDB corriendo (local o en la nube, ej. MongoDB Atlas).
- **Dependencias**: Ver `requirements.txt`.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/FedeCasper/test-wiber.git
   cd test-wiber/Backend
   ```

2. Crea un entorno virtual:
   ```bash
   python -m venv venv
   ```

3. Activa el entorno virtual:
   - En Windows (PowerShell): `.\venv\Scripts\Activate`
   - En Linux/Mac: `source venv/bin/activate`

4. Instala las dependencias:
   ```bash
   pip install -r requirements.txt
   ```

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto con las variables de entorno necesarias:
   ```
   MONGODB_URL=mongodb://localhost:27017/test-wiber
   # O para MongoDB Atlas: mongodb+srv://usuario:password@cluster.mongodb.net/test-wiber
   ```

2. Asegúrate de que MongoDB esté corriendo y accesible.

## Ejecución

### Modo desarrollo (con recarga automática):
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Modo producción:
```bash
uvicorn main:app --host 0.0.0.0 --port 8000
```

La aplicación estará disponible en:
- **API**: http://127.0.0.1:8000
- **Documentación Swagger**: http://127.0.0.1:8000/docs
- **Documentación ReDoc**: http://127.0.0.1:8000/redoc

## Endpoints

### Scripts

- **GET /scripts/**: Obtiene todos los scripts.
- **POST /scripts/**: Crea un nuevo script (genera versión automáticamente).
- **PUT /scripts/{script_id}/**: Actualiza un script (incrementa versión y guarda historial).
- **DELETE /scripts/{id}**: Elimina un script.
- **GET /scripts/{script_id}/versions**: Obtiene el historial de versiones de un script.

### Filtros

- **GET /filteredScripts/?equipment={equipo}**: Filtra scripts por equipo.

## Estructura del Proyecto

```
Backend/
├── main.py                 # Punto de entrada de la aplicación
├── requirements.txt        # Dependencias del proyecto
├── Dockerfile              # Para contenedorización
├── .env                    # Variables de entorno (no subir a Git)
├── config/
│   ├── __init__.py
│   └── database.py         # Configuración de MongoDB
├── models/
│   ├── __init__.py
│   └── scripts.py          # Modelos Pydantic
├── routes/
│   ├── __init__.py
│   └── route.py            # Definición de endpoints
├── schema/
│   ├── __init__.py
│   └── schemas.py          # Funciones de serialización
└── venv/                   # Entorno virtual (ignorado en Git)
```

## Modelo de Datos

### Script
- `name`: str
- `content`: str
- `equipment`: str
- `version`: str (generada automáticamente)
- `created_at`: datetime (opcional)

### VersionHistory
- `script_id`: str
- `versions`: list[str]

## Contribución

1. Crea una rama para tu feature: `git checkout -b feature/nueva-funcionalidad`
2. Realiza tus cambios y commits.
3. Envía un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## Contacto

- **Autor**: Federico Casper
- **Repositorio**: https://github.com/FedeCasper/test-wiber

---

¡Disfruta desarrollando con FastAPI!</content>
<parameter name="filePath">d:\Federico\Developer\Repositories\test-wiber\Backend\README.md