
import BASE_PATH_FORAPI from "@/components/views/Hero/BasePath";
import Hero from "@/components/views/Hero/index";
import Jewellery from "@/components/views/jewellery/index";
import Newslatter from "@/components/views/NewsLatter/index";
import ProductCarousel from "@/components/views/ProductCarousel/index";
import ProductsType from "@/components/views/ProductTypes/index";

async function fetchAllProductsData() {
  let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-07-29/data/query/production?query=*[_type=="products"]`);//${BASE_PATH_FORAPI}/api/products
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
      {/* <ProductCarousel ProductData={response} /> */}
      <Jewellery />
      <Newslatter />
    </div>
  )
}
