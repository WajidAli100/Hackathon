
import BASE_PATH_FORAPI from "@/components/views/Hero/BasePath";
import Hero from "@/components/views/Hero/index";
import ProductCarousel from "@/components/views/ProductCarousel/index";
import ProductsType from "@/components/views/ProductTypes/index";

async function fetchAllProductsData() {
  let res = await fetch(`${BASE_PATH_FORAPI}/api/products`);
  if (!res.ok) {
    throw new Error("Failed to fetch")
  }
  return res.json();
}

export default async function Home() {
  let { response } = await fetchAllProductsData();
  console.log("response :", response)
  return (
    <div>
      <Hero />
      <ProductsType />
      <ProductCarousel ProductData={response} />
    </div>
  )
}
