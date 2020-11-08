// code js for certificates gallery

//get gallery div
const gal = document.getElementById('gallery');

let imagesCard = {
	'b_d_p_web-1' : 'Belajar Dasar Pemrograman Web',
	'b_f_web_development-1' : 'Belajar Fundamental Web Development-1',
	'm_PWA-1' : 'Membangun Progressive Web Apps',
	'B_p_solid-1' : 'Belajar Pemrograman Solid',
	'b_m_app_andro_pemula-1' : 'Belajar Memulai App Andro Pemula',
	'b_f_app_andro-1' : 'Belajar Fundamental App Android',
	'kotlin_andro_expert-1' : 'Kotlin Android Development Expert',
	'm_p_dart-1' : 'Memulai Pemrograman Dart',
	'm_p_kotlin-1' : 'Memulai Pemrograman Kotlin',
	'm_p_python-1' : 'Memulai Pemrograman Python',
	'b_d_azure_cloud-1' : 'Belajar Dasar Azure Cloude',
	'B_visualisasi_data-1' : 'Belajar Visualisasi Data',
	'ccnaR&S1_cisco-1' : 'CISCO CCNA R&S 1',
	'cybercexurity_cisco-1' : 'CISCO Cyber Security Computer',
	'ECC-Evaluation-Certificate-1' : 'ECC Council'
}

document.addEventListener('DOMContentLoaded', function(){
	let cardImageHTML = '';

	for(let key in imagesCard){
		cardImageHTML += `
		<div class="responsive">
			 <div class="img">
			    <img src="./../assets/img/certificate/${key}.jpg" alt="${imagesCard[key]}" width="300" height="200">
			 </div>
		</div>
		`;
	}

	gal.innerHTML = cardImageHTML

	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	    modal.style.display = "none";
	}

	// Get all images and insert the clicked image inside the modal
	// Get the content of the image description and insert it inside the modal image caption
	var images = document.getElementsByTagName('img');
	var modalImg = document.getElementById("img01");
	var i;
	for (i = 0; i < images.length; i++) {
	   images[i].onclick = function(){
	       modal.style.display = "block";
	       modalImg.src = this.src;
	       modalImg.alt = this.alt;
	   }
	}
});