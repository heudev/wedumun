import organizationData from '@/data/organization.json';
import eventsData from '@/data/events.json';

export default function About() {
    const { organization, vision, mission, values } = organizationData;
    const { pastEvents } = eventsData;

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#2A535A] to-[#23484E] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">About WEDUMUN</h1>
                        <p className="text-xl max-w-3xl mx-auto">
                            Learn about our organization, vision, and the journey that has made us a leading force in Model United Nations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Organization Section */}
            <section id="organization" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Our Organization
                            </h2>
                            <div className="space-y-4">
                                <p className="text-lg text-gray-600">
                                    {organization.description}
                                </p>
                                <div className="grid grid-cols-2 gap-4 mt-8">
                                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                                        <div className="text-2xl font-bold text-[#2A535A]">Founded</div>
                                        <div className="text-gray-600">{organization.founded}</div>
                                    </div>
                                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                                        <div className="text-2xl font-bold text-[#2A535A]">Focus</div>
                                        <div className="text-gray-600">Model UN</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:order-first">
                            <div className="h-64 bg-gradient-to-br from-[#2A535A] to-[#23484E] rounded-lg"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section id="vision" className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{vision.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{vision.content}</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{mission.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{mission.content}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Values
                        </h2>
                        <p className="text-lg text-gray-600">
                            The principles that guide everything we do
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-[#2A535A] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">{value.title[0]}</span>
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Previous Activities Section */}
            <section id="activities" className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Previous Activities
                        </h2>
                        <p className="text-lg text-gray-600">
                            A showcase of our successful conferences and events
                        </p>
                    </div>

                    <div className="space-y-8">
                        {pastEvents.map((event, index) => (
                            <div key={event.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                    <div className="h-64 bg-gradient-to-br from-[#2A535A] to-[#23484E] rounded-lg"></div>
                                </div>
                                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h3>
                                    <p className="text-gray-600 mb-6">{event.description}</p>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-[#2A535A]">{event.participants}</div>
                                            <div className="text-sm text-gray-600">Participants</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-[#2A535A]">{event.countries}</div>
                                            <div className="text-sm text-gray-600">Countries</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-[#2A535A]">
                                                {new Date(event.date).getFullYear()}
                                            </div>
                                            <div className="text-sm text-gray-600">Year</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
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
                        <a
                            href="/events"
                            className="inline-block bg-white text-[#2A535A] hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                        >
                            View Events
                        </a>
                        <a
                            href="/contact"
                            className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#2A535A] font-semibold py-3 px-8 rounded-lg transition-all duration-200"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
