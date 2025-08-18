import emenails from '../../../../public/emenails.webp';
import pricify from '../../../../public/pricify.webp';
import stargaze from '../../../../public/stargaze.webp';
import coffeShop from '../../../../public/coffee-shop.webp';

export const projects = [
	{
		title: 'Coffee Shop',
		description:
			'Plantilla web estática — Moderna, rápida y lista para personalizar en minutos. Incluye secciones clave: Inicio impactante, Catálogo de productos con precios y "Nosotros" para conectar con tu historia. Ideal para emprendedores que buscan presencia online.',
		href: 'https://demo-static-codefex.vercel.app/',
		image: coffeShop,
		tags: ['Reactjs', 'SASS'],
	},
	{
		title: 'Stargaze',
		description:
			'Explorador interactivo de imágenes astronómicas que consume la API de la NASA para mostrar diariamente una nueva fotografía del espacio con su descripción detallada. Implementé un buscador eficiente que permite explorar el archivo histórico de imágenes de la agencia espacial, con un diseño responsive que se adapta perfectamente a cualquier dispositivo.',
		href: 'https://stargaze-n.netlify.app',
		image: stargaze,
		tags: ['Reactjs', 'SASS'],
	},
	{
		title: 'Pricify',
		description:
			'Aplicación web para gestión de inventarios que utiliza Firebase como solución backend, permitiendo a negocios administrar sus productos, precios y márgenes de ganancia. Desarrollé toda la lógica frontend en React, implementando un sistema completo de autenticación, registro de productos con sus respectivos precios y cantidades, y dos tipos de calculadoras especializadas. La integración con una API de cotización del dólar añade funcionalidad adicional para negocios que necesitan actualizar precios según fluctuaciones del mercado.',
		href: 'https://pricify.netlify.app',
		image: pricify,
		tags: ['Reactjs', 'SASS', 'Firebase'],
	},
	{
		title: 'EMENails',
		description:
			'Sitio web profesional para un centro de belleza desarrollado como proyecto freelance, con un diseño completamente responsive que prioriza la experiencia móvil. Integré un sistema de contacto directo vía WhatsApp para agilizar la comunicación con los clientes, junto con un mapa interactivo que muestra la ubicación exacta del local.',
		href: 'https://emenails.netlify.app',
		image: emenails,
		tags: ['Reactjs', 'SASS'],
	},
];
