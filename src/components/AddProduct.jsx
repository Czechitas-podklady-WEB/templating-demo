import './AddProduct.css'

export const AddProduct = () => {
	return (
		<form className="add-product" id="add-product">
			<h3 className="add-product__title">Přidat produkt</h3>
			<label>
				Název produktu: <input id="product-name" required type="text" />
			</label>
			<label>
				Počet: <input id="product-amount" required type="number" />
			</label>
			<label>
				Jednotka:{' '}
				<input
					id="product-unit"
					required
					className="field-input unit-input"
					list="amount-units"
					type="text"
				/>
				<datalist id="amount-units">
					<option value="ks" />
					<option value="g" />
					<option value="kg" />
					<option value="balení" />
					<option value="l" />
				</datalist>
			</label>
			<button>Přidat</button>
		</form>
	)
}
