import organizationData from '@/data/organization.json';

interface TeamMember {
    name: string;
    position: string;
    image: string;
    linkedin: string;
    email: string;
    letter?: string;
}

export default function OrganizationStaff() {
    const { teamStructure } = organizationData;
    const organizationTeam = teamStructure.organizationStaff;

    const TeamMemberCard = ({ member }: { member: TeamMember }) => (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            {/* Portrait Photo - Rectangle format like iumun.org */}
            <div className="h-80 bg-gradient-to-br from-[#2A535A] to-[#23484E] flex items-center justify-center relative overflow-hidden">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    {/* Placeholder for actual photo */}
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-4xl font-bold text-[#2A535A]">
                            {member.name.split(' ').map((n: string) => n[0]).join('')}
                        </span>
                    </div>
                </div>
            </div>

            <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-[#2A535A] font-semibold text-lg">{member.position}</p>

                <div className="flex justify-center items-center space-x-4 mt-4">
                    <a
                        href={`mailto:${member.email}`}
                        className="text-[#2A535A] hover:text-[#23484E] transition-colors"
                        title="Email"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                    </a>
                    <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2A535A] hover:text-[#23484E] transition-colors"
                        title="LinkedIn"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#2A535A] to-[#23484E] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Organization Staff</h1>
                        <p className="text-xl max-w-3xl mx-auto">
                            Meet our operational staff that handles the day-to-day management of WEDUMUN activities.
                        </p>
                    </div>
                </div>
            </section>

            {/* Organization Staff Members Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Organization Staff
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our operational staff handles the day-to-day management of WEDUMUN activities.
                            From event coordination to technology management, they ensure smooth operations
                            and exceptional experiences for all participants.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {organizationTeam.map((member, index) => (
                            <TeamMemberCard key={index} member={member} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
