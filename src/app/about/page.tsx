import Link from 'next/link';
import organizationData from '@/data/organization.json';
import eventsData from '@/data/events.json';

export default function About() {
    const { vision } = organizationData;
    const { pastEvents } = eventsData;

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#2A535A] to-[#23484E] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">What is WEDUMUN?</h1>
                        <p className="text-xl max-w-3xl mx-auto">
                            Learn about our organization, vision, and the journey that brought us here.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Organization Section */}
            <section id="organization" className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                        WEDUMUN Organization
                    </h2>
                    <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-justify">
                        <p>
                            WEDUMUN Organization is a dynamic project under Deniz İşleri that has been actively serving with experienced staff and officials since 2022. With a strong foundation built on the dedication and expertise of our team, we strive to create platforms where young individuals can engage in meaningful discussions, develop their skills, and expand their understanding of global affairs.
                        </p>
                        <p>
                            The conferences we organize are designed to unite young individuals from Türkiye and across the globe, fostering an environment of cross-cultural dialogue and mutual understanding. Our primary goal is to provide a platform where participants can engage in meaningful discussions, exchange ideas, and develop a deeper appreciation for global issues and international cooperation.
                        </p>
                        <p>
                            While our events welcome attendees from all parts of the world, we place a particular emphasis on creating opportunities for young people from the Eastern European region. This focus stems from our commitment to empowering youth from diverse backgrounds, enabling them to connect, collaborate, and contribute to shaping a more inclusive and interconnected future.
                        </p>
                        <p>
                            Through these conferences, we aim to cultivate an understanding of diplomacy, multilateralism, and the importance of international organizations among young minds. By bringing together individuals with varied perspectives and experiences, we hope to inspire a generation of global leaders who will champion dialogue, collaboration, and peace.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section id="vision" className="py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-white p-10 rounded-xl shadow-lg">
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">{vision.title}</h3>
                        <p className="text-lg text-gray-600 leading-relaxed text-justify">{vision.content}</p>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Support Us
                        </h2>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-6 text-gray-600 leading-relaxed text-justify">
                            <p>
                                By contributing to our organization, you play a vital role in passing on the principles and practices of modern diplomacy to future generations. Your support directly aids in alleviating the financial challenges associated with organizing our conferences, ensuring their accessibility and success. We welcome all forms of financial assistance, including grants, sponsorships, advertisements, or direct provision of resources to meet our operational needs.
                            </p>
                            <p>
                                Our organization is committed to fostering mutually beneficial partnerships, working closely with supporters to create opportunities that deliver value to both our collaborators and our target audience. It is our primary objective to provide an exceptional environment for participants, ensuring their experiences are both enriching and impactful.
                            </p>
                            <p>
                                By supporting our mission, you not only contribute to the present success of our initiatives but also invest in shaping a better future. We invite you to collaborate with us and join hands in this meaningful endeavor. For further details, conditions, and an evaluation of potential partnership opportunities, please feel free to contact our General Secretariat directly. We would be delighted to explore ways to cooperate and work toward our shared goals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-r from-[#2A535A] to-[#23484E] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Join Our Mission
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Be part of our growing community and help shape the future of international diplomacy.
                    </p>
                    <div className="space-x-4">
                        <Link
                            href="/events"
                            className="inline-block bg-white text-[#2A535A] hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                        >
                            View Events
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#2A535A] font-semibold py-3 px-8 rounded-lg transition-all duration-200"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
