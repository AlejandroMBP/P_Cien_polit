// app/components/Section3.tsx
const Section3 = () => {
    return (
        <section id="section3" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-4">Ubicación</h2>
                <p className="text-center">Aquí va la descripción de la ubicación.</p>
                <div className="text-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122372.96822911955!2d-68.31239409038959!3d-16.568690946237126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915ede3378ea9d6d%3A0x26cac4a2caefcb29!2sUniversidad%20P%C3%BAblica%20de%20El%20Alto!5e0!3m2!1ses!2sbo!4v1739149471050!5m2!1ses!2sbo"
                        width="1000"
                        height="450"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </section>
    );
};

export default Section3;
