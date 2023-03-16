import React from "react"
import { EXAMPLE_DATA } from "../example/data-set"
import { Data } from "../types/data"

/**
 * Custom hook which loads data like Tanstack useQuery except invoking HTTP request.
 * @param enabled 
 * @returns 
 */
export const useData= (enabled = true)=> {
    const [data, setData] = React.useState<Data[]>([])

    const refetch = () => {setData(EXAMPLE_DATA)}

    React.useEffect(() => {
        refetch()
    }, [enabled])

    return {data, refetch, isLoading: false}
}