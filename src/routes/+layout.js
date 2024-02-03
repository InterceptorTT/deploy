import { countries } from "../data.js"
export const prerender = true

export function load() {
    return { countries }
}

