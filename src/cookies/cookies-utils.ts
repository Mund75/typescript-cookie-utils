/*
 * Utils for managing cookies in Typescript.
 */
export function setCookie(name: string, val: string, date?: Date) {

	const value = val;
  const cookie = `${name}=${value}; path=/`;
	
	//Check if date is set
	if (date) {
		cookie.concat(`; expires=${date.toUTCString()}`);
	}

	// Set cookie
	document.cookie = cookie;
}

export function getCookie(cookieName: string) {
	return new RegExp(`${cookieName}=([^;]+);`).exec(document.cookie)?.[1];
}

export function deleteCookie(name: string) {
	const date = new Date();
	const cookie = `${name}=; path=/`;

	// Set cookie expire in -1 days
	date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));

	// Set cookie
	document.cookie = cookie.concat(`; expires=${date.toUTCString()}`);
}
