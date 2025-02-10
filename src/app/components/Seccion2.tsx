// app/components/Section2.tsx
const Section2 = () => {
    return (
        <section id="section2" className="py-5">
            <div className="container">
                <h2 className="text-center mb-4">Autoridades</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card">
                            <img src="/images/autoridad1.png" className="card-img-top" alt="Autoridad 1" />
                            <div className="card-body">
                                <h5 className="card-title">Autoridad 1</h5>
                                <p className="card-text">Descripción de la autoridad.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="/images/autoridad2.png" className="card-img-top" alt="Autoridad 2" />
                            <div className="card-body">
                                <h5 className="card-title">Autoridad 2</h5>
                                <p className="card-text">Descripción de la autoridad.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="/images/autoridad3.png" className="card-img-top" alt="Autoridad 3" />
                            <div className="card-body">
                                <h5 className="card-title">Autoridad 3</h5>
                                <p className="card-text">Descripción de la autoridad.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section2;
