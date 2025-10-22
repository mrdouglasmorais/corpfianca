import Link from "next/link";

export default function TestPage() {
    return (
        <div style={{ padding: "20px" }}>
            <h1>Teste de Seções Problemáticas</h1>

            <div style={{ marginBottom: "40px" }}>
                <h2>Teste Fun Facts</h2>
                <section className="tj-counter-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="sec-heading text-center">
                                    <span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
                                        Fun facts
                                    </span>
                                    <h2 className="sec-title text-anim">
                                        Exploring fun tidbits and fascinating facts
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div style={{ marginBottom: "40px" }}>
                <h2>Teste Testimonials</h2>
                <section className="tj-testimonial-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="sec-heading">
                                    <div className="sec-text">
                                        <span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
                                            Testimonials
                                        </span>
                                        <h2 className="sec-title text-anim">
                                            Listening to our clients
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div style={{ marginBottom: "40px" }}>
                <h2>Teste Portfolios</h2>
                <section className="tj-project-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="sec-heading text-center">
                                    <span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
                                        Our projects
                                    </span>
                                    <h2 className="sec-title text-anim">Breakthrough projects</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Link href="/">← Voltar para Home</Link>
        </div>
    );
}
