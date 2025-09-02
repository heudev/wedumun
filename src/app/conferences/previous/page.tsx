import Link from 'next/link';
import Image from 'next/image';

export default function PreviousConferencesPage() {
    const previousConferences = [
        {
            id: 1,
            title: "ESDALMUN 2025",
            date: "2025",
            location: "Katip Çelebi University, Izmir Türkiye",
            participants: 260,
            committees: 5,
            description: "Together applications from all over the world and unique committees, WEDUMN's first annual conference, ESDALMUN 2025, was held at Izmir Katip Çelebi University. With the magnificent Izmir Gulf Ferry Tour social!",
            image: "https://drive.google.com/uc?export=view&id=15NZHKIl2xz0g1e4Zvx6MSlOZPrzuadQP",
            highlights: [
                "5 specialized committees",
                "260+ participants",
                "Experiencing modern political atmosphere",
                "Free Izmir Gulf Ferry Social Event"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#2A535A] to-[#23484E] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Previous Conferences
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-gray-200">
                            Celebrating our successful conferences and achievements
                        </p>
                    </div>
                </div>
            </section>

            {/* Konferans Listesi */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-12">
                        {previousConferences.map((conference, index) => (
                            <div
                                key={conference.id}
                                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
                            >
                                <div className="w-full lg:w-1/2">
                                    <div className="rounded-lg h-48 sm:h-56 md:h-64 overflow-hidden shadow-lg relative">
                                        <Image
                                            src={conference.image}
                                            alt={`${conference.title} Conference`}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-300"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                                            priority
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <div className="bg-white rounded-lg shadow-lg p-8">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                            {conference.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                                            <span className="flex items-center">
                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                {conference.date}
                                            </span>
                                            <span className="flex items-center">
                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                {conference.location}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 mb-6">
                                            {conference.description}
                                        </p>
                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div className="text-center p-3 bg-gray-50 rounded">
                                                <div className="text-lg font-bold text-[#2A535A]">{conference.participants}</div>
                                                <div className="text-sm text-gray-600">Participants</div>
                                            </div>
                                            <div className="text-center p-3 bg-gray-50 rounded">
                                                <div className="text-lg font-bold text-[#2A535A]">{conference.committees}</div>
                                                <div className="text-sm text-gray-600">Committees</div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-2">Conference Highlights:</h4>
                                            <ul className="space-y-1">
                                                {conference.highlights.map((highlight, idx) => (
                                                    <li key={idx} className="flex items-center text-sm text-gray-600">
                                                        <svg className="w-3 h-3 mr-2 text-[#2A535A]" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                        {highlight}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fotoğraf Galerisi */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Conference Moments
                        </h2>
                        <p className="text-xl text-gray-600">
                            Memorable moments from our conferences
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {[
                            "https://drive.google.com/uc?export=view&id=1-Z0CBlMqFwIHR6sMagzIt93A_qNwobQg",
                            "https://drive.google.com/uc?export=view&id=1GwC0unDctZfl7UhRytM9zPSzmPMAObDB",
                            "https://drive.google.com/uc?export=view&id=1zRHKg-Q1bWEJzDibdYcijugsVN0LsGmF",
                            "https://drive.google.com/uc?export=view&id=1Zdel7t0aMOBR0IhTVe6Wu1ziNlg9gQvg",
                            "https://drive.google.com/uc?export=view&id=1WVrmAGVnfIipHdXNrbujvDC65JD7fyW1",
                            "https://drive.google.com/uc?export=view&id=1G1R3eWPv5LYjbnBE3wnK6vpcN8njHFlJ"
                        ].map((imageUrl, index) => (
                            <div key={index} className="rounded-lg h-40 sm:h-48 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <Image
                                    src={imageUrl}
                                    alt={`Conference moment ${index + 1}`}
                                    width={1920}
                                    height={1080}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Çağrı */}
            <section className="bg-[#2A535A] text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Join Our Next Conference
                    </h2>
                    <p className="text-xl mb-8 text-gray-200">
                        Be part of our upcoming events and continue the legacy of diplomatic excellence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/events"
                            className="inline-block bg-white text-[#2A535A] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                        >
                            View Upcoming Events
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#2A535A] transition-colors duration-300"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
