export const BUSINESS={name:'Alif Galleria',address:'Mattur Main Road, Urgadur Circle, Shivamogga - 577205',primary:'917619268754',secondary:'918762857645'};
export const productDescriptions={
 'Luxurious Steel Doors':'A statement entrance with decorative detailing and a strong visual presence.',
 'UPVC Doors':'Clean lines and a versatile finish for your home or project.',
 'FRP Doors':'Explore fibre-reinforced plastic door options for your space.',
 'PVC Doors':'Practical door styles with a simple, contemporary look.',
 'Wooden Doors':'Warm finishes and familiar character for inviting interiors.',
 'Charcoal Panels':'Rich textures that bring depth to feature walls and interiors.',
 'Fluted Panels':'Architectural rhythm and a tactile finish for your walls.',
 'WPC Panels':'Wood-plastic composite panel options for your next project.',
 'UPVC Windows':'Frame your view with clean, contemporary window designs.',
 'Interior & Exterior Fabrication':'Discuss fabrication requirements for your home or project.'
};
export const products=[
 ['Luxurious Steel Doors','Doors','assets/images/products/luxurious-steel-door.jpg'],['UPVC Doors','Doors','assets/images/products/upvc-door.jpg'],['FRP Doors','Doors','assets/images/products/frp-door.jpg'],['PVC Doors','Doors','assets/images/products/pvc-door.jpg'],['Wooden Doors','Doors','assets/images/products/wooden-door.jpg'],['Charcoal Panels','Panels','assets/images/products/charcoal-panel.jpg'],['Fluted Panels','Panels','assets/images/products/fluted-panel.jpg'],['WPC Panels','Panels','assets/images/products/wpc-panel.jpg'],['UPVC Windows','Windows','assets/images/gallery/upvc-windows-project.jpeg'],['Interior & Exterior Fabrication','Fabrication','assets/images/gallery/workshop.jpg']
].map(([title,category,image])=>({title,category,image,description:productDescriptions[title],message:`Hi, I'm interested in ${title}.`}));
export const gallery=[
 ['assets/images/gallery/workshop.jpg','Workshop fabrication','Fabrication','image'],['assets/images/gallery/upvc-window-installation.jpg','UPVC window installation','Windows','image'],['assets/images/gallery/doors-and-windows-showcase.jpg','Doors & windows showcase','Doors & Windows','image'],['assets/images/gallery/upvc-windows-project.jpeg','UPVC windows project','Windows','image'],['assets/images/products/luxurious-steel-door.jpg','Steel Door — GL 900','Doors','image'],['assets/images/products/upvc-door.jpg','UPVC door installation','Doors & Windows','image'],['assets/images/products/luxurious-steel-door.jpg','Steel Door — GL 500','Doors','image'],['assets/images/products/upvc-door.jpg','UPVC door showcase','Doors','image'],['assets/images/products/wooden-door.jpg','Wooden door design','Doors','image'],['videos/showcase.mp4','Product showcase video','Video','video']
].map(([src,title,category,type])=>({src,title,category,type,poster:type==='video'?'assets/images/brand/process-poster.jpg':src}));
