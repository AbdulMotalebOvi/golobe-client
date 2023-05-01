import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Golobe Live And Travels`
    }, [title])
}
export default useTitle