export type SolutionItem = {
	name: string;
	slug: string;
	path: string;
	description: string;
	highlights: string[];
};

export type SolutionCategory = {
	name: string;
	slug: string;
	path: string;
	description: string;
	highlights: string[];
	items: SolutionItem[];
};

export const whatsappHref = "https://wa.me/";

export const solutionCategories: SolutionCategory[] = [
	{
		name: "Seguridad endpoint",
		slug: "seguridad-endpoint",
		path: "/soluciones/categoria/seguridad-endpoint",
		description:
			"Proteja estaciones de trabajo, portátiles y servidores con controles preventivos, visibilidad centralizada y capacidad de respuesta ante amenazas.",
		highlights: [
			"Protección avanzada contra malware y ransomware",
			"Administración centralizada para entornos corporativos",
			"Políticas de seguridad alineadas con la operación del negocio",
		],
		items: [
			{
				name: "Kaspersky Endpoint Security",
				slug: "kaspersky-endpoint-security",
				path: "/soluciones/kaspersky-endpoint-security",
				description:
					"Seguridad multicapa para endpoints corporativos con control de amenazas, administración centralizada y soporte para entornos empresariales exigentes.",
				highlights: [
					"Defensa contra ransomware, exploits y amenazas avanzadas",
					"Consola para despliegue, monitoreo y control centralizado",
					"Visibilidad para fortalecer la postura de seguridad del endpoint",
				],
			},
			{
				name: "ESET Endpoint Security",
				slug: "eset-endpoint-security",
				path: "/soluciones/eset-endpoint-security",
				description:
					"Protección ligera y eficiente para equipos corporativos, ideal para organizaciones que requieren seguridad de alto rendimiento sin afectar la productividad.",
				highlights: [
					"Detección proactiva con bajo impacto en el rendimiento",
					"Control centralizado para endpoints distribuidos",
					"Capacidades para prevenir malware, phishing y accesos no deseados",
				],
			},
			{
				name: "Bitdefender GravityZone",
				slug: "bitdefender-gravityzone",
				path: "/soluciones/bitdefender-gravityzone",
				description:
					"Plataforma unificada para proteger endpoints físicos y virtuales con automatización, analítica y controles empresariales de alto nivel.",
				highlights: [
					"Protección avanzada con aprendizaje automático y analítica",
					"Cobertura para equipos, servidores y cargas virtualizadas",
					"Administración simplificada desde una sola consola",
				],
			},
		],
	},
	{
		name: "Protección de correo electrónico",
		slug: "proteccion-correo-electronico",
		path: "/soluciones/categoria/proteccion-correo-electronico",
		description:
			"Reduzca el riesgo de phishing, malware y fuga de información con capas especializadas para proteger el canal de correo corporativo.",
		highlights: [
			"Bloqueo de amenazas antes de llegar al usuario final",
			"Controles de reputación, sandboxing y políticas de filtrado",
			"Mayor continuidad operativa frente a campañas maliciosas",
		],
		items: [
			{
				name: "FortiMail",
				slug: "fortimail",
				path: "/soluciones/fortimail",
				description:
					"Seguridad de correo empresarial con filtrado antispam, antimalware y protección contra amenazas dirigidas para entornos corporativos.",
				highlights: [
					"Defensa contra phishing, spam y malware avanzado",
					"Integración con ecosistemas de seguridad perimetral",
					"Políticas de cumplimiento y protección de información sensible",
				],
			},
			{
				name: "Kaspersky Security for Office 365",
				slug: "kaspersky-security-for-office-365",
				path: "/soluciones/kaspersky-security-for-office-365",
				description:
					"Protección especializada para Microsoft 365 con foco en correo, colaboración y defensa contra archivos y enlaces maliciosos.",
				highlights: [
					"Protección adicional para Exchange Online y servicios colaborativos",
					"Análisis de adjuntos y enlaces sospechosos",
					"Mayor visibilidad sobre riesgos en el ecosistema Microsoft 365",
				],
			},
		],
	},
	{
		name: "Seguridad Perimetral",
		slug: "seguridad-perimetral",
		path: "/soluciones/categoria/seguridad-perimetral",
		description:
			"Fortalezca el borde de su red con inspección, segmentación y control del tráfico para reducir superficie de ataque y elevar la continuidad operativa.",
		highlights: [
			"Visibilidad y control del tráfico de red",
			"Aplicación de políticas de acceso y segmentación",
			"Protección integral para sedes, oficinas y usuarios remotos",
		],
		items: [
			{
				name: "FortiGate",
				slug: "fortigate",
				path: "/soluciones/fortigate",
				description:
					"Firewall de nueva generación para empresas que buscan consolidar seguridad perimetral, conectividad segura y control avanzado del tráfico.",
				highlights: [
					"Firewall, VPN e inspección avanzada en una sola plataforma",
					"Segmentación y control granular de aplicaciones y usuarios",
					"Escalabilidad para oficinas, sedes y crecimiento corporativo",
				],
			},
		],
	},
	{
		name: "Patch Management",
		slug: "patch-management",
		path: "/soluciones/categoria/patch-management",
		description:
			"Minimice vulnerabilidades conocidas con procesos de descubrimiento, evaluación y despliegue controlado de actualizaciones de seguridad.",
		highlights: [
			"Identificación de activos y vulnerabilidades pendientes",
			"Priorización de remediación según riesgo operativo",
			"Mejora continua de la higiene de seguridad corporativa",
		],
		items: [
			{
				name: "GFI LanGuard",
				slug: "gfi-languard",
				path: "/soluciones/gfi-languard",
				description:
					"Solución para gestión de parches y evaluación de vulnerabilidades que ayuda a mantener infraestructura y endpoints actualizados.",
				highlights: [
					"Descubrimiento de activos y brechas de actualización",
					"Evaluación de vulnerabilidades desde una consola central",
					"Soporte para fortalecer procesos de remediación y cumplimiento",
				],
			},
		],
	},
	{
		name: "Backup y Continuidad del Negocio",
		slug: "backup-continuidad-negocio",
		path: "/soluciones/categoria/backup-continuidad-negocio",
		description:
			"Proteja información crítica y asegure recuperación oportuna con estrategias de respaldo y continuidad adaptadas a la realidad de su empresa.",
		highlights: [
			"Respaldo de datos críticos y cargas de trabajo clave",
			"Recuperación ante incidentes, errores o ataques ransomware",
			"Mayor resiliencia para la operación del negocio",
		],
		items: [
			{
				name: "Acronis Backup",
				slug: "acronis-backup",
				path: "/soluciones/acronis-backup",
				description:
					"Plataforma de respaldo y recuperación para organizaciones que necesitan proteger datos, sistemas y continuidad operativa.",
				highlights: [
					"Backups confiables para servidores, equipos y cargas críticas",
					"Recuperación ágil ante incidentes o pérdida de información",
					"Enfoque en continuidad del negocio y resiliencia operativa",
				],
			},
		],
	},
];

export const allSolutions = solutionCategories.flatMap((category) =>
	category.items.map((item) => ({
		...item,
		categoryName: category.name,
		categorySlug: category.slug,
		categoryPath: category.path,
		categoryDescription: category.description,
		categoryHighlights: category.highlights,
	})),
);

export const getCategoryBySlug = (slug: string) =>
	solutionCategories.find((category) => category.slug === slug);

export const getSolutionBySlug = (slug: string) => allSolutions.find((solution) => solution.slug === slug);
