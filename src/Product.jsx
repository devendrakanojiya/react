

function Product({title,price}){
if (price>200){
	return(
	<div>
		<h1>Title: {title}</h1>
		<p>Price: {price}</p>
		<p>Discount 5%</p>
	</div>
	);	
}else{
	return(
	<div>
		<h1>Title: {title}</h1>
		<p>Price: {price}</p>
	</div>)
}
}

export  default Product;