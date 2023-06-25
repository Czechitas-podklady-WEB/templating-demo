const storageKey = 'token'

const checkToken = async (token) => {
	if (!token) {
		return false
	}
	try {
		const response = await fetch('https://kodim.cz/api/me', {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		const data = await response.json()
		if (data?.email) {
			return true
		}
	} catch (error) {
		console.error(error)
		return false
	}

	return true
}

export const getToken = async () => {
	const token = localStorage.getItem(storageKey)

	if (await checkToken(token)) {
		return token
	}

	const newToken = prompt('Zadejte tajný token z vašeho účtu na kodim.cz:')
	if (newToken !== null) {
		localStorage.setItem(storageKey, newToken)
	}

	return await getToken()
}
