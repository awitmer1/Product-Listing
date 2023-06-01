
export const processCategories = (products) => {
    let categories = products.map((product) => product.category);
    let uniqueCategories = [...new Set(categories)];
    return uniqueCategories;
}