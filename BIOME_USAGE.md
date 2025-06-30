# Biome.js - Guía de Uso

Este proyecto está configurado con Biome.js para formateo, linting y organización de imports.

## Comandos Disponibles

### Formateo de Código
```bash
# Formatear todos los archivos y guardar cambios
npm run format

# Verificar formato sin hacer cambios
npm run format:check
```

### Linting con Biome
```bash
# Lintear todos los archivos y aplicar correcciones seguras
npm run lint:biome

# Verificar linting sin hacer cambios
npm run lint:biome:check
```

### Comando Completo (Formateo + Linting + Organización de Imports)
```bash
# Ejecutar todas las operaciones y guardar cambios
npm run check

# Verificar todo sin hacer cambios
npm run check:verify
```

## Configuración

- **Formateo**: 2 espacios de indentación, 80 caracteres por línea
- **Comillas**: Dobles para strings
- **Punto y coma**: Siempre al final de las declaraciones
- **Comas finales**: Estilo ES5

## Integración con Vite y TypeScript

Biome está configurado para trabajar perfectamente con:
- ✅ React 19
- ✅ TypeScript
- ✅ Vite
- ✅ ESLint (complementario)

## Archivos Ignorados

Los siguientes archivos/directorios son ignorados por Biome:
- `node_modules/`
- `dist/`
- `build/`
- `.vite/`
- Archivos minificados (`.min.js`, `.min.css`)
- Archivos de lock de package managers

## Recomendación de Flujo de Trabajo

1. **Durante desarrollo**: Usa `npm run check` antes de hacer commit
2. **En CI/CD**: Usa `npm run check:verify` para verificar sin cambios
3. **Formateo rápido**: Usa `npm run format` para solo formatear
4. **Linting específico**: Usa `npm run lint:biome` para solo linting 