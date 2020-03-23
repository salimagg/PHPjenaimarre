$(function(){


	$('[id*region_').on('click',function(){

		let region = $(this);

		let regionID = $(this)["0"].id;
		let allregion = $('[id*region_');

		console.log($(this));
		/*
		lors du clique
		toutes les regions devinnent blanche et ensuite la region cliquer devient verte
		*/
		allregion.css('fill','#fff');
		region.css('fill','00ff80')
		regionId = regionId.replace('region_','');


			console.log(regionId);

			let boucle = true;

			do(

				regionId = regionId.replace('_',' ');
				if(regionId.indexOf('_') == -1)
					boucle = false;



			)while(boucle);

			$('#infosRegion').text(regionId)

		regionId = regionId.replace('_',' ');


	});





})