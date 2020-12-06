$(document).ready(function(){
	$('.news .owl-carousel').owlCarousel({
		loop:false,
		margin:30,
		nav:true,
		dots:false,
		navText: ["<span class='fa fa-arrow-left control-left'></span>","<span class='fa fa-arrow-right control-right'></span>"],

		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		},
	});
	$('.owl-carousel').owlCarousel({
		loop:false,
		margin:15,
		nav:true,
		dots:false,
		navText: ["<span class='fa fa-arrow-left control-left'></span>","<span class='fa fa-arrow-right control-right'></span>"],

		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:4
			}
		},
	});
	$(document).scroll(function() {
		if($(this).scrollTop()>100){
			$("#menu").addClass('menu-fixedTop');
		}else {
			$("#menu").removeClass('menu-fixedTop');
		}
		if($(this).scrollTop()>200){
			$(".scroll-to-top").removeClass('d-none');
		}else {
			$(".scroll-to-top").addClass('d-none');
		}
	});
	$(".scroll-to-top").click(function(){
		$("body").animate({
			scrollTop:0
		},1500);
	});
	$('[data-toggle="tooltip"]').tooltip();
	$(".slide-button").click(function(event) {

		const idFilter = event.target.dataset.filter;
		$(this).siblings().removeClass('button-active');
		$(this).addClass('button-active');
		$(this).parent().parent().siblings().addClass('d-none');
		$(this).parent().parent().siblings("#"+idFilter.toString()).removeClass('d-none');
		$(this).parent().parent().siblings("#"+idFilter.toString()).fadeIn("2000");
	});


	// ==========ADD PRODUCT===========
	$(".product-overlay .fa-shopping-bag").click(function(event) {
		/* Act on the event */
		console.log(event.target);
		let cartItem = document.createElement("li");
		$(cartItem).addClass('nav-cart-product-item');
		let srcImg = $(event.target).parent().prev().attr("src");
		let productName = $(event.target).parent().parent().next().text();
		let productPrice = $(event.target).parent().parent().next().next().text();
		cartItem.innerHTML = `<img src="${srcImg}" alt="" class="nav-cart-img">
													<div class="nav-cart-product-detail">
													  <p class="product-title">${productName}</p>
		                        <p class="product-cost">${productPrice}</p>
		                        <p class="product-amount">x1</p>
		                      </div>
		                      <span class="delete-product fa fa-remove"></span>`;
		console.log(cartItem);
		$(".nav-cart-product").append(cartItem);
		// $(".nav-cart-product").html(cart);
	});

});