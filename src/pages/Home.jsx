import Header from "../components/header";
import useFetch from "../hooks/useFetch";
import Product from "../components/Product";

function Home() {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products?limit=10"
  );

  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center full-height">
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
        Error en la conexión, regrese más tarde después de pagar su internet
      </div>
    );

  return (
    <>
      <Header></Header>

      <main>
        <section className="container d-grid-container">
          {data.map((p) => {
            let { id, title, price, description, category, image } = p;
            return (
              <div key={id} className="card p-3">
                <Product
                  id={id}
                  title={title}
                  description={description}
                  price={price}
                  category={category}
                  img={image}
                  className="d-flex-card"
                />
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default Home;
