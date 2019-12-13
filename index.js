var panorama, panorama2, viewer, container, infospot;

container = document.querySelector( '#container' );


 panorama = new PANOLENS.ImagePanorama( 'images/broomhall/broomhall_kitchen_2.jpg' );
 viewer = new PANOLENS.Viewer( { container: container });
viewer.add( panorama );
