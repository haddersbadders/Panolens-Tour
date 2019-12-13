var panorama, panorama2, viewer, container, infospot1;

container = document.querySelector( '#container' );
infospot1 = new PANOLENS.Infospot();
      infospot1.position.set( -4732.52, -1372.88, -786.34 );
      infospot1.addHoverText( 'This is the sandpit' );

 panorama = new PANOLENS.ImagePanorama( 'images/broomhall/broomhall_kitchen_2.jpg' );
 viewer = new PANOLENS.Viewer( { container: container, output: 'console' });
 panorama.add( infospot1 );

viewer.add( panorama );
