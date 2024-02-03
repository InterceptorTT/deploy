import { countries } from "../../../data.js"
import { error } from "@sveltejs/kit"

export function load({ params }) {
    const country = countries.find((country) => country.name === params.name)

    if (!country) {
        throw error(404, "not found")
    }
    return { country }
}