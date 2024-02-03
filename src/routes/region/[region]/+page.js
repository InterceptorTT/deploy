import { countries } from "../../../data.js"
import { error } from "@sveltejs/kit"

export function load({params}){
    const region = countries.filter((country) => country.region === params.region)
    if(!region){
        throw error(404, "Region not found")
    }
    return {
        region
    }
}