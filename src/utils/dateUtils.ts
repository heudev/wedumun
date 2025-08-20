// Utility functions for consistent date formatting across server and client

export function formatDate(dateString: string): string {
    const date = new Date(dateString);

    // Use consistent formatting to avoid hydration mismatches
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const day = date.getUTCDate();
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();

    return `${month} ${day}, ${year}`;
}

export function formatDateRange(startDate: string, endDate: string): string {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const startDay = start.getUTCDate();
    const startMonth = months[start.getUTCMonth()];
    const startYear = start.getUTCFullYear();

    const endDay = end.getUTCDate();
    const endMonth = months[end.getUTCMonth()];
    const endYear = end.getUTCFullYear();

    // Same month and year
    if (startMonth === endMonth && startYear === endYear) {
        return `${startMonth} ${startDay} - ${endDay}, ${startYear}`;
    }

    // Same year, different months
    if (startYear === endYear) {
        return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${startYear}`;
    }

    // Different years
    return `${startMonth} ${startDay}, ${startYear} - ${endMonth} ${endDay}, ${endYear}`;
}

export function getDay(dateString: string): number {
    const date = new Date(dateString);
    return date.getUTCDate();
}

export function getMonthYear(dateString: string): string {
    const date = new Date(dateString);

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();

    return `${month} ${year}`;
}
