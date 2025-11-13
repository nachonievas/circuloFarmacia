# Carpeta de Assets

Esta carpeta contiene todos los recursos estáticos del proyecto.

## Estructura:

- `/images` - Todas las imágenes (logos, fotos, iconos, etc.)

## Instrucciones:

1. Agregá tu logo de la farmacia en la carpeta `images/`
2. Podés nombrarlos como: `logo.png`, `logo.svg`, etc.
3. Para usar las imágenes en los componentes, importalas así:

```jsx
import logo from "../assets/images/logo.png";

// Luego en tu componente:
<img src={logo} alt="Logo Farmacia El Círculo" />;
```

## Formatos recomendados:

- Logo: `.svg` o `.png` con fondo transparente
- Fotos: `.jpg` o `.webp`
- Iconos: `.svg`
