import store from './redux/store'

console.log('En index')
const itemListDOM = $('#itemList')
const itemDOM = $('#item')
const txtNuevaNotaDOM = $('#txtNuevaNota')

txtNuevaNotaDOM.keyup((e) => {
	if (e.keyCode === 13) {
		const text = txtNuevaNotaDOM.val()
		txtNuevaNotaDOM.val('')
		store.dispatch({
			type: 'AGREGAR',
			payload: {
				text
			},
		})
	}
})

function actualizarLista(items) {
	console.log('En actualizarLista')
	itemListDOM.html('')
	for (const item of items) {
		const cloneDOM = itemDOM.clone()
		const chkHabilitadoDOM = cloneDOM.find('input')
		const lblNombreDOM = cloneDOM.find('span')
		const btnBorrarDOM = cloneDOM.find('button')
		cloneDOM.removeClass('d-none')
		cloneDOM.addClass('d-flex')

		lblNombreDOM.html(item.text)
		if (item.completado) {
			lblNombreDOM.css('text-decoration', 'line-through')
		}
		chkHabilitadoDOM.prop('checked', item.completado)
		chkHabilitadoDOM.on('click', () => {
			store.dispatch({
				type: 'ALTERNAR',
				payload: {
					id: item.id,
				},
			})
		})
		btnBorrarDOM.on('click', () => {
			store.dispatch({
				type: 'BORRAR',
				payload: {
					id: item.id,
				},
			})
		})
		itemListDOM.append(cloneDOM)
	}
}

store.subscribe(() => {
  const state = store.getState()
  console.log('State', state)
	actualizarLista(state)
})
