# PROJECT_CONTEXT.md

## 1. Descripción del proyecto

Portal web corporativo para **IT & Security Consultores Ltda.**, empresa colombiana especializada en servicios de ciberseguridad para empresas (modelo B2B).

El sitio corresponde a un **MVP (Producto Mínimo Viable)** cuyo propósito es validar y fortalecer la presencia digital de la empresa y servir como canal principal de generación de leads comerciales.

---

## 2. Objetivo principal

Generar **leads comerciales B2B válidos** (empresas interesadas en servicios de ciberseguridad).

---

## 3. Objetivos secundarios

* Reforzar el posicionamiento de marca
* Aumentar la credibilidad
* Comunicar claramente los servicios
* Facilitar el contacto comercial

---

## 4. Tipo de sitio

* Sitio 100% informativo
* Enfoque corporativo y comercial
* No transaccional
* Todo el contenido es público

---

## 5. Público objetivo

Empresas en Colombia que requieren servicios de:

* Seguridad informática
* Evaluación de vulnerabilidades
* Protección de infraestructura tecnológica

El sitio está orientado exclusivamente a **clientes empresariales (B2B)**.

---

## 6. Stack tecnológico

* Astro.js
* Tailwind CSS
* Deploy en Vercel o similar
* Sitio estático (SSG)

---

## 7. Restricciones técnicas (CRÍTICO)

El proyecto DEBE cumplir estrictamente:

* No usar bases de datos
* No implementar autenticación
* No manejar sesiones de usuario
* No almacenar datos sensibles
* No backend complejo
* No APIs innecesarias

El sitio debe ser lo más estático posible.

---

## 8. Conversión (elemento central del negocio)

El objetivo del sitio NO es informar únicamente.

El objetivo es:

> Convertir visitantes en leads comerciales

Por lo tanto:

* Debe haber llamados a la acción (CTA) claros
* El contacto principal es **WhatsApp**
* El botón de WhatsApp debe estar visible en todo momento
* El contenido debe guiar hacia el contacto

---

## 9. Mecanismo de contacto

Único canal principal:

* WhatsApp (mediante enlace directo con mensaje predefinido)

Opcionales (secundarios):

* Correo
* Teléfono

NO se deben implementar formularios complejos ni almacenamiento de datos.

---

## 10. Estructura del sitio

El sitio debe incluir las siguientes páginas:

* `/` → Home
* `/nosotros` → Información institucional
* `/servicios` → Catálogo de servicios
* `/casos-exito` → Casos reales
* `/partners` → Aliados y marcas
* `/contacto` → Canales de contacto

---

## 11. Arquitectura del código

Estructura esperada:

* `components/` → Componentes reutilizables
* `layouts/` → Layout base
* `pages/` → Páginas del sitio
* `data/` → Contenido estático (servicios, casos, partners)

---

## 12. Principios de desarrollo

* Código simple y legible
* Componentes reutilizables
* Evitar sobreingeniería
* Priorizar claridad sobre complejidad
* Mantener consistencia visual y estructural

---

## 13. UX / UI (muy importante)

El diseño debe ser:

* Corporativo
* Moderno
* Limpio
* Profesional
* Enfocado en confianza

Evitar:

* Diseños recargados
* Animaciones innecesarias
* Elementos distractores

---

## 14. Tono de comunicación

* Formal
* Profesional
* Corporativo
* Claro (evitar tecnicismos excesivos)
* Orientado a negocio

---

## 15. Contenido

El contenido debe:

* Explicar claramente los servicios
* Generar confianza
* Mostrar experiencia
* Facilitar la toma de decisión

---

## 16. Casos de éxito

* Deben ser reales
* Textos breves
* Enfocados en resultados
* Orientados a credibilidad

---

## 17. Partners

* Mostrar logos de aliados
* Refuerzan confianza
* No saturar visualmente

---

## 18. SEO básico

* Uso correcto de títulos (H1, H2, H3)
* Meta descriptions
* Buen performance
* Optimización para móvil

---

## 19. Seguridad (CRÍTICO)

Dado el sector (ciberseguridad), el sitio debe:

* Minimizar superficie de ataque
* Evitar cualquier funcionalidad innecesaria
* No exponer datos sensibles
* No implementar lógica compleja en frontend

---

## 20. Exclusiones explícitas

NO implementar:

* Login / autenticación
* Panel de usuarios
* Blog o CMS complejo
* Sistema de tickets
* Integraciones con sistemas internos
* Automatizaciones avanzadas

---

## 21. Escalabilidad futura (referencia, no implementar ahora)

En el futuro se podría incluir:

* Portal de clientes
* Reportes
* Renovaciones
* Contenido privado

Estas funcionalidades NO deben desarrollarse en el MVP.

---

## 22. Regla de oro

Si una funcionalidad:

* No ayuda a generar leads
* Aumenta complejidad innecesaria
* Incrementa riesgo de seguridad

→ NO debe implementarse
