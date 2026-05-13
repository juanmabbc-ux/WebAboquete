# Aboquete — Contexto del Repositorio

> **Idioma:** Este documento está en español porque es un entregable operativo para el equipo de Aboquete.
> Las conversaciones de desarrollo entre el consultor y Claude se llevan en inglés.

---

## 1. Sobre la Empresa

**Aboquete S.A.** — *Siempre Verde*

- **Fundación:** Año 2000 (~25+ años en la agroindustria)
- **Origen:** Chiriquí, Panamá
- **Operaciones actuales:** Ciudad de Panamá (Chanis, Hipódromo Presidente Remón)
- **Giro:** Producción y comercialización de enmiendas orgánicas para suelo, sustratos y fertilizantes a base de caballaza compostada
- **Clientes:** Productores agrícolas, viveros, constructoras, cadenas comerciales, hogares
- **Alcance:** Nacional (Panamá) con capacidad de exportación (FOB Panamá)

### Datos Legales

| Campo | Valor |
|---|---|
| Razón social | Aboquete S.A. |
| RUC | 164705-1-388664 DV80 |
| ITBMS | Exento — Cert. N° 967000028026 |
| Registro MIDA | N° 2253 |
| Respaldo científico | SENACYT-CECOM (Proyecto DINE-028-2023) |
| Aviso de Operación | MICI vigente |

### Contacto

| Canal | Detalle |
|---|---|
| Teléfono / WhatsApp | +507 6645-7828 |
| Web | www.aboquete.com |
| Instagram | @aboquete |
| Email | info@aboquete.com |
| Dirección | Chanis, Hipódromo Presidente Remón, Ciudad de Panamá |

---

## 2. Propuesta de Valor

- **100% orgánico:** sin químicos sintéticos ni hormonas
- **Producción local panameña:** materias primas de procedencia nacional
- **Respaldo científico:** avalado por SENACYT-CECOM y registrado ante MIDA
- **Agricultura regenerativa:** mejora la salud del suelo, aumenta biodiversidad, contribuye al secuestro de carbono
- **Flexibilidad de volumen:** desde bolsas de 5 lbs hasta volquetes completos

---

## 3. Materia Prima Estrella — Caballaza

La base de todos los productos Aboquete es la **caballaza compostada** (estiércol de caballo procesado). Beneficios clave:

- Mejora la estructura del suelo (aireación y retención de humedad)
- Aporta materia orgánica e incrementa la actividad biológica
- Favorece el desarrollo radicular
- Enriquece el suelo con nitrógeno, fósforo y potasio en forma orgánica

Las materias primas provienen de asociaciones directas con trabajadores y productores panameños.

---

## 4. Catálogo de Productos

### 4.1 Productos Empacados (Jardín, Hogar y Agricultura)

#### Abono Orgánico
- **Descripción:** Caballaza 100% compostada — fertilizante orgánico puro
- **Composición:** M.O. 40.75% · N 2.37% · P₂O₅ 3.12% · Ca 2.87%
- **Uso:** Ornamentales, frutales, hortalizas y semilleros
- **Presentaciones:** 5 lbs (2.3 kg), 100 lbs (45.4 kg)

#### Tierra Negra
- **Descripción:** Tierra preparada — aluvión de río + caballaza + cascarilla de arroz
- **Uso:** Trasplantes, macetas, jardines y huertos caseros
- **Presentaciones:** 15 lbs (6.8 kg), 100 lbs (45.4 kg)

#### Humus de Lombriz
- **Descripción:** Vermicompost puro — Lombriz Roja Californiana (Eisenia fetida)
- **Características:** Nutrientes de liberación lenta, enzimas, ácidos húmicos, microorganismos benéficos
- **Uso:** Germinación, enraizamiento y crecimiento vegetal
- **Presentaciones:** 8 lbs (3.6 kg)

#### Cascarilla de Arroz
- **Descripción:** Sustrato inerte solarizado — alta porosidad y drenaje
- **Características:** Alto contenido de sílice y potasio, ligera, larga durabilidad
- **Uso:** Mezclas de sustratos, semilleros y cultivos en contenedor
- **Presentaciones:** 6 lts, 80 lts

#### Aluvión de Río
- **Descripción:** Arena hortícola natural — granulometría fina a media
- **Uso:** Suculentas, cactus, semilleros y mezclas de sustrato
- **Presentaciones:** 8 lbs, 100 lbs

#### Enmienda Agrícola (Mayoreo / Exportación)
- **Descripción:** Caballaza compostada — formato mayoreo y exportación
- **Composición:** M.O. 40.75% · N 2.37% · P₂O₅ 3.12%
- **Logística:** Pallet de 25 sacos ≈ 1.13 t · Entrega FOB Panamá
- **Presentaciones:** Saco 100 lbs, Pallet 25 sacos

### 4.2 Productos a Granel (Pedidos por Volquete)

| Producto | Fórmula | Uso Principal |
|---|---|---|
| Enmienda Agrícola Orgánica a Granel | Caballaza compostada | Fincas, viveros, paisajismo, reforestación |
| Tierra Negra Preparada a Granel | Aluvión + caballaza + cascarilla | Jardines, huertos, camas elevadas, paisajismo |
| Tierra Especializada para Césped | Tierra negra + abono orgánico + arena aluvial | Canchas, jardines, áreas verdes, campos deportivos |

> Los productos a granel se cotizan según volumen y zona de entrega.

### 4.3 Otros Productos (referencia de presentación)

- **Potting Mix** — 15 lbs (visible en presentación comercial)

---

## 5. Estructura del Repositorio

```
aboquete/
├── context.md                  ← Este archivo
├── resources/                  ← Materiales de referencia de la empresa
│   ├── ABOQUETE_Catalogo_Productos_2026_1.pdf
│   ├── Presentacion_Aboquete.pdf
│   └── (logo, imágenes de producto, etc.)
├── dashboards/                 ← Dashboards financieros y operativos
├── automations/                ← Scripts de automatización (Python, Apps Script)
├── data-models/                ← Esquemas de datos, modelos para Sheets/DB
├── integrations/               ← Integraciones con Google Sheets API, etc.
├── docs/                       ← Documentación técnica y de procesos
└── README.md                   ← Guía rápida del repositorio
```

---

## 6. Stack Técnico y Lineamientos

### Lenguajes y Herramientas
- **Python** como lenguaje principal (pandas, gspread, etc.)
- **PySpark** solo cuando el volumen de datos lo justifique
- **Google Sheets / Google Apps Script** para automatizaciones in-Sheet
- **Google Sheets API** (vía `gspread` o cliente oficial) para integración programática
- **Dashboards v1:** Google Sheets / Looker Studio → escalar a Streamlit o Dash cuando sea necesario

### Estándares de Código
- Comentarios claros y type hints donde sea útil
- Estructurar datos pensando en migración futura a Postgres o BigQuery
- Variables de entorno para credenciales (nunca hardcoded, nunca en Sheets)

### Seguridad (No Negociable)
- Datos sensibles (clientes, proveedores, finanzas, empleados) **nunca** en herramientas de terceros no verificadas
- Usar datos sintéticos o anonimizados para demos y pruebas
- Para features con IA: arquitecturas donde los datos se queden en el workspace del cliente o en servicios con políticas claras de retención
- Principio de mínimo privilegio en API keys, service accounts y credenciales compartidas

---

## 7. Áreas de Trabajo y Prioridades

### Prioridad 1 — Dashboards y Reportes Financieros
- Revenue, costos, márgenes, flujo de caja
- Visibilidad para que Mauricio tome decisiones informadas

### Prioridad 2 — Inventario y Producción
- Tracking de materias primas (caballaza, cascarilla, aluvión)
- Mezclas de producto y producto terminado
- Alertas de stock bajo

### Prioridad 3 — Ventas y Clientes
- Registro de ventas por producto, presentación y canal
- Gestión básica de clientes

### Prioridad 4 — Automatizaciones Generales
- Eliminar trabajo manual repetitivo en Excel/Sheets
- Templates de cotización y facturación
- Notificaciones y alertas

---

## 8. Principios de Trabajo

1. **Quick wins primero:** soluciones que ahorren horas esta semana, no arquitecturas perfectas que paguen en 6 meses
2. **Bajo costo:** herramientas gratuitas o de bajo costo (Google Workspace, open-source, free tiers)
3. **Escalable sin sobre-ingeniería:** estructurar para sobrevivir una migración de Sheets a DB real
4. **Educativo:** explicar el "por qué" de cada decisión técnica

---

## 9. Idiomas

| Contexto | Idioma |
|---|---|
| Conversaciones de desarrollo (consultor ↔ Claude) | Inglés |
| Entregables para Mauricio y su equipo | Español (panameño) |
| Código (variables, funciones, comentarios técnicos) | Inglés |
| UI, reportes, dashboards, documentación de usuario | Español |

---

*Última actualización: Mayo 2026*
