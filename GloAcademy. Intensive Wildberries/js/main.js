const mySwiper = new Swiper('.swiper-container', {
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
	},
});


//cart
const buttonCart = document.querySelector('.button-cart');
const modalCart = document.querySelector('#modal-cart');
const modalClose = document.querySelector('.modal-close');
//goods
const viewAll = document.querySelectorAll('.view-all');
const navigationLink = document.querySelectorAll('.navigation-link:not(.view-all');
const longGoodsList = document.querySelector('.long-goods-list');
const AllAccessories = document.querySelectorAll('.all-accessories');
const AllClothing = document.querySelectorAll('.all-clothing');
const cartTableGoods = document.querySelector('.cart-table__goods');
const cartTableTotal = document.querySelector('.card-table__total');
const cartCount = document.querySelector('.cart-count');
const resetBtn = document.querySelector('.resetAll');


const checkGoods = () => {
	const data = [];
	return async () => {
		if (data.length) return data;

		const result = await fetch('db/db.json');
		if(!result.ok) {
			throw "this is an error: " + result.status
		}
		data.push(...(await result.json()));

		return data
	};
}

const getGoods = checkGoods();
// const getGoods = async () => {
// 	const result = await fetch('db/db.json');
// 	if (!result.ok) {
// 		throw 'Error ' + result.status 
// 	}
// 	return await result.json();
// };


const cart = {
	cartGoods: [
		// {
		// 	id: "099",
		// 	name: "Clocks Dior" ,
		// 	price: 999,
		// 	count: 2,
		// },
		// {
		// 	id: "09",
		// 	name: "Shoes Addr" ,
		// 	price: 9,
		// 	count: 3,
		// }
	],
	renderCart(){
		cartTableGoods.textContent = "";
		this.cartGoods.forEach(({ id, name, price, count}) => {
			const trGood = document.createElement('tr');
			trGood.className = 'cart-item';
			trGood.dataset.id = id;


			// trGood.innerHTML = `
			// 	<td>${name}</td>
			// 	<td>${price}$</td>
			// 	<td><button class="cart-btn-minus" data-id="${id}">-</button></td>
			// 	<td>${count}</td>
			// 	<td><button class="cart-btn-plus" data-id="${id}">+</button></td>
			// 	<td>${price * count}$</td>
			// 	<td><button class="cart-btn-delete" data-id="${id}">x</button></td>
			// `;

			trGood.innerHTML = `
				<td>${name}</td>
				<td>${price}$</td>
				<td><button class="cart-btn-minus">-</button></td>
				<td>${count}</td>
				<td><button class="cart-btn-plus">+</button></td>
				<td>${price * count}$</td>
				<td><button class="cart-btn-delete">x</button></td>
			`;
			cartTableGoods.append(trGood);
		});

		const totalPrice = this.cartGoods.reduce((sum, item) => {
			return sum + (item.price * item.count);
		}, 0);
		cartTableTotal.textContent = totalPrice + '$';
	},
	deleteGood(id){
		this.cartGoods = this.cartGoods.filter(item => id !== item.id);
		this.renderCart();
		this.showCartGoodsNumber();
	},
	minusGood(id){
		for(const item of this.cartGoods) {
			if(item.id === id) {
				if(item.count <= 1) {
					this.deleteGood(id);
				} else {
					item.count--;
				}
				break;
			}
		}
		this.renderCart();
		this.showCartGoodsNumber();
	},
	plusGood(id){
		for(const item of this.cartGoods) {
			if(item.id === id) {
				item.count++;
				break;
			}
		}
		this.renderCart();
		this.showCartGoodsNumber();
	},
	addCartGoods(id){
		const goodItem = this.cartGoods.find(item => item.id === id);
		if (goodItem) {
			this.plusGood(id);
		} else {
			getGoods()
				.then(data => data.find(item => item.id === id))
				.then (({id, name, price } )=> {
					this.cartGoods.push({
						id,
						name,
						price,
						count: 1
					})
					this.showCartGoodsNumber();
				});

		}
	},
	showCartGoodsNumber() {
		
		this.cartGoods.reduce((sum, item) => {
			console.log('sum is' + sum);
			console.log('item.count is ' + item.count);
			cartCount.textContent =  sum + item.count;
			return parseInt(cartCount.textContent);
		},0)
	
		
	},
	clearCart() {
		this.cartGoods.length = 0;
		this.showCartGoodsNumber();
		this.renderCart();
	}
	
	// const totalPrice = this.cartGoods.reduce((sum, item) => {
	// 	return sum + (item.price * item.count);
	// }, 0);
	// cartTableTotal.textContent = totalPrice + '$';
}

// cart.showCartGoodsNumber();

//we lost This and need any of these 2 solutions
resetBtn.addEventListener('click', cart.clearCart.bind(cart));
// resetBtn.addEventListener('click', () => {
// 	cart.clearCart();
// });

document.body.addEventListener('click', event => {
	const addToCart = event.target.closest('.add-to-cart');

	if(addToCart) {
		cart.addCartGoods(addToCart.dataset.id);
	}
	cart.showCartGoodsNumber();
})

cartTableGoods.addEventListener('click', event => {
	const target =  event.target;

	if(target.tagName === 'BUTTON') {
		const id = target.closest('.cart-item').dataset.id;

		if (target.classList.contains('cart-btn-delete')) {
			// cart.deleteGood(target.dataset.id);
			cart.deleteGood(id);
			cart.showCartGoodsNumber();
		};
		if(target.classList.contains('cart-btn-minus')) {
			cart.minusGood(id);
			cart.showCartGoodsNumber();
		}
		if(target.classList.contains('cart-btn-plus')) {
			cart.plusGood(id);
			cart.showCartGoodsNumber();
		}
	}
	
})

const openModal = () => {
	cart.renderCart();
	modalCart.classList.add('show');	
};

const closeModal = () => {
	modalCart.classList.remove('show');
};

buttonCart.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);
// modalCart.addEventListener('click', closeModal);


//scroll smooth
{const scrollLinks = document.querySelectorAll('a.scroll-link');

 
	// for (let i = 0; i < scrollLinks.length; i++) {
	// 	scrollLinks[i].addEventListener ('click', function(event) {
	// 		event.preventDefault();
	// 		const id = scrollLinks[i].getAttribute('href');
	// 		document.querySelector(id).scrollIntoView({
	// 			behavior: 'smooth',
	// 			block: 'start',
	// 		});
	// 	})
	// }
	for (const scrollLink of scrollLinks) {
		scrollLink.addEventListener ('click', event => {
			event.preventDefault();
			const id = scrollLink.getAttribute('href');
			document.querySelector(id).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		})
	}
	
}







// getGoods().then(function (data) {
// 	console.log(data);
// });

const createCard = function ({ label, name, img, description, id, price }) {
	const card = document.createElement('div');
	card.className = 'col-lg-3 col-sm-6';
	
	card.innerHTML = `
		<div class="goods-card">
		${label ?
			 `<span class="label">${label}</span>` :
			  ""}
			
			<img src="db/${img}" alt="${name}" class="goods-image">
			<h3 class="goods-title">${name}</h3>
			<p class="goods-description">${description}</p>
			<button class="button goods-card-btn add-to-cart" data-id="${id}">
				<span class="button-price">$${price}</span>
			</button>
		</div>
	`;

	return card;
}

const renderCards = function(data) {
	longGoodsList.textContent = '';
	const cards = data.map(createCard);
	// cards.forEach( function(card) {
	// 	longGoodsList.append(card);
	// });
	longGoodsList.append(...cards);
	document.body.classList.add('show-goods');
};

const showAll = event => {
	event.preventDefault();
	getGoods().then(renderCards);
};

viewAll.forEach(function(elem) {
	elem.addEventListener('click', showAll);
});
// const id = viewAll.getAttribute('href');
// document.querySelector(id).scrollIntoView({
// 		behavior: 'smooth',
// 		block: 'start',
// 	});

const filterCards = function  (field, value) {
	getGoods()
		.then(data => data.filter(good => good[field] === value))
		.then(renderCards);
}

navigationLink.forEach(function (link) {
	link.addEventListener('click', event => {
		event.preventDefault();
		
		
		const field = link.dataset.field;
		const value = link.textContent;

		// if (value == 'All') {
		// 	return getGoods().then(renderCards);
		// }

		filterCards(field, value);
		
	})
})



// AllAccessories.addEventListener('click', function (event) {
// 	event.preventDefault();
// 	const field = AllAccessories.dataset.field;
// 	const value = "Accessories";
// 	filterCards(field, value);
// 	const id = AllAccessories.getAttribute('href');
// 	document.querySelector(id).scrollIntoView({
// 		behavior: 'smooth',
// 		block: 'start',
// 	});
// });

AllAccessories.forEach(item => {
	item.addEventListener('click', event => {
		event.preventDefault();	
		filterCards('category', 'Accessories');	
		
			const id = item.getAttribute('href');
			document.querySelector(id).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		
		
	});
});

AllClothing.forEach(item => {
	item.addEventListener('click', event => {
		event.preventDefault();
		filterCards('category', 'Clothing');

		const id = item.getAttribute('href');
			document.querySelector(id).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
	});
});



