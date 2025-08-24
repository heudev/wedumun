import Link from 'next/link';
import Image from 'next/image';
import organizationData from '@/data/organization.json';

export default function About() {
    const { vision } = organizationData;

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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                            WEDUMUN Organization
                        </h2>
                    </div>

                    {/* First Section - Dynamic Platform */}
                    <div className="mb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="Team collaboration"
                                        width={800}
                                        height={256}
                                        className="w-full h-64 object-cover rounded-xl shadow-lg"
                                    />
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Dynamic Project Under Deniz İşleri</h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    WEDUMUN Organization is a dynamic project under Deniz İşleri that has been actively serving with experienced staff and officials since 2022. With a strong foundation built on the dedication and expertise of our team, we strive to create platforms where young individuals can engage in meaningful discussions, develop their skills, and expand their understanding of global affairs.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Second Section - Global Unity */}
                    <div className="mb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Uniting Global Youth</h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    The conferences we organize are designed to unite young individuals from Türkiye and across the globe, fostering an environment of cross-cultural dialogue and mutual understanding. Our primary goal is to provide a platform where participants can engage in meaningful discussions, exchange ideas, and develop a deeper appreciation for global issues and international cooperation.
                                </p>
                            </div>
                            <div>
                                <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="Global cooperation"
                                        width={800}
                                        height={256}
                                        className="w-full h-64 object-cover rounded-xl shadow-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Third Section - Eastern European Focus */}
                    <div className="mb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-8 rounded-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="European cooperation"
                                        width={800}
                                        height={256}
                                        className="w-full h-64 object-cover rounded-xl shadow-lg"
                                    />
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Focus on Eastern European Youth</h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    While our events welcome attendees from all parts of the world, we place a particular emphasis on creating opportunities for young people from the Eastern European region. This focus stems from our commitment to empowering youth from diverse backgrounds, enabling them to connect, collaborate, and contribute to shaping a more inclusive and interconnected future.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Fourth Section - Diplomacy & Leadership */}
                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Cultivating Future Leaders</h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Through these conferences, we aim to cultivate an understanding of diplomacy, multilateralism, and the importance of international organizations among young minds. By bringing together individuals with varied perspectives and experiences, we hope to inspire a generation of global leaders who will champion dialogue, collaboration, and peace.
                                </p>
                            </div>
                            <div>
                                <div className="bg-gradient-to-br from-amber-50 to-orange-100 p-8 rounded-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="Conference and diplomacy"
                                        width={800}
                                        height={256}
                                        className="w-full h-64 object-cover rounded-xl shadow-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section id="vision" className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white p-12 rounded-xl shadow-lg border-l-4 border-[#2A535A]">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">{vision.title}</h3>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8 text-justify">{vision.content}</p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <span className="bg-[#2A535A] text-white px-4 py-2 rounded-lg text-sm font-medium">UN Awareness</span>
                            <span className="bg-[#2A535A] text-white px-4 py-2 rounded-lg text-sm font-medium">NATO Understanding</span>
                            <span className="bg-[#2A535A] text-white px-4 py-2 rounded-lg text-sm font-medium">Global Peace</span>
                            <span className="bg-[#2A535A] text-white px-4 py-2 rounded-lg text-sm font-medium">Youth Empowerment</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Support Us
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Join us in shaping the future of international diplomacy and youth empowerment
                        </p>
                    </div>

                    {/* Support Content with Images */}
                    <div className="space-y-16">
                        {/* Financial Support Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Financial Partnership</h3>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    By contributing to our organization, you play a vital role in passing on the principles and practices of modern diplomacy to future generations. Your support directly aids in alleviating the financial challenges associated with organizing our conferences, ensuring their accessibility and success.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Grants</span>
                                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Sponsorships</span>
                                    <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">Advertisements</span>
                                    <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">Resources</span>
                                </div>
                            </div>
                            <div>
                                <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="Partnership and support"
                                        width={800}
                                        height={256}
                                        className="w-full h-64 object-cover rounded-xl shadow-lg"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Mutual Benefits Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="bg-gradient-to-br from-rose-50 to-pink-100 p-8 rounded-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="Mutual partnership"
                                        width={800}
                                        height={256}
                                        className="w-full h-64 object-cover rounded-xl shadow-lg"
                                    />
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Mutually Beneficial Partnerships</h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Our organization is committed to fostering mutually beneficial partnerships, working closely with supporters to create opportunities that deliver value to both our collaborators and our target audience. It is our primary objective to provide an exceptional environment for participants, ensuring their experiences are both enriching and impactful.
                                </p>
                            </div>
                        </div>

                        {/* Future Investment Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Investing in the Future</h3>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    By supporting our mission, you not only contribute to the present success of our initiatives but also invest in shaping a better future. We invite you to collaborate with us and join hands in this meaningful endeavor.
                                </p>
                                <div className="bg-gradient-to-r from-[#2A535A] to-[#23484E] text-white p-6 rounded-xl">
                                    <p className="text-center font-medium">
                                        Contact our General Secretariat for partnership opportunities and collaboration details
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="bg-gradient-to-br from-emerald-50 to-teal-100 p-8 rounded-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="Future leaders"
                                        width={800}
                                        height={256}
                                        className="w-full h-64 object-cover rounded-xl shadow-lg"
                                    />
                                </div>
                            </div>
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
