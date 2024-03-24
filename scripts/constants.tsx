export const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/details", label: "Details" },
    { href: "/products", label: "Products" }, // note: maybe not for regionals. API > ?
    { href: "/gaia", label: "GAIA" },
    { href: "/news", label: "News" }
];

export const SOURCE_LINKS = [
    { href: "https://www.eia.gov/", label: "EIA"},
    { href: "https://www.iea.org/", label: "IEA"},
    { href: "https://www.weforum.org/", label: "WEF"},
    { href: "https://www.epa.gov/", label: "EPA"},
    { href: "https://www.irs.gov/", label: "IRS"},
    { href: "https://www.nationalgrid.com/", label: "National Grid"},
    { href: "https://www.energy.gov/", label: "Department of Energy"},
    { href: "https://www.nrel.gov/", label: "NREL"},
    { href: "https://www.energystar.gov/", label: "EnergyStar"},
];

export const CAROUSEL_CONTENT = [
    { title: "SOLAR", image: "/carousel/solar.jpg", content: `Solar energy works by converting energy from the sun into power. There are two types of solar energy that can be used by homeowners: heat and electricity. Solar PV panels generate electricity, while solar thermal panels generate heat; installing solar PV panels helps offset most home energy needs, while solar thermal panels allow you to offset home heating energy.\n\nAverage cost: $38,000 for a 10 kW system\nAverage time to install: 2 days`},
    { title: "WIND", image: "/carousel/wind.jpg", content: "Wind energy is created using a wind turbine, which channels wind power to create electricity. The blades of a turbine are attached to a rotor that spins to generate electricity. Before installing a small home wind system, you must keep in mind the amount of wind you receive as well as zoning requirements. For the average home using ~10,650 kW annually, a wind turbine in the range of 5-15 kW will be needed to make a significant contribution.\n\nAverage cost: $60,000 for a 10 kW system\nAverage time to install: Varies"},
    { title: "GEOTHERMAL", image: "/carousel/geothermal.webp", content: "Geothermal energy is heat energy from the Earth from hot water underground. For homeowners, geothermal heat pumps are the most common method of harnessing geothermal energy and can heat/cool the house as well as supply it with hot water, if so equipped. There are 4 types of geothermal pump systems: horizontal, vertical, pond/lake, and open-loop. For residential homes, a horizontal pumping system works best and is most cost-effective. Before installation, you must factor in how much land you have.\n\nAverage cost: $25,000 for horizontal pumps\nAverage time to install: 2 days"},
    { title: "HYDROELECTRIC", image: "/carousel/hydroelectric.jpeg", content: "Hydroelectric power uses a dam to alter the flow of a river or other body of water. The water is then used to spin the blades of a turbine, generating electricity. If you have water flowing through your property, you might consider building a small hydropower - micro-hydropower -system. A micro-hydropower system can provide enough power for all home electricity needs and is a more affordable method of green energy.\n\nAverage cost: $20,000 for a 10 kW system\nAverage time to install: Varies"},
    { title: "BIOMASS", image: "/carousel/biomass.png", content: "Biomass is renewable organic material from animals and plants. It can be directly burnt to produce heat, converted to produce fuel, or used to generate electricity through steam turbines. Decomposing biomass emits a methane-rich product called bio-gas, which can even be used in stoves to cook food; biomass stoves/boilers are a popular option for homeowners.\n\nAverage cost: $21,000 for stove + boiler\nAverage time to install: 1 day"},
];

export const CARD_CONTENT = [
    { svg: `
        <svg width="186" height="126" viewBox="0 0 186 126" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="81.0674" y="115.329" width="28.0536" height="7.71474" rx="2" fill="#6EE195"/>
            <rect y="32.4336" width="185.98" height="82.8458" rx="2" fill="#6EE195"/>
            <path d="M93.6917 44.0073V119.685C93.6917 88.3377 5.60128 106.99 11.1886 105.097V13.9262C55.2422 13.7193 70.5879 23.0426 93.6917 44.0073Z" fill="#16211B" stroke="#6EE195" stroke-width="3"/>
            <path d="M92.9909 44.0073V119.685C92.9909 88.3377 181.081 106.99 175.494 105.097V13.9262C131.44 13.7193 116.095 23.0426 92.9909 44.0073Z" fill="#16211B" stroke="#6EE195" stroke-width="3"/>
            <path d="M93.6917 35.3174V119.127C93.6916 84.4115 167.826 93.8716 163.124 91.7752V2.00373C126.05 1.77461 113.135 12.0998 93.6917 35.3174Z" fill="#16211B" stroke="#6EE195" stroke-width="3"/>
            <path d="M93.2048 35.3174V119.127C93.2048 84.4115 19.0701 93.8716 23.7722 91.7752V2.00373C60.8467 1.77461 73.7612 12.0998 93.2048 35.3174Z" fill="#16211B" stroke="#6EE195" stroke-width="3"/>
            <path d="M81.0672 45.4835C67.1035 33.216 58.233 30.3357 36.8828 28.6514" stroke="#6EE195" stroke-width="3"/>
            <path d="M104.212 45.4835C118.176 33.216 127.046 30.3357 148.396 28.6514" stroke="#6EE195" stroke-width="3"/>
            <path d="M81.0672 58.8087C67.1035 46.5412 58.233 43.6609 36.8828 41.9766" stroke="#6EE195" stroke-width="3"/>
            <path d="M104.212 58.8087C118.176 46.5412 127.046 43.6609 148.396 41.9766" stroke="#6EE195" stroke-width="3"/>
            <path d="M81.0672 70.7316C67.1035 58.4641 58.233 55.5837 36.8828 53.8994" stroke="#6EE195" stroke-width="3"/>
            <path d="M104.212 70.7316C118.176 58.4641 127.046 55.5837 148.396 53.8994" stroke="#6EE195" stroke-width="3"/>
            <path d="M81.0672 84.0568C67.1035 71.7893 58.233 68.9089 36.8828 67.2246" stroke="#6EE195" stroke-width="3"/>
            <path d="M104.212 84.0568C118.176 71.7893 127.046 68.9089 148.396 67.2246" stroke="#6EE195" stroke-width="3"/>
        </svg>`, 
        title: "About", 
        content: "Discover our story and the makings of this website.",
        link: "/about" },
        { svg: `
        <svg width="117" height="136" viewBox="0 0 117 136" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.5" y="1.5" width="113.203" height="133" rx="8.5" fill="#16211B" stroke="#6EE195" stroke-width="3"/>
            <line x1="57.6709" y1="32.0693" x2="94.6836" y2="32.0693" stroke="#6EE195" stroke-width="3"/>
            <line x1="23.2402" y1="32.0693" x2="36.1516" y2="32.0693" stroke="#6EE195" stroke-width="3"/>
            <line x1="57.6709" y1="57.8926" x2="94.6836" y2="57.8926" stroke="#6EE195" stroke-width="3"/>
            <line x1="23.2402" y1="57.8926" x2="36.1516" y2="57.8926" stroke="#6EE195" stroke-width="3"/>
            <line x1="57.6709" y1="83.7148" x2="94.6836" y2="83.7148" stroke="#6EE195" stroke-width="3"/>
            <line x1="57.6709" y1="109.538" x2="94.6836" y2="109.538" stroke="#6EE195" stroke-width="3"/>
            <line x1="23.2402" y1="83.7148" x2="36.1516" y2="83.7148" stroke="#6EE195" stroke-width="3"/>
            <line x1="23.2402" y1="109.538" x2="36.1516" y2="109.538" stroke="#6EE195" stroke-width="3"/>
        </svg>`, 
        title: "Details", 
        content: "Learn about which energy options best suit you.",
        link: "/details" },
        { svg: `
        <svg width="156" height="158" viewBox="0 0 156 158" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="13.9709" y="30.8986" width="57.5332" height="24.0976" transform="rotate(-30 13.9709 30.8986)" fill="#16211B" stroke="#6EE195" stroke-width="3"/>
            <rect x="-2.04904" y="0.549038" width="57.5332" height="24.0976" transform="matrix(-0.866025 -0.5 -0.5 0.866025 138.838 29.3156)" fill="#16211B" stroke="#6EE195" stroke-width="3"/>
            <path d="M78.5891 139.61L77.7641 82.7502L127.419 55.0347L128.244 111.895L78.5891 139.61Z" fill="#16211B" stroke="#6EE195" stroke-width="3"/>
            <path d="M77.0457 139.61L77.8707 82.7502L28.216 55.0347L27.391 111.895L77.0457 139.61Z" fill="#16211B" stroke="#6EE195" stroke-width="3"/>
            <path d="M28.3975 51.1735L77.2272 22.0291L126.057 51.1735L77.2272 80.3179L28.3975 51.1735Z" fill="#16211B" stroke="#6EE195" stroke-width="3"/>
            <rect x="140.338" y="71.6941" width="57.5332" height="24.0976" transform="rotate(150 140.338 71.6941)" fill="#16211B" stroke="#6EE195" stroke-width="3"/>
            <rect x="2.04904" y="-0.549038" width="57.5332" height="24.0976" transform="matrix(0.866025 0.5 0.5 -0.866025 12.4709 70.1111)" fill="#16211B" stroke="#6EE195" stroke-width="3"/>
        </svg>`, 
        title: "Products", 
        content: "Shop and find cheap, quality energy options for your home!",
        link: "/products" }
];
