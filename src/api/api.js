export const getAdvantages  = async () => {
    const res = await fetch("http://localhost:3000/advantages");
    const data = await res.json();
    return data;
}
export const getPromos  = async () => {
    const res = await fetch("http://localhost:3000/promos");
    const data = await res.json();
    return data;
}
export const getPopulars  = async () => {
    const res = await fetch("http://localhost:3000/popular");
    const data = await res.json();
    return data;
}
export const getProducts  = async () => {
    const res = await fetch("http://localhost:3000/products");
    const data = await res.json();
    return data;
}
export const getCollection  = async () => {
    const res = await fetch("http://localhost:3000/collection");
    const data = await res.json();
    return data;
}
export const getOrder  = async () => {
    const res = await fetch("http://localhost:3000/orders");
    const data = await res.json();
    return data;
}