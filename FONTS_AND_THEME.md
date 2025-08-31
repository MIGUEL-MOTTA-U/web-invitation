# Fuentes y Tema del Proyecto

## Fuentes Disponibles

### 1. Lora (Fuente Principal)
- **Familia**: `font-lora` o `font-serif`
- **Uso**: Fuente principal para todo el texto del proyecto
- **Estilos**: Regular (400), Medium (500), SemiBold (600), Bold (700)
- **Itálicas**: Disponibles en todos los pesos

### 2. Liana (Fuente Decorativa)
- **Familia**: `font-liana`
- **Uso**: Títulos especiales, elementos decorativos
- **Archivo**: `/public/fonts/Liana/liana.ttf`

### 3. Caveat (Fuente Manuscrita)
- **Familia**: `font-caveat`
- **Uso**: Textos especiales, firmas, elementos artísticos
- **Pesos**: 400-700

### 4. Press Start 2P (Fuente Monoespaciada)
- **Familia**: `font-press-start`
- **Uso**: Códigos, elementos técnicos, efectos especiales

## Clases de Utilidad para Fuentes

```tsx
// Ejemplos de uso
<h1 className="font-liana text-4xl">Título Principal</h1>
<p className="font-lora text-lg">Texto del cuerpo</p>
<span className="font-caveat text-xl">Texto especial</span>
<code className="font-press-start text-sm">Código</code>
```

## Tema de Colores

### Colores Primarios (Negros)
- **50-400**: Escalas de grises claros
- **500-700**: Grises medios
- **800-900**: Grises oscuros
- **DEFAULT**: Negro puro (#000000)

### Colores Secundarios (Blancos)
- **50-400**: Escalas de grises claros
- **500-700**: Grises medios
- **800-900**: Grises oscuros
- **DEFAULT**: Blanco puro (#ffffff)

## Clases de Utilidad para Colores

```tsx
// Texto
<p className="text-primary">Texto negro</p>
<p className="text-secondary">Texto blanco</p>

// Fondos
<div className="bg-primary">Fondo negro</div>
<div className="bg-secondary">Fondo blanco</div>

// Bordes
<div className="border border-primary">Borde negro</div>
<div className="border border-secondary">Borde blanco</div>
```

## Variables CSS Personalizadas

El proyecto incluye variables CSS personalizadas que puedes usar directamente:

```css
/* En tu CSS */
.mi-clase {
  color: var(--color-primary);
  background-color: var(--color-secondary);
}
```

## Configuración en Tailwind

Los colores están configurados en `tailwind.config.js` y puedes usar las clases estándar de Tailwind:

```tsx
// Ejemplos con clases Tailwind
<button className="bg-primary text-secondary hover:bg-primary-800">
  Botón Negro
</button>

<div className="bg-secondary text-primary border border-primary">
  Contenedor Blanco con Borde Negro
</div>
```

## Aplicación Automática

- **Fuente base**: Lora se aplica automáticamente a todo el proyecto
- **Colores**: Los componentes de HeroUI usarán automáticamente el tema personalizado
- **Responsive**: Todas las fuentes y colores son responsive por defecto

## Ejemplos de Uso en Componentes

```tsx
// Título principal con fuente Liana
<h1 className="font-liana text-5xl text-primary text-center">
  Nos Casamos
</h1>

// Texto del cuerpo con fuente Lora
<p className="font-lora text-lg text-primary leading-relaxed">
  Te invitamos a celebrar nuestra boda
</p>

// Botón con tema personalizado
<Button 
  className="bg-primary text-secondary hover:bg-primary-800"
  variant="shadow"
>
  Confirmar Asistencia
</Button>
```
