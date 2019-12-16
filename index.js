var panorama, panosandpit, viewer, container, infospot1;

container = document.querySelector( '#container' );

// Hotspots //

infospot1 = new PANOLENS.Infospot();
      infospot1.position.set( -4732.52, -1372.88, -786.34 );
      infospot1.addHoverText( 'This is the sandpit' );

infospot_hc = new PANOLENS.Infospot();
        infospot_hc.position.set( -1258.27, 372.99, -4816.98 );
        // infospot_hc.addHoverText( 'Who is this person hiding?' );
        infospot_hc.addHoverElement( document.getElementById( 'desc-container_hc' ), 200 );


// Panoramas //

 panorama = new PANOLENS.ImagePanorama( 'images/broomhall/broomhall_kitchen_2.jpg' );
 panosandpit = new PANOLENS.ImagePanorama( 'images/broomhall/broomhall_sandpit_1.jpg' );
 panoplaykitchen = new PANOLENS.ImagePanorama( 'images/broomhall/play_kitchen.jpg' );


// Links //
// panorama.link( panosandpit, new THREE.Vector3( -4889.52, -471.57, -888.95 ) );
panorama.link( panoplaykitchen, new THREE.Vector3( -4889.52, -471.57, -888.95 ) );



 viewer = new PANOLENS.Viewer( { container: container, output: 'console' });
 panorama.add( infospot1 );
 panorama.add( infospot_hc );

viewer.add( panorama );
viewer.add( panosandpit );
viewer.add( panoplaykitchen );
