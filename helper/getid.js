const getId = () => {
    const date = date.now().toString(36).slice(2)
    const random = Math.random().toString(36).slice(2)
    return date + random
}
export default getId