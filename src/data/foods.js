export default [
	{
		name: "broccoli",
		label: "Brocoli",
		unit: "g",
		picture: require('./img/broccoli.png'),
		description: "Cuits à l'eau ou à la vapeur",
		macros: {
			base: "100",
			energy: "22.8",
			proteins: "2.1",
			lipids: "0.78",
			carbohydrats: "1.1"
		}
	},
	{
		name: "chickenBreast",
		label: "Poulet",
		unit: "g",
		picture: require('./img/chickenBreast.png'),
		description: "Filets de poulet cuits",
		macros: {
			base: "100",
			energy: "137",
			proteins: "29.2",
			lipids: "1.76",
			carbohydrats: "1.2"
		}
	},
	{
		name: "pasta",
		label: "Pâtes",
		unit: "g",
		picture: require('./img/pasta.png'),
		description: "Pâtes standard cuites",
		macros: {
			base: "100",
			energy: "126",
			proteins: "3.99",
			lipids: "0.55",
			carbohydrats: "25"
		}
	},
	{
		name: "brownRice",
		label: "Riz",
		unit: "g",
		picture: require('./img/brownRice.png'),
		description: "Riz complet cuit",
		macros: {
			base: "100",
			energy: "158",
			proteins: "3.21",
			lipids: "1",
			carbohydrats: "32.6"
		}
	},
	{
		name: "friedEgg",
		label: "Oeufs",
		unit: "g",
		picture: require('./img/friedEgg.png'),
		description: "Oeufs au plat (calibre moyen) sans matière grasse",
		macros: {
			base: "100",
			energy: "147",
			proteins: "13.8",
			lipids: "9.72",
			carbohydrats: "1.01"
		}
	}
]